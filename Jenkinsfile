pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        BUILD_DIR = "built"
        // Replace this URL with your actual GitHub repository URL for this 'store' project
        REPO_URL = "https://github.com/Abednego254/store.git"
        BRANCH = "main" // Change to your active branch if it's 'master'
        PROJECT_DIR = "backend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // You may need to create a credential in Jenkins named 'jenkins-github-creds'
                // or remove the credentialsId line if your repository is public
                git branch: "${BRANCH}",
                    url: "${REPO_URL}"
            }
        }

        stage('Build & Run 100% Tests with Maven') {
            steps {
                dir("${PROJECT_DIR}") {
                    // Make Maven wrapper executable
                    sh 'chmod +x mvnw'
                    // Clean, run all tests, generate coverage, and package
                    // The 'verify' phase automatically ensures all unit tests pass
                    sh './mvnw clean verify jacoco:report'
                    // The pipeline will STOP here and fail if any single test fails
                }
            }
        }

        stage('Create built Directory') {
            steps {
                sh '''
                    mkdir -p ../${BUILD_DIR}
                    cp target/*.jar ../${BUILD_DIR}/
                '''
            }
        }
    }

    post {
        success {
            echo "Build successful. Tests passed at 100%. .jar stored in built/"
            archiveArtifacts artifacts: 'built/*.jar', fingerprint: true
        }
        failure {
            echo "Build failed. Check the test reports."
        }
    }
}
