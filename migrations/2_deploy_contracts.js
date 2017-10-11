var AnnaCrowdsale = artifacts.require("./AnnaCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startBlock = web3.eth.blockNumber + 2 // blockchain block number where the crowdsale will start
  const endBlock = startBlock + 233800 // (~ 92 * 24 * 3600 / 34)  // blockchain block number where it will end. A block is more or less 30s, https://etherscan.io/chart/blocktime
  const rate = new web3.BigNumber(5000) // rate of ether to Anna Coin
  const wallet = web3.eth.accounts[0] // the address that will hold the fund
  const initial_supply = 10000000e18 // Initial supply for token owner in wei, extra will be burnt

  deployer.deploy(AnnaCrowdsale, startBlock, endBlock, rate, wallet, initial_supply)
}