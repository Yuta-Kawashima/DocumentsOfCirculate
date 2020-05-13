function encode() {
    let file = document.getElementById("encoded_file").files[0];
    Read = new FileReader();
    Read.readAsDataURL(file);//Base64になってる

    Read.onload = function () {
        console.log(Read.result);
        console.log("Read.result:" + Read.result.length);
        // var UTF8 = encodeURIComponent(Read.result); // UTF16 → UTF8
        // console.log("UTF8:" + UTF8.length);
        var base64 = btoa(Read.result);
        console.log("base64:" + base64.length);
        alert(base64);
        console.log(base64);
        alert(atob(base64));
        //var Doc_info =  deflate(crypto(Read.result));
        //console.log(deflate(crypto(Read.result)));
        // var Doc_info = base64;
        // console.log("send contoract function");
        // console.log("文書文字列" + Doc_info);
        // base64 string
        toBlob(Read.result);
        ////////////////////////////////////////////////////////////
        var base64str = base64;

        // decode base64 string, remove space for IE compatibility
        var binary = atob(base64str.replace(/\s/g, ''));
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }

        // create the blob object with content-type "application/pdf"
        var blob = new Blob([view], { type: "application/pdf" });
        var url = URL.createObjectURL(blob);

        ////////////////////////////////////////////////////////////
        console.log(atob(base64));
        const _file = new Blob([atob(base64)], {
            type: 'application/pdf'
        });
        const fileURL = URL.createObjectURL(_file);
        window.open(fileURL);
        // stock_contract(base64);
    }
    file_json = {
        'name': file.name,
        'size': file.size,
        'lastModified': file.lastModified
    }
    console.log(file_json);
}

//引数はbase64形式の文字列
function toBlob(base64) {
    var bin = atob(base64.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    // Blobを作成
    try {
        var blob = new Blob([buffer.buffer], {
            type: 'application/pdf'
        });
        // var blob = new Blob([view], {
        //     type: 'application/pdf'
        // });
    } catch (e) {
        return false;
    }
    console.log(blob);
    return blob;
}

function crypto(file) {
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

function deflate(val) {
    val = encodeURIComponent(val); // UTF16 → UTF8
    val = RawDeflate.deflate(val); // 圧縮
    val = btoa(val); // base64エンコード
    return val;
}
