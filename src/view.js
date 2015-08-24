export default class View {
    constructor(template) {
        this._properties = [];
        this._activeChildElements = [];
        this._template = template;
        this._attachTemplate();
    }

    get template() {
        return this._template;
    }

    _attachTemplate() {
        this._exposeNamedElements();
        this._collectPropertyElements();
    }

    _exposeNamedElements() {
        this._template.namedElements.forEach(val => {
            this[val.name] = val.value;
        });
    }

    _collectPropertyElements() {
        this._template.propertyElements.forEach(val => {
            this._properties[val.name] = val.value;
        });
    }

    activate(region) {
        this._region = region;
        this._moveDomChildrenToRegion();
        this._tryUpdatePropertiesData();
    }

    _moveDomChildrenToRegion() {
        this._template.childNodes.forEach(element => {
            this._activeChildElements.push(element);
            this._region.appendChild(element);
        });
    }

    deactivate() {
        this._properties = [];
        this._template.reclaimChildren();
        this._activeChildElements = [];
    }

    getData() {
        let result = {};
        this._template.propertyElements.forEach(propertyElement => {
            let element = propertyElement.value;
            result[propertyElement.name] = this._getElementValue(element);
        });
        return result;
    }

    _getElementValue(element) {
        if (element.nodeName === 'INPUT')
            return element.value;
        return element.innerHTML;
    }

    setData(data) {
        this._data = data;
        this._tryUpdatePropertiesData();
    }

    clearData() {
        this._tryClearPropertiesData();
    }


    _tryUpdatePropertiesData() {
        if (this._region !== undefined && this._data !== undefined) {
            this._updateProperties();
        }
    }

    _updateProperties() {
        for (let name in this._data) {
            let element = this._properties[name];
            let data = this._data[name];
            this._setElementValue(element, data);
        }
    }

    _tryClearPropertiesData() {
        if (this._region !== undefined && this._properties !== undefined) {
            this._clearProperties();
        }
    }

    _clearProperties() {
        for (let i in this._properties) {
            let element = this._properties[i];
            this._setElementValue(element, '');
        }
    }

    _setElementValue(element, value) {
        if (!element) return;
        if (element.nodeName === 'INPUT')
            element.value = value;
        else
            element.innerHTML = value;
    }

}
