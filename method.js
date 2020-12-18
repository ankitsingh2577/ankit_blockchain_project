const Web3 = require('web3')
var BigNumber = require('big-number');
var Tx = require('ethereumjs-tx').Transaction
var fs = require("fs")
var array = fs.readFileSync('accounts.txt', 'utf8').split('\n');
var numberOfAddresses = 10;

const web3 = new Web3('https://ropsten.infura.io/v3/a064bdd3f2b548a29595778ac686b68c') // Infura project URL


const account1 = '0x051e0B533cD9B81d8fD60396ed06FBFC2d66b502' //contract owner address
const privateKey1 = Buffer.from('ce2b7612a7051d5991bcc28ee9d288b9650472717823631f648f2a5c731e83ae', 'hex') //contract owner private key


const contractAddress = '0x450c1515BDa91a589f885F9A5eFcbbF3bc1bfA40' // conctract address

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contract = new web3.eth.Contract(contractABI, contractAddress)


const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}

const transferFunds = async(account1, account2, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("transaction Count returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(100000), // uses about 36,000 gas so add some buffer
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
    to: contractAddress,
    data: contract.methods.transfer(account2, amount).encodeABI()
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})

  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("raw hex transaction: " + raw)

  console.log("about to send transaction")

  let minedTransaction = await sendTransaction(raw)
  console.log("transaction hash returned: " + minedTransaction.transactionHash)

  return `txHash is: ${minedTransaction.transactionHash}`
}

// async methods
const getBalanceOf = async(account) => {
  let balanceOf = await contract.methods.balanceOf(account).call()
  return `balance of account ${account} is ${balanceOf}`
}


const go = async() => {
  var remainingBalance = await contract.methods.balanceOf(account1).call()
  var bal = new BigNumber(remainingBalance)  
  console.log("Balance : ",remainingBalance)
   var token_division = bal.div(20).div(numberOfAddresses)
   for (let i= 0; i < array.length; i++) {
     await transferFunds(account1,array[i],token_division)
  }
}

module.exports = { transferFunds, getBalanceOf }
  
go()


