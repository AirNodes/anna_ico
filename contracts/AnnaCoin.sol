pragma solidity ^0.4.11;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract AnnaCoin is MintableToken {
    string public name = "ANNA COIN";
    string public symbol = "ANNA";
    uint256 public decimals = 18;
}