pragma solidity >=0.4.25 <0.6.3;


contract SimpleStore {
    string value;

    mapping(uint256 => string) public Store;

    function set(string memory _value) public {
        value = _value;
    }

    function get() public view returns (string memory) {
        return (value);
    }

    function Auto_num(string memory STR) public {
        bytes memory bytes_STR = bytes(STR);
        bytes memory Split = new bytes(2500);

        uint256 point = 0;

        uint256 len = bytes(STR).length;
        uint256 num = uint256(len / 2500);
        Number[0] = num;

        for (uint256 i = 0; i < num; i++) {
            for (uint256 j = 0; j < 2500; j++) {
                if (point == len) {
                    break;
                }
                Split[j] = bytes_STR[point];
                point++;
            }
            Store[i] = string(Split);
        }
    }

    function gets() public view returns (mapping) {
        return (Store);
    }
}
