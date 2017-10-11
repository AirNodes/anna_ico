
module.exports = function(callback) {

    var AnnaCrowdsale = artifacts.require("./AnnaCrowdsale.sol");
    var AnnaCoin = artifacts.require("./AnnaCoin.sol");


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

        console.log("Anna Crowdsale : " + anna_crowdsale.address);
        console.log("Anna Coin      : " + anna_coin_instance.address);

    });

}
