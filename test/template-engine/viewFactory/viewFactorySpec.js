import ViewFactory from '../../../src/viewFactory';

describe('viewFactory', () => {
    let rawTemplate = '<div><p></p></div>';
    let sut = new ViewFactory(rawTemplate);

    it('saves cached dom when instantiating', () => {
        expect(sut.cachedDom).not.to.be.undefined;
        expect(sut.cachedDom.innerHTML).to.equal(rawTemplate)
    });

    describe('create', () => {
        let view = sut.create();

        it('creates view using cloned cached dom', () => {
            expect(view.template.dom.innerHTML).to.equal(sut.cachedDom.innerHTML);
            expect(view.template.dom).not.equal(sut.cachedDom);
        });
    })
})
