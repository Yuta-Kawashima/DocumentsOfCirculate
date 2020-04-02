var SimpleStore = artifacts.require('../contracts/SimpleStore.sol');

module.exports = function (deployer) {
  deployer.deploy(SimpleStore);
};
