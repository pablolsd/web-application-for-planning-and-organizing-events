// Jenkinsfile
pipeline {
  agent any

  stages {
    stage('Build Backend') {
      steps {
        dir('backend') {
          script {
            docker.build("my-backend-image")
          }
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          script {
            docker.build("my-frontend-image")
          }
        }
      }
    }

    stage('Run Tests') {
      steps {
        script {
          docker.run("-v ${WORKSPACE}/tests:/app/tests my-backend-image npm test")
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          docker.withRegistry('https://registry.example.com', 'my-registry-credentials') {
            docker.image("my-backend-image").push("latest")
            docker.image("my-frontend-image").push("latest")
          }
        }
      }
    }
  }
}
