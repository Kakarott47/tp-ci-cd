// Module de calcul : fonctions pures et testables unitairement.
// Ces fonctions servent de support aux tests Jest du TP1.

// Verifie que la valeur fournie est bien un nombre fini.
// On leve une erreur explicite si ce n'est pas le cas, afin que les routes
// puissent renvoyer une reponse 400 propre.
const ensureNumber = (value, label) => {
  if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
    throw new Error(`Le parametre "${label}" doit etre un nombre valide.`);
  }
};

// Additionne deux nombres apres validation.
const add = (a, b) => {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');
  return a + b;
};

// Soustrait deux nombres apres validation.
const subtract = (a, b) => {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');
  return a - b;
};

module.exports = { add, subtract };
