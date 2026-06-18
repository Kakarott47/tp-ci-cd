// Tests unitaires du module de calcul (src/calc.js).
// Ils verifient les cas nominaux et les cas d'erreur.

const { add, subtract } = require('../src/calc');

describe('Module calc', () => {
  describe('add', () => {
    test('additionne deux entiers positifs', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('additionne des nombres negatifs', () => {
      expect(add(-4, -6)).toBe(-10);
    });

    test('leve une erreur si un parametre n est pas un nombre', () => {
      expect(() => add(2, NaN)).toThrow();
      expect(() => add('a', 3)).toThrow();
    });
  });

  describe('subtract', () => {
    test('soustrait deux entiers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('leve une erreur si un parametre est invalide', () => {
      expect(() => subtract(undefined, 1)).toThrow();
    });
  });
});
