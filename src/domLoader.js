export default class DomLoader {
    static load(html) {
        let containerElement;
        if (html.match(/^<(td|th)/i)) {
            containerElement = document.createElement('tr');
        } else if (html.match(/^<(tr)/i)) {
            containerElement = document.createElement('tbody');
        } else {
            containerElement = document.createElement('div');
        }
        containerElement.innerHTML = html;
        return containerElement;
    }
}
