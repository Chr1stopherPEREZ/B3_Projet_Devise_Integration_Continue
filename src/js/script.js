import { convertCurrency } from "./conversion.js";

// Fonction pour valider le montant saisi
function validateAmount(amount) {
  const numericPattern = /^[0-9]+(\.[0-9]{1,2})?$/;
  if (!numericPattern.test(amount)) {
    alert("Veuillez entrer un montant valide !");
    return false;
  }
  return true;
}

// Code lié au DOM
document.getElementById("convert-btn").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value.trim());
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const resultElement = document.getElementById("result");

  if (isNaN(amount)) {
    alert("Veuillez entrer un montant.");
    return;
  }
  if (!validateAmount(amount)) {
    return;
  }

  if (fromCurrency === toCurrency) {
    alert("Veuillez choisir une devise différente pour la conversion.");
    resultElement.innerText = "";
    return;
  }

  const apiKey = "VOTRE CLE API";
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  resultElement.style.opacity = "0";
  resultElement.innerText = "Chargement...";

  setTimeout(() => {
    resultElement.style.opacity = "1";
  }, 300);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "error") {
        resultElement.innerText =
          "Erreur lors de la récupération des taux de change.";
        return;
      }
      const rate = data.conversion_rates[toCurrency];
      const convertedAmount = convertCurrency(
        amount,
        fromCurrency,
        toCurrency,
        rate
      );
      resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

      resultElement.style.opacity = "0";
      setTimeout(() => {
        resultElement.style.opacity = "1";
      }, 100);
    })
    .catch(() => {
      resultElement.innerText = "Erreur de connexion. Veuillez réessayer.";
    });
});

const fields = document.querySelectorAll(
  "#amount, #from-currency, #to-currency"
);
let isElevated = false;

fields.forEach((field) => {
  field.addEventListener("focus", () => {
    if (!isElevated) {
      field.classList.add("elevated");
      isElevated = true;
    }
  });

  field.addEventListener("blur", () => {
    const allFieldsEmpty = Array.from(fields).every(
      (f) => f !== document.activeElement
    );
    if (allFieldsEmpty) {
      fields.forEach((f) => f.classList.remove("elevated"));
      isElevated = false;
    }
  });
});

/* Script.js */
