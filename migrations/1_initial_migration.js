//var Migrations = artifacts.require("./Migrations.sol");
//
//module.exports = function(deployer) {
//  deployer.deploy(Migrations);
//};
var Wrestling = artifacts.require("./Wrestling.sol");

module.exports = function(deployer) {
  deployer.deploy(Wrestling);
};
