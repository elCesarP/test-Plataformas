pipeline {
    agent {
        docker { image 'node:24' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        // otras etapas que necesites
    }
}
