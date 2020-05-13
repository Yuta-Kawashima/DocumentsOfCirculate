// const contractABI = [
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_value",
//         "type": "string"
//       }
//     ],
//     "name": "set",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "get",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "STR",
        "type": "string"
      }
    ],
    "name": "Auto_num",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_value",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Number",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Store",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
