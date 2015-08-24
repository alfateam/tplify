describe('Plugin', () => {
    var view = require('./test.tpl.html');

    it('enables loading compiled templates using require("path_to/template.tpl.html")', () => {
            expect(view).not.to.be.undefined;
            expect(view).not.to.be.null;
    });

    it('should return new instance on each require()', () => {
        var secondInstance = require('./test.tpl.html');
        expect(view).not.to.equal(secondInstance);
    });
});
