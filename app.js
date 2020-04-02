const http = require("http");
const url = require("url");
const fs = require("fs");
const ejs = require("ejs");
const qs = require("querystring");

var server = http.createServer(getFromClient);
server.listen(3000);
console.log('Serer Start!');

function getFromClient(request, response) {
    var url_parts = url.parse(request.url, true);
    console.log(url_parts.pathname);
    switch (url_parts.pathname) {
        case '/':
            fs.readFile('./public/index.html', 'utf8',
                (error, data) => {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/Metamask_API.html':
            fs.readFile('./public/Metamask_API.html', 'utf8',
                (error, data) => {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/test_Dapp.html':
            fs.readFile('./public/test_Dapp.html', 'utf8',
                (error, data) => {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/encode.js':
            fs.readFile('./public/js/encode.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/metamask.js':
            fs.readFile('./public/js/metamask.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/deflate.js':
            fs.readFile('./public/js/deflate.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/contract_config.js':
            fs.readFile('./public/js/contract_config.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/stock_contract.js':
            fs.readFile('./public/js/stock_contract.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/cryptico-js/cryptico.js':
            fs.readFile('./public/js/cryptico-js/cryptico.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/Access_contract.js':
            fs.readFile('./public/js/Access_contract.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/web3.min.js':
            fs.readFile('./public/js/web3.min.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;
        case '/js/contract_abi.js':
            fs.readFile('./public/js/contract_abi.js',
                function (err, data) {
                    response.writeHead(200, { "Content-Type": "text/javascript" });
                    response.write(data);
                    response.end();
                });
            break;

        default:
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end("no pages ...");
            break;
    }
}
