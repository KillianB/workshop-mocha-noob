var expect = require('chai').expect;
var getPrices = require('../src/shop-tools').getPrices;

describe('getPrices', function() {
    it('should return an object which describes the basket', function() {
        expect(getPrices()).to.eql({
            banana: 1,
            potato: 2,
            tomato: 3,
            cucumber: 4,
            salad: 5,
            apple: 6
        });
    });
});