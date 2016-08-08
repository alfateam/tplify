import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('create', () => {
        let builder = new ViewTestBuilder();
        let sut = builder.build();

        it('exposes template', () => {
            expect(sut.template).to.equal(builder.template);
        });


        it('exposes all the named elements', () => {
            expect(sut[builder.namedElement0].id).to.equal(builder.namedElementId0);
            expect(sut[builder.namedElement1].id).to.equal(builder.namedElementId1);
            expect(sut[builder.namedElement2].id).to.equal(builder.namedElementId2);
        });
    });
});
