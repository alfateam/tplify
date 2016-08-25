class SimpleTranslationProvider {
    constructor() {
        this._dictionary = {};
    }

    translate(id, element) {
        if(!this._dictionary[id])
            return element.textContent;
        return this._dictionary[id];
    }

    setDictionary(dictionary) {
        this._dictionary = dictionary;
    }
}

export default new SimpleTranslationProvider();
