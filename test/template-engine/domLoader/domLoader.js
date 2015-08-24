import DomLoader from '../../../src/domLoader';

describe('DomLoader', () => {
    let sut = DomLoader;

    describe('load', () => {
        it('loads dom in tr container when the first html template element is td', () => {
            let html = '<td></td><div></div>';
            let dom = sut.load(html);
            expect(dom.nodeName).to.equal('TR');
            expect(dom.innerHTML).to.equal(html);
        });

        it('loads dom in tr container when the first html template element is th', () => {
            let html = '<th></th><div></div>';
            let dom = sut.load(html);
            expect(dom.nodeName).to.equal('TR');
            expect(dom.innerHTML).to.equal(html);
        });

        it('loads dom in tbody container when the first html template element is tr', () => {
            let html = '<tr></tr><div></div>';
            let dom = sut.load(html);
            expect(dom.nodeName).to.equal('TBODY');
            expect(dom.innerHTML).to.equal(html);
        });

        it('loads dom in div container otherwise', () => {
            let html = '<p></p>';
            let dom = sut.load(html);
            expect(dom.nodeName).to.equal('DIV');
            expect(dom.innerHTML).to.equal(html);
        });
    });

});
