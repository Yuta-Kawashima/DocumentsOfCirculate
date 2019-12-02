//import * as cryptico from './public/js/cryptico-js/cryptico';
//import as cryptico from'./public/js/cryptico-js/cryptico';
const http = require("http");
const url = require("url");
const fs = require("fs");
const ejs = require("ejs");
const qs = require("querystring");
//const cryptico = require("./public/js/cryptico-js/cryptico");


//const index_page = fs.readFileSync('./public/index.ejs', 'utf8');

var server = http.createServer(getFromClient);
server.listen(3000);
console.log('Serer Start!');

function getFromClient(request, response){
    var url_parts = url.parse(request.url, true);
    console.log(url_parts.pathname);
    switch(url_parts.pathname){
        case '/':
            fs.readFile('./public/index.html','utf8',
            (error,data) => {
                response.writeHead(200, {"Content-Type":"text/html"});
                response.write(data);
                response.end();
            });
            break;
            //response_index(request, response);
        case '/js/encode.js':
            fs.readFile('./public/js/encode.js',function(err,data){
                response.writeHead(200,{"Content-Type":"text/javascript"});
                response.write(data);
                response.end();
            });
          break;
        case '/js/cryptico-js/cryptico.js':
            fs.readFile('./public/js/cryptico-js/cryptico.js', function(err, data){
                response.writeHead(200,{"Content-Type":"text/javascript"});
                response.write(data);
                response.end();
            })
        default:
            response.writeHead(200, {'Content-Type':'text/plain' });
            response.end("no pages ...");
            break;
    }
}

function response_index(request, response){
    var msg = "This is test page.";
    var content = ejs.render(index_page,{
        title:"index",
        content:msg,
    });
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(content);
    response.end();

    if(request.method == 'POST'){
        var body;
        request.on('data', (data) => {
            body += data;
        })
        console.log("Start Ensode File.");
        encode(body);
    }
}
/*
function encode(data){
    var file = data;
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
*/