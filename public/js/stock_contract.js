function stock_contract(doc_info) {
    //Ganacheのデフォルトのポート番号は7545
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    const address = "0x4BCbb9abed19c64fCE4cDb2983EBf074424C999D";
    console.log(address);
    web3.eth.getAccounts((error, accounts) => {
        console.log("getAccounts:" + accounts[0]);
        const paramas = {
            to: address,
            from: accounts[0],
            gas: 100000000
        };

        console.log(paramas);

        var response = contract.methods.Auto_num(doc_info).send({ from: accounts[0], gas: 100000000 });
        console.log("response:", response);
    });
    //コントラクトを呼び出すアカウントのアドレス

    console.log('doc_info:' + doc_info);
    console.log(contract);

}
