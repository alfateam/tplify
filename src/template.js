export default class Template {

    constructor(dom) {
        this._dom = dom;
        this._init();
        this._compile();
    }

    get dom() {
        return this._dom;
    }

    _init() {
        this._childNodes = [];
        this._namedElements = [];
        this._propertyElements = [];
    }

    _compile() {
        this._namedElements = this._processAttributes('data-name');
        this._propertyElements = this._processAttributes('data-property');
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

    get namedElements() {
        return this._namedElements;
    }

    get propertyElements() {
        return this._propertyElements;
    }

    reclaimChildren() {
        this._childNodes.forEach((element) => {
            this._dom.appendChild(element)
        });
    }
}
