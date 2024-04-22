pipeline {
  agent any
  triggers{
    githubPush()
  }
  stages {
    stage('build'){
      steps {
        sh 'docker build -t Pubu99/4273-node-app-image .'
      }
    }
    stage('run'){
      steps{
        sh 'docker run -d -p 5000:3000 Pubu99/4273-node-app-image'
      }
    }
    stage('final'){
      steps{
        sh 'docker ps'
      }
    }
    
  }
}
