import {Test} from "../app/app";

describe('#Test work', () => {
    it('first test', () => {
        const abc = Test.toUppercase('test');
        expect(abc).toBe('ST')
    })
})
