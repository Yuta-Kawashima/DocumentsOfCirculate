pragma solidity >=0.4.21 <0.6.0;

contract Datastock{

    struct Data{
        address Publisher;
        address Destination;
        string  DocData;
    }

    //define event
    event StockEvent(address x,address y, string z);//deploy event
    event callNumber(uint256);

    //define structure
    Data[] public datas;

    constructor() public{
       datas.push(Data(address(0), address(0), " "));
    }

    function deploy(string memory docdata) public{
        datas.push(Data(msg.sender,address(0),docdata));//stock
        emit StockEvent(msg.sender,address(0),docdata);//event firing
    }

    function getNumber() public returns(uint256){
        emit callNumber(datas.length);
        return datas.length;
    }

    function callData(uint number) public view returns (address, address, string memory){
        return (datas[number].Publisher, datas[number].Destination, datas[number].DocData);
    }


}