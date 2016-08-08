import ViewTestBuilder from './viewTestBuilder.js';

describe('View', () => {
    describe('setData omitting some of the properties', () => {
        let builder = new ViewTestBuilder();
        let sut = builder.build();
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
        let sut = builder.build();
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

    describe('activate and access data that has been set before activation', () => {
        let builder = new ViewTestBuilder();
        let sut = builder.build();
        let data = {};
        data[builder.propertyElement1] = 'foo';
        sut.setData(data);

        it('is able to set correct value', () => {
            builder.activate();
            let actual = sut.getData();
            expect(actual[builder.propertyElement1]).to.eql(data[builder.propertyElement1]);
        })
    });

    describe('set property when view has been re-activated again', () => {
        let builder = new ViewTestBuilder();
        let sut = builder.activate().build();
        let data = {};
        data[builder.propertyElement1] = 'foo';
        sut.setData(data);
        builder.deactivate();
        builder.activate();

        it('is able to set correct value', () => {
            data[builder.propertyElement1] = 'bar';
            sut.setData(data);
            let actual = sut.getData();
            expect(actual[builder.propertyElement1]).to.eql(data[builder.propertyElement1]);
        })
    });


});
