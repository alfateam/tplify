export default class Template {

    constructor(rawTemplate) {
        this._rawTemplate = rawTemplate || '';
        this._init();
        this._loadDom();
        this._compile();
    }

    _init() {
        this._childNodes = [];
        this._namedElements = [];
        this._propertyElements = [];
    }

    get rawTemplate() {
        return this._rawTemplate;
    }

    _loadDom() {
        if (this._rawTemplate.match(/^<(td|th)/i)) {
            this._templateDom = document.createElement('tr');
        } else if (this._rawTemplate.match(/^<(tr)/i)) {
            this._templateDom = document.createElement('tbody');
        } else {
            this._templateDom = document.createElement('div');
        }
        this._templateDom.innerHTML = this._rawTemplate;
    }

    _compile() {
        this._namedElements = this._processAttributes('data-name');
        this._propertyElements = this._processAttributes('data-property');
        this._childNodes = [].slice.call(this._templateDom.childNodes, 0);
    }

    _processAttributes(attrib) {
        let result = [];
        let elements = this._templateDom.querySelectorAll('[' + attrib + ']');
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let name = element.getAttribute(attrib);
            result.push({
                name: name,
                value: element
            });
            element.removeAttribute(attrib);
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
            this._templateDom.appendChild(element)
        });
    }
}
