const TestERC721 = artifacts.require("../contract/TestERC721.sol");

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TestERC721);
};
