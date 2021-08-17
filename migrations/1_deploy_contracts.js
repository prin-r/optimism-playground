var StdReferenceProxy = artifacts.require("StdReferenceProxy");

module.exports = function (deployer) {
  deployer.deploy(
    StdReferenceProxy,
    "0x1ae854998807321260C5544F83078c9414085B83",
    { gasPrice: 15000000 }
  );
};
