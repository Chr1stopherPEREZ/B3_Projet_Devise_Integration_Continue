import { convertCurrency } from "../js/conversion.js";

// Fonction pour valider le montant saisi
function validateAmount(amount) {
  const numericPattern = /^[0-9]+(\.[0-9]{1,2})?$/;
  if (!numericPattern.test(amount)) {
    alert("Veuillez entrer un montant valide !");
    return false;
  }
  return true;
}

// Mapping des devises aux codes pays pour récupérer les drapeaux
const currencyFlags = {
  USD: "us",
  EUR: "eu",
  JPY: "jp",
  CAD: "ca",
  AUD: "au",
  GBP: "gb",
  SGD: "sg",
  CHF: "ch",
};

// Fonction pour charger les drapeaux
function loadFlags() {
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const flagFrom = document.getElementById("flag-from");
  const flagTo = document.getElementById("flag-to");

  // Charger les drapeaux depuis FlagCDN
  if (currencyFlags[fromCurrency] && currencyFlags[toCurrency]) {
    flagFrom.src = `https://flagcdn.com/48x36/${currencyFlags[fromCurrency]}.png`;
    flagTo.src = `https://flagcdn.com/48x36/${currencyFlags[toCurrency]}.png`;
  } else {
    flagFrom.src = "path-to-placeholder.png"; // Placeholder si l'URL du drapeau n'existe pas
    flagTo.src = "path-to-placeholder.png"; // Placeholder si l'URL du drapeau n'existe pas
  }
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

  const apiKey = "Votre clé API";
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

// Charger les drapeaux au changement de sélection
document.getElementById("from-currency").addEventListener("change", loadFlags);
document.getElementById("to-currency").addEventListener("change", loadFlags);

// Charger les drapeaux au démarrage
loadFlags();

/* Script.js */
