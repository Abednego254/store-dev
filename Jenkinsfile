pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        // Correct project directory based on your logs
        PROJECT_DIR = "backend"
        BUILD_DIR = "built"
        REPO_URL = "https://github.com/Abednego254/store-dev.git"
        BRANCH = "main"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Build & Test') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'chmod +x mvnw'
                    // Since you added JaCoCo to your pom.xml, 
                    // this standard command will now work perfectly.
                    sh './mvnw clean verify'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                sh "mkdir -p ${BUILD_DIR}"
                // Copy from the backend target folder to the root built folder
                sh "cp ${PROJECT_DIR}/target/*.jar ${BUILD_DIR}/"
            }
        }
    }

    post {
        success {
            echo "Build Successful!"
            archiveArtifacts artifacts: "${BUILD_DIR}/*.jar", fingerprint: true
        }
        failure {
            echo "Build failed. Check Maven logs for JaCoCo or Test errors."
        }
    }
}