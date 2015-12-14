# tplify

A Browserify plugin used internally at Timpex AS that allows to `require` html templates.

## Installation
`npm install tplify`

### Add to build
```javascript
browserify({...})
    .plugin('tplify')
    .bundle();
```

## Usage
### Javascript
```javascript
var view = require('./path/to/view.tpl.html');

view.activate(parentNode);
view.deactivate();
view.setData({data-property: value, ...});
view.getData(); // => {data-property: value, ...}
view.data-name; // => HTMLElement
```
### Template
```html
// available for view.setData({someProperty: value}) and view.getData();
<div data-property="someProperty"></div>

// available as property on view.someName
<div data-name="someName"></div>
```