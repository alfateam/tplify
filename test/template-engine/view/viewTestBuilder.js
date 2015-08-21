import View from '../../../src/view';
import Template from '../../../src/template.js';


export default class ViewFixtures {
    constructor() {
        this._initRegion();
        this._initElements();
        this._initTemplate();
        this._initView();
    }

    _initRegion() {
        this.existingRegionNode = document.createElement('div');
        this.existingRegionNode.innerHTML = '<!-- node that is already in the region -->';
        this.region = document.createElement('div');
        this.region.appendChild(this.existingRegionNode);
    }

    _initElements() {
        this.namedElement0 = 'namedElement0';
        this.namedElement1 = 'namedElement1';
        this.namedElement2 = 'namedElement2';
        this.namedElementId0 = 'namedElementId0';
        this.namedElementId1 = 'namedElementId1';
        this.namedElementId2 = 'namedElementId2';
        this.propertyElement0 = 'propertyElement0';
        this.propertyElement1 = 'propertyElement1';
        this.propertyElement2 = 'propertyElement2';
        this.propertyElement3 = 'propertyElement3';
        this.propertyElement4 = 'propertyElement4';
        this.propertyValue0 = 'propertyValue0';
        this.propertyValue1 = 'propertyValue1';
        this.propertyValue2 = 'propertyValue2';
        this.propertyValue3 = 'propertyValue3';
        this.propertyValue4 = 'propertyValue4';
        this.textNodeElement = 'some loose text';
    }

    _initTemplate() {
        this.rawTemplate = `${this.textNodeElement}
        <div data-name="${this.namedElement0}" id="${this.namedElementId0}">
            <div data-name="${this.namedElement1}" id="${this.namedElementId1}">
                <input data-property="${this.propertyElement0}" value="${this.propertyValue0}" />
                <input data-property="${this.propertyElement1}" value="${this.propertyValue1}" />
            </div>
            <input data-property="${this.propertyElement2}" value="${this.propertyValue2}" />
            <input data-property="${this.propertyElement3}" value="${this.propertyValue3}" />
        </div>
        <div data-name="${this.namedElement2}" id="${this.namedElementId2}"></div>
        <div data-property="${this.propertyElement4}">${this.propertyValue4}</div>
        <div></div>
        `;

        this.template = new Template(this.rawTemplate);
    }

    _initView() {
        this._view = new View(this.template);
    }

    activate() {
        this._view.activate(this.region);
        return this;
    }

    deactivate() {
        this._view.deactivate();
        return this;
    }

    build() {
        return this._view;
    }
}
