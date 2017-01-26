app.Page = joint.shapes.basic.Rect.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'Page',
        position: { x: 10, y: 10 },
        size: { width: 200, height: 324 },
        attrs: {
            'rect': { fill: '#99CFF2' }, text: { text: 'page', fill: 'white', 'ref-y': 15 }
            //'rect': { fill: 'white', stroke: 'black', 'follow-scale': true, width: 80, height: 40 },
            //'text': { 'font-size': 14, 'ref-x': .5, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle' }
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});

app.Area = joint.shapes.basic.Rect.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'Area',
        position: { x: 10, y: 10 },
        size: { width: 400, height: 648 },
        attrs: { rect: { fill: '#354458' }, text: { text: 'area', fill: 'white', 'ref-y': 12 } }
    }, joint.shapes.basic.Rect.prototype.defaults)
});

app.LandmarkPage = app.Page.extend({
    defaults: joint.util.deepSupplement({
        type: 'LandmarkPage',
        attrs: {
            rect: { 'stroke-dasharray' : '7,5' }, text: { text: 'page', fill: 'white'}
        }
    }, app.Page.prototype.defaults)    
});

app.HomePage = app.Page.extend({
    defaults: joint.util.deepSupplement({
        type: 'HomePage',
        attrs: {
            rect: { 'stroke-dasharray' : '7,5' }, text: { text: 'Index', fill: 'white'}
        }
    }, app.Page.prototype.defaults)    
});

app.Module = joint.shapes.basic.Rect.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'Module',
        position: { x: 10, y: 10 },
        size: { width: 180, height: 75 },
        attrs: { rect: { fill: '#7AC4C0' }, text: { text: 'module', fill: 'green', 'ref-y': 12 } }
    }, joint.shapes.basic.Rect.prototype.defaults)
});

app.Process = joint.shapes.basic.Generic.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'Process',
        inputParams : "",
        returnType : "void",
        position: { x: 10, y: 10 },
        size: { width: 150, height: 50 },
        attrs: {
            'rect': { fill: '#D4C09E', stroke: 'black', 'follow-scale': true, width: 80, height: 40 },
            'text': { 'font-size': 14, 'ref-x': .5, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle' }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

//Units
app.Unit = joint.shapes.basic.Generic.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'Unit',
        position: { x: 10, y: 10 },
        size: { width: 150, height: 50 },
        attrs: {
            'rect': { fill: '#E9E0D6', stroke: 'black', 'follow-scale': true, width: 80, height: 40 },
            'text': { 'font-size': 14, 'ref-x': .5, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle' }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

//Links
app.ContexualLink = joint.dia.Link.extend({
    defaults: joint.util.deepSupplement({
        type: 'contexual',
        attrs: {
            '.connection': { stroke: 'blue' },
            '.marker-source': { fill: 'red', d: 'M 10 0 L 0 5 L 10 10 z' },
            '.marker-target': { fill: 'yellow', d: 'M 10 0 L 0 5 L 10 10 z' }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

app.NonContexualLink = joint.dia.Link.extend({
    defaults: joint.util.deepSupplement({
        type: 'non-contexual',
        attrs: {
            '.connection' : { 'stroke-dasharray' : '7,5' }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

app.TransportLink = joint.dia.Link.extend({
    defaults: joint.util.deepSupplement({
        type: 'transport',
        attrs: {
            
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

app.AutomaticLink = joint.dia.Link.extend({
    defaults: joint.util.deepSupplement({
        type: 'automatic',
        attrs: {
            
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});