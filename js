pipeline{
    agent any 
    
     tools {
        maven 'Maven' 
    }
    stages{
        stage("test"){
            steps{
                echo "========executing test========"
              
                sh  "mvn test" 
            }
            
        }

        stage("build"){
            steps{
                echo "========executing build========"
                sh "mvn clean install spring-boot:repackage"
                sh "mvn package" 
            }
            
        }

        stage("deploy-test"){
            steps{
                echo "========deploy-testr========"
            }
            
        }

       stage("deploy-prod"){
            steps{
                echo "========deploy-prod========"
            }
            
        } 
    }



    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
