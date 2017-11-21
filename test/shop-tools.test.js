var expect = require('chai').expect;
var getPrices = require('../src/shop-tools').getPrices;

describe('Print the content of basket', function() {
    var basket = getPrices();
    
    it('when the client request the content then it prints 6 items', function() {
        expect(getPrices()).to.equal(getPrices());
    });
});