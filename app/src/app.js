// Application Express.
// On exporte l'instance "app" sans demarrer l'ecoute reseau ici :
// cela permet a Supertest de la manipuler directement dans les tests.

const express = require('express');
const { add } = require('./calc');

const app = express();

// Permet de lire les corps de requete au format JSON si besoin.
app.use(express.json());

// Route de sante : utilisee par le script de deploiement (TP2) et par
// Docker Compose (TP4) pour verifier que l'application repond.
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Route de version : renvoie la version de l'application.
app.get('/api/version', (req, res) => {
  res.status(200).json({ version: '1.0.0' });
});

// Route de calcul : additionne deux nombres passes en parametres de requete.
// Exemple : GET /api/sum?a=2&b=3 -> { "result": 5 }
// Si l'un des parametres n'est pas un nombre, on renvoie une erreur 400.
app.get('/api/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  try {
    const result = add(a, b);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route base de donnees (optionnelle, support du TP4).
// Si la variable DATABASE_URL n'est pas definie, on renvoie "not configured"
// afin que les tests passent meme sans base de donnees disponible.
// Si elle est definie, on tente une connexion PostgreSQL.
app.get('/api/db', async (req, res) => {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return res.status(200).json({ db: 'not configured' });
  }

  try {
    // Le module "pg" n'est requis que lorsque la base est configuree.
    // Il n'est pas dans les dependances par defaut : en TP4, l'apprenant
    // peut l'ajouter s'il souhaite une connexion reelle.
    // eslint-disable-next-line global-require
    const { Client } = require('pg');
    const client = new Client({ connectionString: databaseUrl });
    await client.connect();
    await client.query('SELECT 1');
    await client.end();
    return res.status(200).json({ db: 'connected' });
  } catch (error) {
    return res.status(503).json({ db: 'error', message: error.message });
  }
});

module.exports = app;
