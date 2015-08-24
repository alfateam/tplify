import through2 from 'through2';
import path from 'path';
import jsesc from 'jsesc';
import fs from 'fs';

function isTemplateFile(filename) {
    return /\.tpl\.html$/i.test(filename);
}

export default function(b, opts) {
    b.require(path.join(__dirname, 'viewFactory'), {
        expose: 'tplify__viewFactory'
    });
    b.transform(function(filename) {
        if (!isTemplateFile(filename)) {
            return through2();
        }

        let inputString = fs.readFileSync(filename, 'utf-8');
        return through2(null, function() {
            let moduleBody;
            try {
                let rawTemplate = jsesc(inputString);
                moduleBody = `
var ViewFactory = require('tplify__viewFactory');

delete module.exports;

var viewFactory = new ViewFactory('${rawTemplate}');

Object.defineProperty(module, 'exports', {
    get: function() {
        return viewFactory.create();
    }
});
`;
            } catch (e) {
                this.emit.error('error', e);
            }
            this.push(moduleBody);
            this.push(null);
        });
    });
}
