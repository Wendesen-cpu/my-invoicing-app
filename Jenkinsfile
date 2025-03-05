pipeline {
    agent any

    environment {
        NODE_VERSION = "18" // Change to your required version
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'your-jenkins-github-credentials', url: 'git@github.com:your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'nvm install $NODE_VERSION'
                    sh 'nvm use $NODE_VERSION'
                    sh 'npm install'
                }
            }
        }

        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }


    }
}
