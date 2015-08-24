import Template from './template';
import View from './view';
import DomLoader from './domLoader';

export default class ViewFactory {
    constructor(html) {
        this.cachedDom = DomLoader.load(html);
    }

    create() {
        let newDom = this.cachedDom.cloneNode(true);
        let template = new Template(newDom);
        return new View(template);
    }
}
