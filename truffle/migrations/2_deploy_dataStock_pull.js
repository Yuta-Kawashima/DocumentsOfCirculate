const dataStock = artifacts.require("../contract/dataStock_pull.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(dataStock);
};
