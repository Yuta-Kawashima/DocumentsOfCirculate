pragma solidity >=0.4.24 <0.6.3;
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Metadata.sol";

contract Asset is ERC721Full {
    constructor(
        string memory name,
        string memory symbol,
        uint256 tokenId,
        string memory tokenURI
    ) public ERC721Full(name, symbol) {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
    struct amount {
        uint256 count;
    }
    mapping(uint256 => string[5000]) public URI;
    mapping(uint256 => bytes[5000]) public STR;

    function addTokenURI(uint256 tokenId, string memory tokenURI) public {
        uint256 len = bytes(tokenURI).length; //serch size of URI string
        bytes memory bytesURI = bytes(tokenURI);
        uint256 array = (len % 5000) + 1;
        uint256 point = 0; //role pointer

        bytes memory strbyte = new bytes(5000);
        string memory sendURI;

        for (uint256 i = 0; i < array; i++) {
            for (uint256 j = 0; j < 5000; j++) {
                strbyte[i] = bytesURI[point];
                point++;
                if (j == len) {
                    break;
                }
            }
            sendURI = string(strbyte);
            _setTokenURI(tokenId, sendURI);
            tokenId++;
            strbyte = "";
        }
    }

    function _mintToken(uint256 tokenId) public {
        _mint(msg.sender, tokenId);
    }
}
