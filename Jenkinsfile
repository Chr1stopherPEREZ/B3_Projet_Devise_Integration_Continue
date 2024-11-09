pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Récupère le code source depuis le dépôt
                checkout scm
            }
        }
        stage('Static Analysis') {
            steps {
                // Vérification de la qualité du code JavaScript avec ESLint
                echo 'Analyse statique des fichiers...'
                sh 'npm install' // Installe les dépendances du projet
                sh './node_modules/.bin/eslint src/js --ext .js' // Analyse le fichier JS avec ESLint local
            }
        }
        stage('Test') {
            steps {
                // Ajout des tests automatiques
                echo 'Exécution des tests...'
                sh 'npm test' // Exécute les tests avec Jest
            }
        }
        stage('Build') {
            steps {
                // Compilation, préparation des fichiers
                echo 'Aucune compilation nécessaire pour un projet statique.'
            }
        }
        stage('Deploy') {
            steps {
                // Déploiement des fichiers statiques
                echo 'Préparation des fichiers pour le déploiement...'
            }
        }
    }
    post {
        success {
            echo 'Pipeline terminé avec succès !'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
        always {
            echo 'Pipeline terminé, quelles que soient les conditions.'
        }
    }
}
