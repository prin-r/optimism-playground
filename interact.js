const CONTRACT_ADDRESS = "0x89a47981E8e57A7C4C9D7bd41035f918d6140611";

module.exports = function () {
  var abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "x",
          type: "uint256",
        },
      ],
      name: "set",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "get",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
  ];
  let contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

  // get variable
  contract.methods.get().call((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("res", res);
    }
  });

  // set variable
  //   contract.methods
  //     .set(10)
  //     .send({ from: "0x932370760e7dd5F32B5F5B09741e97A23965C14c" })
  //     .on("transactionHash", (hash) => console.log(`TxHash ${hash}`));
};
