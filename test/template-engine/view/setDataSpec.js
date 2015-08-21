import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('activate', () => {
        describe('setData omitting some of the properties', () => {
            let builder = new ViewTestBuilder();
            let sut = builder.activate().build();
            let newData = {};
            newData[builder.propertyElement0] = 'foo';
            newData[builder.propertyElement1] = 'bar';
            newData[builder.propertyElement2] = 'baz';

            sut.setData(newData);

            it('sets only relevant property values', () => {
                let expected = {};
                expected[builder.propertyElement0] = 'foo';
                expected[builder.propertyElement1] = 'bar';
                expected[builder.propertyElement2] = 'baz';
                expected[builder.propertyElement3] = builder.propertyValue3;
                expected[builder.propertyElement4] = builder.propertyValue4;

                let actual = sut.getData();
                expect(actual).to.eql(expected);
            });
        });

        describe('setData using invalid property names', () => {
            let builder = new ViewTestBuilder();
            let sut = builder.activate().build();
            let error;
            try {
                sut.setData({
                    foo: 'bar'
                });
            } catch (e) {
                error = e;
            }

            it('does not crash', () => {
                expect(error).to.be.undefined;
            })
        });

    });

});
