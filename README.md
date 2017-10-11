# ANNA ICO Smart Contracts

This repository has the Anna smart contracts based on

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


# Deploy

To deploy : `truffle deploy`  
Get infos : `truffle exec infos.js` (crowdsale and token addresses)

## geth

    --networkid value  # Network identifier (integer, 1=Frontier, 2=Morden (disused), 3=Ropsten, 4=Rinkeby) (default: 1)
    --testnet          # Ropsten network: pre-configured proof-of-work test network

First, start geth on the right network (change the port for live network)

    geth --testnet --rpc --rpcapi db,eth,net,web3,personal

/!\ Live

    geth --rpc --rpcapi db,eth,net,web3,personal --networkid 1 --rpcport 8546

## Unlock accounts

Change ropsten to live for real deploy

    truffle console --network ropsten

    web3.personal.unlockAccount(web3.personal.listAccounts[0], "password", 15000);
    web3.personal.unlockAccount(web3.personal.listAccounts[1], "password", 15000);


## Deploy & Infos

    truffle migrate --network ropsten
    truffle exec infos.js --network ropsten