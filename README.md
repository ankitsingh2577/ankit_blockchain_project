# Ethereum - Ropsten Test Network (Tokens Distribution from one account to different accounts)

## Introduction

We are transfering Ethereum ERC20 token on the Ropsten testnet and providing a code-based mechanism to perform basic token distributions from contract owner account to different accounts. 

## Setup Instructions

To download this project:

    $ git clone https://github.com/ankitsingh2577/ankit_blockchain_project

Open Remix on broswer using * https://remix.ethereum.org/ *

    Copy the code from ERC20_ankit.sol and paste it in Remix (Creates Contract)
    
    Compile and Deploy it on Ropsten testnet
    
    once contract deployed - verify and publish your contract (To verify your contract does not have any malicious code)

To install the dependencies (web3, express, big-numbers, etc):

    $npm install (Install all the dependencies from package.jason and package-lock.jason)

Change the Addresses, Private key and Infura ropsten url in all files (method.js and contract.js)
        
        Account address with your ropsten testnet account1 address i.e contract owner address
        
        Private key with Your Ropsten testnet account1 private key
        
        Infura ropsten URL with your Infura procject with endpoint Ropsten
        
        Contract Addresss with your deployed Remix code contract address

To transfer token

        Run method.js : node method.js

To tranfer token with rest api

    Run handler.js : node handler.js or curl -XPOST http://localhost:8080/transfer

## Docker

### To create and deploy docker image to Docker Hub

Build docker container 

    docker build -t [user/tag] .
    
    ####*** Note : add .dockerignore as docker by default uses the Dockerfile ***
    
Check/Validate that your image is avilable

    docker images
    
To see running containers 

     docker ps 
     
To deploy and Reun docker continer

    docker run -p 49160:8080 --name [directory name] -d [username/tag] 
    
Commint the image created

    docker commit [container id] [username/repository name]
    
Finally, Push commited container to  Docker Repository (Validate by cheeking container in Docker Hub with tag name)

    docker push [username/repository name]:tag
