const SplitString = artifacts.require("../contract/SplitString.sol");

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(SplitString);
};
