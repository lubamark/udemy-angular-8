import {countries} from './countries';

describe('countries', () => {
    it('should containt countries codes', () => {
        const result = countries();

        expect(result).toContain('ru');
        expect(result).toContain('ua');
        expect(result).toContain('by');
    })

})