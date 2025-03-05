pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                        export NVM_DIR="/var/lib/jenkins/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
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
