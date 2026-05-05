pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                bat 'start /B node server.js'
                bat 'timeout /t 10'
            }
        }

        stage('Run API Tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        always {
            emailext(
                to: 'tafique.bux@gmail.com',
                subject: 'Build Result',
                body: '<h2>Check Jenkins for results</h2>',
                mimeType: 'text/html',
                attachmentsPattern: 'newman-report.html'
            )

            publishHTML([
            reportDir: '.',
            reportFiles: 'newman-report.html',
            reportName: 'API Test Report'
        ])
        }

    }
}