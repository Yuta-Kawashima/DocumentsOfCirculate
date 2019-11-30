function encode(){
    let file = document.getElementById("encoded_file").files[0];
    Read = new FileReader();
    //Read.readAsText(file);
    Read.readAsDataURL(file);
    //Read.readAsBinaryString(file);
    //console.log(file);
    //console.log("file[0]:" + file);
    //console.log("file[0].name:" + file.name);
    //console.log("file[0].size:" + file.size);
    //console.log("file[0].lastModified:" + file.lastModified);

    Read.onload = function(){
        console.log(Read.result);
        crypto(Read.result);
    }
    file_json = {
        'name' : file.name,
        'size' : file.size,
        'lastModified' : file.lastModified
    }
    console.log(file_json);
    /*
    let selectedFile = document.getElementById("encoded_file").files;
    console.log(selectedFile.length > 0);
    //Check File is not Empty
    console.log("in bynary:" + selectedFile);
        if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        fileReader.readAsDataURL(selectedFile);
        console.log(fileReader);
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
           base64 = fileLoadedEvent.target.result;
           // Print data in console
           //var shaObj = new jsSHA("SHA-256", "TEXT");
           //shaObj.update(base64);
           //passhash = shaObj.getHash("HEX");
           print(base64);
        };
    fileReader.readAsDataURL(fileToLoad);
    print(base64);
    
}   
*/
    //crypto(file);

}

function crypto(file){
  // RSA鍵の作り方
  var PassPhrase = "The Moon is a Harsh Mistress.";
  console.log("PassPhrase:", PassPhrase);
  var Bits = 1024;
  var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
  console.log("MattsRSAkey:", MattsRSAkey);

  // 公開鍵の作り方
  var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey);
  console.log("MattsPublicKeyString:", MattsPublicKeyString);

  // 暗号化
  //var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
  let PlainText = file;
  console.log("PlainText:", PlainText);
  var EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString);
  console.log("EncryptionResult:", EncryptionResult.cipher);

  // 復号化
  var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey);
  console.log("DecryptionResult:", DecryptionResult);
}
