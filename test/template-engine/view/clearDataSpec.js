import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('activate', () => {
        describe('clearData', () => {
            let builder = new ViewTestBuilder();
            let sut = builder.activate().build();

            sut.clearData();

            it('should clear all the propertyValues', () => {
                let expected = {};
                expected[builder.propertyElement0] = '';
                expected[builder.propertyElement1] = '';
                expected[builder.propertyElement2] = '';
                expected[builder.propertyElement3] = '';
                expected[builder.propertyElement4] = '';

                let actual = sut.getData();
                expect(actual).to.eql(expected);
            })
        });
    });
});
