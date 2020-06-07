import {compute} from './compute';

describe('compute', () => {
    it('it should return 0 if negative input', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('it should increment input if positive', () => {
        const result = compute(2);
        expect(result).toBe(3);
    })
})