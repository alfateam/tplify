export default class View {
    constructor(template) {
        this._activeChildElements = [];
        this._template = template;
        this._exposeNamedElements();
    }

    get template() {
        return this._template;
    }

    _exposeNamedElements() {
        Object.keys(this._template.namedElements).forEach(elementName => {
            this[elementName] = this._template.namedElements[elementName];
        });
    }

    activate(region) {
        this._region = region;
        this._moveDomChildrenToRegion();
    }

    _moveDomChildrenToRegion() {
        this._template.childNodes.forEach(element => {
            this._activeChildElements.push(element);
            this._region.appendChild(element);
        });
    }

    deactivate() {
        this._template.reclaimChildren();
        this._activeChildElements = [];
    }

    getData() {
        let result = {};
        Object.keys(this._template.propertyElements).forEach(propertyName => {
            let element = this._template.propertyElements[propertyName];
            result[propertyName] = this._getElementValue(element);
        });
        return result;
    }

    _getElementValue(element) {
        if (element.nodeName === 'INPUT') {
            if (element.type === 'checkbox' || element.type === 'radio')
                return element.checked;
            return element.value;
        }
        return element.innerHTML;
    }

    setData(data) {
        Object.keys(data).forEach(name => {
            let element = this._template.propertyElements[name];
            this._setElementValue(element, data[name]);
        });
    }

    clearData() {
        Object.keys(this._template.propertyElements).forEach(name => {
            let element = this._template.propertyElements[name];
            this._setElementValue(element, '');
        });
    }


    _setElementValue(element, value) {
        if (!element) return;
        if (element.nodeName === 'INPUT') {
            if (element.type === 'checkbox' || element.type === 'radio')
                element.checked = value;
            element.value = value;
        } else
            element.innerHTML = value;
    }

}
