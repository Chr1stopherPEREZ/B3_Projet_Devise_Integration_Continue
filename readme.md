# 💱 Projet de Conversion de Devises avec Intégration Continue

Ce projet interactif permet de convertir des montants d'une devise à une autre en utilisant des taux de change fournis en temps réel par une API externe. Il a été conçu pour illustrer la mise en place d'un pipeline CI/CD avec Jenkins, tout en respectant les bonnes pratiques de développement.

Projet réalisé par <a href="https://github.com/florentbaccard" target="_blank">Florent BACCARD</a> & <a href="https://github.com/Chr1stopherPerez" target="_blank">Christopher PEREZ</a>, demandé au sein de notre formation proposée par [EPSI](https://www.epsi.fr/).

## Fonctionnalités

- **Interface intuitive** : Permet de saisir un montant, de sélectionner les devises de conversion, et d'afficher instantanément le résultat de la conversion.
- **Récupération en temps réel** : Utilise l'API ExchangeRate-API pour obtenir les taux de change actuels.
- **Analyse statique du code** : Vérification automatique de la qualité du code JavaScript avec ESLint.
- **Tests automatiques** : Vérifie le bon fonctionnement de la logique de conversion à l'aide de Jest.

### Technologies Utilisées

![My Skills](https://skillicons.dev/icons?i=html,css,js,nodejs,jenkins,docker)

---

## Structure du Projet

Ce projet est une démonstration pratique de l'intégration de plusieurs concepts de développement web, notamment l'utilisation des APIs, les tests automatisés, et la mise en place d'un pipeline d'intégration continue.

- **index.html** : Fournit la structure HTML de l'application, avec des champs pour entrer le montant et sélectionner les devises.
- **style.css** : Gère la présentation et le style de l'interface, offrant un design propre et moderne.
- **js/script.js** : Contient la logique pour récupérer les taux de change, valider les entrées de l'utilisateur, et effectuer les conversions.
- **js/conversion.js** : Fichier séparé pour la logique de conversion, facilitant les tests automatisés.
- **tests/script.test.js** : Contient les tests unitaires pour valider le bon fonctionnement de la conversion de devises.

---

### Configuration

1. **Installation des Dépendances** :
   ```bash
   npm install
   ```
2. **Clé API** : Obtenez votre propre clé API pour l'ExchangeRate-API en vous inscrivant sur [leur site officiel](https://www.exchangerate-api.com).
3. **Exécution des Tests** : Lancez les tests automatisés pour vérifier le bon fonctionnement du projet :
   ```bash
   npm test
   ```

### Exécution de Jenkins avec Docker

Si vous utilisez **Docker Desktop** pour exécuter Jenkins, utilisez la commande suivante pour lancer un conteneur Jenkins :

```bash
docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts
```

Assurez-vous que Docker Desktop est installé et en cours d'exécution avant d'exécuter cette commande.

### Intégration Continue avec Jenkins

Un fichier `Jenkinsfile` est inclus pour automatiser l'intégration continue. Il couvre les étapes suivantes :

- **Analyse Statique** : Vérifie la qualité du code avec ESLint.
- **Tests Automatiques** : Lance les tests pour garantir la fiabilité du code.
- **Préparation au Déploiement** : Prépare le projet pour être déployé.

---

## Captures d'Écran

![Capture de l'interface](Capture.png)
