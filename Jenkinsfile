pipeline {
    agent { label JOB_NAME }
    tools {nodejs "nodejs-jenkins"}

    environment {
        releases_path_front = "/var/www/${base_url}/releases-front"
        root_path_front = "/var/www/${base_url}/html"
        root_path_api = "/var/www/${base_url}/api"
        env_directory = "$root_path_api/environment/${env_name}"
    }
    stages {
        stage('Build UI') {
            steps {
                echo 'yeah'
                // sh '''
                // #!/bin/bash
                // cd ui
                // npm i
                // npm run build
                // cp -r dist/ $releases_path_front
                // ln -sfn $releases_path_front $root_path_front
                // '''
            }
       }
        stage('Build APIs') {
            steps {
                echo 'yeah'
                // sh '''
                // #!/bin/bash
                // cd api
                // npm install
                // cp -r ../api $root_path_api
                // cd $root_path_api
                // cp $env_directory $root_path_api/.env
                // pm2 reload ecosystem.config.js --update-env
                // '''
            }
       }
       stage('build Strapi') {
            steps {
               sh '''
               #!/bin/bash
               rm -r $root_path_api
               cp -r kb-api $root_path_api
               cd $root_path_api
               npm i
               npm run build
               pm2 reload ecosystem.config.js --update-env
               '''
            }
       }
    }
    post {
        always {
            cleanWs()
        }
    }
} 

