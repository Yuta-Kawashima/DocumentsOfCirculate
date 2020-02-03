function stock_contract(doc_info){
    //let form = document.forms.mainForm;
    console.log('doc_info:' + doc_info);
    //let toAddress = form.toAddress.value;

    contract.deploy(doc_info);
}