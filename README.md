# ANNA ICO Smart Contracts

This repository has the Anna smart contracts based on

# Deploy

To deploy : `truffle deploy`  
Get infos : `truffle exec infos.js` (crowdsale and token addresses)

# Manual testing

Get an account, token and crowdsale

    account = web3.eth.accounts[1];
    AnnaCrowdsale.deployed().then(inst => { crowdsale = inst });
    crowdsale.token().then(addr => { tokenAddress = addr } );
    annaCoinInstance = AnnaCoin.at(tokenAddress);

Check balance initial, and send 1 ether to the crowdsale

    annaCoinInstance.balanceOf(account).then(balance => balance.toString(10));
    AnnaCrowdsale.deployed().then(inst => inst.sendTransaction({ from: account, value: web3.toWei(1, "ether")}));
    
Balance should be lighter of 1 ether ~ and you should have 5000 ANNA tokens

    web3.fromWei(web3.eth.getBalance(account)).toString(10)
    web3.fromWei(accountAnnaTokenBalance, "ether");
