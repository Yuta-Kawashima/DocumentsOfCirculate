function stock_contract(doc_info) {
    //Ganacheのデフォルトのポート番号は7545
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    //web3.eth.getAccounts((error, accounts) => console.log("getAccounts:" + accounts[0]));

    web3.eth.getAccounts((error, accounts) => {
        console.log("getAccounts:" + accounts[0]);
        var response = contract.Auto_num.sendTransaction(doc_info, { from: accounts[0], gas: 100000000 });
        console.log("response:" + response);
    });
    //コントラクトを呼び出すアカウントのアドレス
    let coinbase = web3.eth.accounts[0];
    console.log(coinbase);

    //let form = document.forms.mainForm;
    console.log('doc_info:' + doc_info);
    //let toAddress = form.toAddress.value;
    console.log(contract);
    /*
    contract.Auto_num(doc_info, (err, result) => {
        console.log(result);
    });
    */
    //var response = contract.Auto_num.sendTransaction(doc_info, { from: coinbase, gas: 100000000 });


}
