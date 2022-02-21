var Bank = /** @class */ (function() {
    function Bank() {
        this.data = [];
    }
    Bank.prototype.add = function(a) {
        this.data.push(a);
    };
    Bank.prototype.remove = function() {
        this.data.shift();
    };
    Bank.prototype.display = function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    };
    return Bank;
}());
var stringBank = new Bank();
stringBank.add('sdfgdf');
stringBank.add(457);
var numberBank = new Bank();
numberBank.add(424);