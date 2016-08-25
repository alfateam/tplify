import simpleTranslationProvider from './simpleTranslationProvider';

export default class Template {
    constructor(dom, translationProvider = simpleTranslationProvider) {
        this._dom = dom;
        this._translationProvider = translationProvider;
        this._init();
        this._compile();
    }

    get dom() {
        return this._dom;
    }

    _init() {
        this._childNodes = [];
        this.namedElements = {};
        this.propertyElements = {};
    }

    _compile() {
        this._processAttributes('data-name').forEach(item => {
           this.namedElements[item.name] = item.value;
        });
        this._processAttributes('data-property').forEach(item => {
            this.propertyElements[item.name] = item.value;
        });
        this._processAttributes('data-translate').forEach(item => {
            item.value.textContent = this._translationProvider.translate(item.name, item.value);
        });
        this._childNodes = [].slice.call(this._dom.childNodes, 0);
    }

    _processAttributes(attrib) {
        let result = [];
        let elements = this._dom.querySelectorAll('[' + attrib + ']');
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let name = element.getAttribute(attrib);
            result.push({
                name: name,
                value: element
            });
        }
        return result;
    }

    get childNodes() {
        return this._childNodes;
    }

    reclaimChildren() {
        this._childNodes.forEach(element => this._dom.appendChild(element));
    }
}
