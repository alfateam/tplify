import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('create', () => {
        let builder = new ViewTestBuilder();
        let sut = builder.build();

        it('exposes template', () => {
            expect(sut.template).to.equal(builder.template);
        });
    });
});
