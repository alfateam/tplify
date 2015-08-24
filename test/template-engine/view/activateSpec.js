import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('activate', () => {
        let builder = new ViewTestBuilder();
        let sut = builder
            .activate()
            .build();

        it('appends text node at root level to the region', () => {
            let textNodeContent = new RegExp(`^${builder.textNodeElement}`);
            expect(builder.region.childNodes[1].nodeValue).to.match(textNodeContent);
        });

        it('appends second node at root level to the region', () => {
            expect(builder.region.children[1].id).to.equal(builder.namedElementId0);
        });

        it('appends third node at root level to the region', () => {
            expect(builder.region.children[2].id).to.equal(builder.namedElementId2);
        });

        
    });
});
