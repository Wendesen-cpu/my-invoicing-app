pipeline {
    agent any

    environment {
        NODE_VERSION = "18" // Change to your required version
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout from GitHub using the stored SSH key
                git branch: 'main',
                    credentialsId: 'Jenkins-server',  // Use the ID of the credentials you created
                    url: 'git@github.com:Wendesen-cpu/my-invoicing-app.git'
            }
        }

        stage('Install Dependencies') {
        steps {
            script {
                sh '''
                    source /var/lib/jenkins/.bashrc
                    nvm install 18
                    nvm use 18
                '''
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
