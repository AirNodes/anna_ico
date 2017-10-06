module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

// module.exports = {
//   networks: {
//     "live": {
//       network_id: 1,
//       host: "localhost",
//       port: 8546   // Different than the default below
//     }
//   },
//   rpc: {
//     host: "localhost",
//     port: 8545,
//     network_id: "*" // Match any network id
//   }
// };