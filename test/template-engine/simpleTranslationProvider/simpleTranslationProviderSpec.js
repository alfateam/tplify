import simpleTranslationProvider from '../../../src/simpleTranslationProvider';

describe('simpleTranslationProvider', () => {
    let sut = simpleTranslationProvider;

    it('should return same text if key is not in dictionary', () => {
        let key = 'not-existing';
        let element = {
            textContent: 'FooBar'
        };
        let returned = sut.translate(key, element);
        expect(returned).to.equal(element.textContent);
    });

    describe('setDictionary', () => {
        let key = 'existing-key';
        let translatedValue = 'BarBaz';
        let element = {};
        sut.setDictionary({ [key]: translatedValue });

        it('should return translated text when key exists in dictionary', () => {
            let returned = sut.translate(key, element);
            expect(returned).to.equal(translatedValue);
        });
    });
})
