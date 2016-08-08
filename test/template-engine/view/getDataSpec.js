import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('getData', () => {
        let builder = new ViewTestBuilder();
        let sut = builder.build();

        it('returns object with values in all the property elements before activation', () => {
            let expected = {};
            expected[builder.propertyElement0] = builder.propertyValue0;
            expected[builder.propertyElement1] = builder.propertyValue1;
            expected[builder.propertyElement2] = builder.propertyValue2;
            expected[builder.propertyElement3] = builder.propertyValue3;
            expected[builder.propertyElement4] = builder.propertyValue4;

            let actual = sut.getData();
            expect(actual).to.eql(expected);
        });
    });
});
