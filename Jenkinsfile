pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Start Server') {
            steps {
                bat 'start /B node server.js'
                // wait for server to be up
                bat 'timeout /t 10'
            }
        }

        stage('Run API Tests (Newman)') {
            steps {
                bat 'npx newman run collections/<YOUR_COLLECTION>.json -e environments/<YOUR_ENV>.json'
            }
        }
    }

    post {
        always {
            echo 'Build finished'
        }
        success {
            echo '✅ Tests Passed'
        }
        failure {
            echo '❌ Tests Failed'
        }
    }
}