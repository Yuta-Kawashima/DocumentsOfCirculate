pragma solidity >=0.4.25 <0.6.3;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Full.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721Metadata.sol";

contract Asset is ERC721Full{
    constructor(
        string memory name,
        string memory symbol,
        uint tokenId,
        string memory tokenURI
    )ERC721Full(name,symbol) public {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId,tokenURI);
    }
    struct amount{
        uint count;
    }
    mapping(uint => string[5000]) public URI;
    mapping(uint => bytes[5000]) public STR;
    
    
    function addTokenURI(uint tokenId, string memory tokenURI) public {
        uint len = bytes(tokenURI).length;//serch size of URI string
        bytes memory bytesURI = bytes(tokenURI);
        uint array = (len % 5000) + 1;
        uint point = 0;//role pointer
        
        bytes memory strbyte = new bytes(5000);
        string memory sendURI;
        
        
        
        for(uint i = 0; i < array; i++){
            for(uint j = 0; j < 5000; j++){
                strbyte[i] = bytesURI[point];
                point++;
                if(j == len){
                    break;
                }
            }
            sendURI = string(strbyte);
            _setTokenURI(tokenId,sendURI);
            tokenId++;
            strbyte = "";
        }
    }
    
    function _mintToken(uint tokenId) public {
        _mint(msg.sender, tokenId);
    }
}