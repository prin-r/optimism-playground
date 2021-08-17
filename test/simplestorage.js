let StdReferenceBasicInstance;

const StdReferenceBasic = artifacts.require("StdReferenceBasic");

contract("StdReferenceBasic", (accounts) => {
  beforeEach(async () => {
    StdReferenceBasicInstance = await StdReferenceBasic.deployed({
      gasPrice: 15000000,
    });
  });

  it("...should store the value 89.", async () => {
    // Set value of 89
    const tx = await StdReferenceBasicInstance.set(89, {
      from: accounts[0],
      gasPrice: 15000000,
    });

    // Get stored value
    const storedData = await StdReferenceBasicInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
