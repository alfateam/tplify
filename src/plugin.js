import through2 from 'through2';
import path from 'path';
import jsesc from 'jsesc';
import fs from 'fs';

function isTemplateFile(filename) {
    return /\.tpl\.html$/i.test(filename);
}

export default function(b, opts) {
    b.require(path.join(__dirname, 'view'), {
        expose: 'tplify__view'
    });
    b.require(path.join(__dirname, 'template'), {
        expose: 'tplify__template'
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
var View = require('tplify__view');
var Template = require('tplify__template');

delete module.exports;

Object.defineProperty(module, 'exports', {
    get: function() {
        var template = new Template('${rawTemplate}');
        return new View(template);
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
