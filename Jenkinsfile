pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                        source ~/.bashrc
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
