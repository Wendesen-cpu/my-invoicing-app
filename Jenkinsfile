pipeline {
    agent any

    environment {
        // Specify Node.js version
        NODE_VERSION = '18'
    }

    stages {
       

        stage('Install Dependencies') {
            steps {
                script {
                    // Install the specified version of Node.js and dependencies
                    sh 'curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -'
                    sh 'apt-get install -y nodejs'
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run your tests here
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Build your project here (e.g., for a Next.js app)
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy your application (e.g., using rsync, scp, or a cloud service)
                echo 'Deploying the app...'
            }
        }
    }

    post {
        always {
            // Always clean up (optional)
            echo 'Cleaning up...'
        }

        success {
            // Handle success actions (e.g., notify success)
            echo 'Pipeline finished successfully!'
        }

        failure {
            // Handle failure actions (e.g., notify failure)
            echo 'Pipeline failed.'
        }
    }
}
