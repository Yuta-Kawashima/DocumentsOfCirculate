const ethereumButton = document.querySelector(".enableEthereumButton");
const sendEthButton = document.querySelector(".sendEthButton");
const showAccount = document.querySelector(".showAccount");

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener("click", () => {
  web3.eth.sendTransaction(
    {
      from: accounts[0],
      to: "0x4BCbb9abed19c64fCE4cDb2983EBf074424C999D",
      value: "0x29a2241af62c0000",
      gas: 21000,
      gasPrice: 20000000000
    },
    result => {
      console.log(result);
    }
  );
});

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.enable();
  showAccount.innerHTML = accounts[0];
}
