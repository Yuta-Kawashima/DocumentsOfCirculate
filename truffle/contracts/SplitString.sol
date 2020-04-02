pragma solidity >=0.4.25 <0.6.3;

contract SplitString {
    mapping(uint256 => string) public Store;
    /*
    function Set_Call_Memory(string memory STR) public returns (bytes memory,bytes memory) {
        bytes memory bytes_STR = bytes(STR);
        bytes memory split_one = new bytes(2500);
        bytes memory split_Two = new bytes(2500);

        uint point = 0;

        uint len = bytes(STR).length;
        uint num = 0;

        if(len > 3){
            for(uint i = 0; i < 2500; i++){
                split_one[i] = bytes_STR[point];
                point++;
            }

            for(uint j = 0; j < len-2500; j++){
                split_Two[j] = bytes_STR[point];
                point++;
            }
        }
        string memory splitSTR_one = string(split_one);
        string memory splitSTR_two = string(split_Two);
        Store[num] = splitSTR_one;
        Store[num+1] = splitSTR_two;
        return(split_one, split_Two);
    }
    */
    mapping(uint256 => uint256) public Number;

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
}
