pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TafiqueBux/calculator-api.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Newman Tests') {
            steps {
                bat 'node newman-runner.js'
            }
        }
    }

    post {
        always {
            emailext(to: 'tafique.bux@gmail.com', subject: 'Build Complete', body: '<h2>Tests Done</h2>', mimeType: 'text/html', attachmentsPattern: 'reports/report.html')
        }
    }
}