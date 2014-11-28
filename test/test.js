/**
 * lei-cycle tests
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

var should = require('should');
var cycle = require('../');

describe('lei-cycle', function () {

  it('get', function () {

    var c1 = cycle([4, 5, 6, 7, 8]);
    var c2 = cycle(['l', 'o', 'v', 'e']);
    var c3 = cycle('y', 'o', 'u');

    c1().should.equal(4);
    c1().should.equal(5);
    c1().should.equal(6);
    c1().should.equal(7);
    c1().should.equal(8);

    c1().should.equal(4);
    c1().should.equal(5);
    c1().should.equal(6);
    c1().should.equal(7);
    c1().should.equal(8);

    c2().should.equal('l');
    c2().should.equal('o');
    c2().should.equal('v');
    c2().should.equal('e');

    c2().should.equal('l');
    c2().should.equal('o');
    c2().should.equal('v');
    c2().should.equal('e');

    c3().should.equal('y');
    c3().should.equal('o');
    c3().should.equal('u');

    c3().should.equal('y');
    c3().should.equal('o');
    c3().should.equal('u');

  });

});
