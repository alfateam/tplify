import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('activate', () => {
        describe('deactivate', () => {
            let builder = new ViewTestBuilder();
            let sut = builder.activate().deactivate().build();

            it('takes back the the nodes it attached to the region', () => {
                expect(builder.region.childNodes.length).to.equal(1);
            });
        });

    });
});
