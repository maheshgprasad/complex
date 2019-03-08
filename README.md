# NAME: COMPLEX
Extremely complicated function of viewing a fibonaaci series for a number 
by using multiple instances of docker and deployed on the elastic beanstalk on aws

# Pre-Requisites
installation of docker on your local machine or server (EC2 instance) etc.
installation of nodejs use LTS variant for stability
react app generator: 
/> npm install -g create-react-app  // to install the app generator
/> create-react-app <app_name_here> //to generate the app

# What to do after you downlod this 
build the docker files one by one | navigate to each directory and build individually 
/> docker build -f Dockerfile.dev .
the dot ( . ) at the end of the build statement is to signify the build context and ^ here it is to say use the one in its own directory

[ OR ]

use this command while using docker compose
/> docker-compose up --build | build it fresh
/> docker-compose up | build it using cached docker images
