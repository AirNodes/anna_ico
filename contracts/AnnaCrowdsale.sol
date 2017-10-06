pragma solidity ^0.4.11;

import './AnnaCoin.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';


contract AnnaCrowdsale is Crowdsale {

  function AnnaCrowdsale(uint256 _startBlock, uint256 _endBlock, uint256 _rate, address _wallet, uint256 _initial_supply) 
    Crowdsale(_startBlock, _endBlock, _rate, _wallet) {
        token.mint(_wallet, _initial_supply);
  }

  // creates the token to be sold.
  // override this method to have crowdsale of a specific MintableToken token.
  function createTokenContract() internal returns (MintableToken) {
    return new AnnaCoin();
  }

}
