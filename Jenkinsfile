pipeline {
    agent any

    environment {
        NODE_VERSION = "18"
    }

    stages {
            stage('Checkout Code') {
                steps {
                    git branch: 'main', url: 'https://github.com/youruser/your-nextjs-app.git'
                }
            }

            stage('Install Dependencies') {
                steps {
                    script {
                        sh "nvm install $NODE_VERSION || true"
                        sh "nvm use $NODE_VERSION || true"
                        sh "npm install"
                    }
                }
            }

            stage('Build Next.js App') {
                steps {
                    script {
                        sh "npm run build"
                    }
                }
            }
                post {
            success { echo "Deployment successful! 🚀" }
            failure { echo "Deployment failed! ❌" }
        }
    }
}