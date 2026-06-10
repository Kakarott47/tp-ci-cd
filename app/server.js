// Point d'entree du serveur.
// Ce fichier se contente de demarrer le serveur HTTP.
// Toute la logique applicative se trouve dans src/app.js, ce qui permet
// de tester l'application avec Supertest sans ouvrir reellement un port.

const app = require('./src/app');

// Le port est lu depuis la variable d'environnement PORT (utile en conteneur),
// avec une valeur de repli a 3000 pour le developpement local.
const PORT = process.env.PORT || 3000;

// On ne demarre l'ecoute que si ce fichier est lance directement
// (node server.js) et non lorsqu'il est importe par les tests.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur demarre sur le port ${PORT}`);
  });
}

module.exports = app;
