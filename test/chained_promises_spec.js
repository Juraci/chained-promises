import { expect } from 'chai';
import calculate from '../src/calculate';

describe('calculate', function() {
    it('returns 3', function() {
        return calculate(0)
            .then(calculate)
            .then(calculate)
            .then((result) => {
                expect(result).to.be.equal(3);
            });
    });
});
