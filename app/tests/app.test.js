// Tests d'integration de l'API Express (src/app.js).
// On utilise Supertest pour envoyer des requetes HTTP a l'application
// sans avoir besoin de demarrer un vrai serveur sur un port.

const request = require('supertest');
const app = require('../src/app');

describe('API Express', () => {
  describe('GET /health', () => {
    test('renvoie 200 et le statut ok', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: 'ok' });
    });
  });

  describe('GET /api/version', () => {
    test('renvoie 200 et la version 1.0.0', async () => {
      const response = await request(app).get('/api/version');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ version: '1.0.0' });
    });
  });

  describe('GET /api/sum', () => {
    test('additionne correctement deux nombres valides', async () => {
      const response = await request(app).get('/api/sum').query({ a: 2, b: 3 });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ result: 5 });
    });

    test('renvoie 400 si un parametre est manquant ou invalide', async () => {
      const response = await request(app).get('/api/sum').query({ a: 'abc', b: 3 });
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });
});
