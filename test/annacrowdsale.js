var AnnaCrowdsale = artifacts.require("./AnnaCrowdsale.sol");
var AnnaCoin = artifacts.require("./AnnaCoin.sol");


contract('AnnaCrowdsale', function(accounts) {

it("initial balances", function(done) {

    var owner_account = web3.eth.accounts[0]
    var investor_account = web3.eth.accounts[1]
    var anna_crowdsale
    var anna_coin_instance;

    AnnaCrowdsale.deployed().then(function(instance) {
        return instance;
    }).then(function(crowdsale) {
        anna_crowdsale = crowdsale
        return crowdsale.token();
    }).then(function(tokenAddress) {
        console.log("Anna Crowdsale : " + anna_crowdsale.address);
        console.log("Anna Coin      : " + tokenAddress);
        return AnnaCoin.at(tokenAddress);
    }).then(function(annaCoinInstance) {
        anna_coin_instance = annaCoinInstance
        return anna_coin_instance.balanceOf(owner_account);
    }).then(function(owner_account_anna_balance) {
        console.log("Owner intitial ANNA balance   : " + Number(web3.fromWei(owner_account_anna_balance, "ether")));
        assert.equal(Number(web3.fromWei(owner_account_anna_balance, "ether")), 5000000, "Initial owner ANNA balance account error");
        return anna_coin_instance.balanceOf(investor_account);
    }).then(function(investor_account_anna_balance) {
        console.log("Investor initial ANNA balance : " + Number(web3.fromWei(investor_account_anna_balance, "ether")));
        assert.equal(Number(web3.fromWei(investor_account_anna_balance, "ether")), 0, "Initial investor ANNA balance account error");
        done();
    });


});


it("buy token", function(done) {

    var owner_account = web3.eth.accounts[0]
    var investor_account = web3.eth.accounts[1]

    var anna_crowdsale;
    var anna_coin_instance;

    AnnaCrowdsale.deployed().then(function(instance) {
        anna_crowdsale = instance;
        return anna_crowdsale;
    }).then(function(crowdsale) {
        return crowdsale.token();
    }).then(function(tokenAddress) {
        return AnnaCoin.at(tokenAddress);
    }).then(function(annaCoinInstance) {
        anna_coin_instance = annaCoinInstance
    }).then(function() {

        var amount_eth = 10;
        console.log("Owner previous ETH balance    : " + Number(web3.fromWei(web3.eth.getBalance(owner_account), "ether")));
        console.log("Investor previous ETH balance : " + Number(web3.fromWei(web3.eth.getBalance(investor_account), "ether")));

        anna_coin_instance.balanceOf(investor_account).then(function(balance) {
            return balance;
        }).then(function(investor_prev_token_balance) {
            var investor_prev_token_balance = investor_prev_token_balance;
            console.log("Investor ANNA balance : " + investor_prev_token_balance);

            console.log("--> Sending "+ amount_eth + " ETH to crowdsale.");
            // Buy for amount_eth in the crowdsale
            anna_crowdsale.sendTransaction({
                from: investor_account,
                value: web3.toWei(amount_eth, "ether")
            }).then(function() {

                console.log("Owner new ETH balance    : " + Number(web3.fromWei(web3.eth.getBalance(owner_account), "ether")));
                console.log("Investor new ETH balance : " + Number(web3.fromWei(web3.eth.getBalance(investor_account), "ether")));

                anna_coin_instance.balanceOf(investor_account).then(function(balance) {
                    return balance;
                }).then(function(investor_new_token_balance) {
                    console.log("Investor ANNA balance : " + Number(web3.fromWei(investor_new_token_balance, "ether")));
                    assert.equal(Number(web3.fromWei(investor_prev_token_balance, "ether")) + amount_eth*5000, Number(Number(web3.fromWei(investor_new_token_balance, "ether"))), "New ANNA balance doesn't match")
                    done();
                });
            });
        });

    });

});


});