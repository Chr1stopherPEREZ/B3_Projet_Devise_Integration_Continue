// Importer la fonction de conversion depuis conversion.js
const convertCurrency = require("../js/conversion");

// Test de base pour vérifier que Jest fonctionne
test("test de base pour vérifier Jest", () => {
  expect(1 + 1).toBe(2);
});

// Test pour vérifier la conversion de 50 USD en EUR avec un taux de 0.85
test("Convertit 50 USD en EUR avec un taux de 0.85", () => {
  expect(convertCurrency(50, "USD", "EUR", 0.85)).toBe("42.50");
});

// Test pour s'assurer que la fonction lève une erreur pour un montant de 0
test("Lève une erreur lorsqu'on convertit un montant de 0", () => {
  expect(() => convertCurrency(0, "USD", "EUR", 0.85)).toThrow(
    "Montant invalide"
  );
});

// Test pour s'assurer que la fonction lève une erreur pour un taux de change négatif
test("Lève une erreur pour un taux de change négatif", () => {
  expect(() => convertCurrency(100, "USD", "EUR", -0.85)).toThrow(
    "Taux de change invalide"
  );
});

// Tests supplémentaires pour couvrir plus de cas

// Test pour un montant très élevé
test("Convertit un montant très élevé correctement", () => {
  expect(convertCurrency(1000000000, "USD", "EUR", 0.85)).toBe("850000000.00");
});

// Test pour un montant avec beaucoup de décimales
test("Arrondit correctement un montant avec plusieurs décimales", () => {
  expect(convertCurrency(123.456789, "USD", "EUR", 0.85)).toBe("104.94");
});

// Test pour un montant négatif
test("Lève une erreur pour un montant négatif", () => {
  expect(() => convertCurrency(-100, "USD", "EUR", 0.85)).toThrow(
    "Montant invalide"
  );
});

// Test pour une entrée non numérique
test("Lève une erreur pour un montant non numérique", () => {
  expect(() => convertCurrency("abc", "USD", "EUR", 0.85)).toThrow(
    "Montant invalide"
  );
});

// Test pour un taux de change de zéro
test("Lève une erreur pour un taux de change de zéro", () => {
  expect(() => convertCurrency(100, "USD", "EUR", 0)).toThrow(
    "Taux de change invalide"
  );
});

// Test pour un taux de change très élevé
test("Convertit correctement avec un taux de change très élevé", () => {
  expect(convertCurrency(1, "USD", "EUR", 10000)).toBe("10000.00");
});
