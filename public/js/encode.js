function encode(){
    alert('encode.js');
    let file = document.getElementById("encoded_file").files[0];
    Read = new FileReader();
    Read.readAsDataURL(file);
 
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
