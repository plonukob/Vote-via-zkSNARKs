module.exports = {
  mocha: {
    enableTimeouts: false
  },
   networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
     gas: 30000000,
     gasPrice: null,
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 100
       },
       evmVersion: "byzantium"
      }
    }
  }
}
