export function convertCurrency(
  amount,
  fromCurrency,
  toCurrency,
  exchangeRate
) {
  if (isNaN(amount) || amount <= 0) {
    throw new Error("Montant invalide");
  }
  if (exchangeRate <= 0) {
    throw new Error("Taux de change invalide");
  }
  return (amount * exchangeRate).toFixed(2);
}

/* Conversion.js */
