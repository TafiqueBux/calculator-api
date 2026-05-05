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
                bat 'ping 127.0.0.1 -n 10 > nul'
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
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'report.html',
                reportName: 'Newman Report'
            ])
        }
    }
}