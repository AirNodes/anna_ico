var AnnaCrowdsale = artifacts.require("./AnnaCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startBlock = web3.eth.blockNumber + 2 // blockchain block number where the crowdsale will start.
  const endBlock = startBlock + 300  // blockchain block number where it will end. A block is more or less 29s, https://etherscan.io/chart/blocktime
  const rate = new web3.BigNumber(5000) // rate of ether to Anna Coin
  const wallet = web3.eth.accounts[0] // the address that will hold the fund. Recommended to use a multisig one for security.
  const initial_supply = 5000000e18 // Initial supply for token owner in wei

  deployer.deploy(AnnaCrowdsale, startBlock, endBlock, rate, wallet, initial_supply)
}