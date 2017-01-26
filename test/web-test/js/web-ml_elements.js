//View Elements

//DEPREC

//Units

app.Unit = joint.shapes.basic.Generic.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'Unit',
        attrs: {
            'rect': { fill: 'white', stroke: 'black', 'follow-scale': true, width: 80, height: 40 },
            'text': { 'font-size': 14, 'ref-x': .5, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle' }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});
//data..

//Processes
app.Process = joint.shapes.basic.Generic.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({
        type: 'basic.Rect',
        attrs: {
            'rect': { fill: 'white', stroke: 'black', 'follow-scale': true, width: 80, height: 40 },
            'text': { 'font-size': 14, 'ref-x': .5, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle' }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});
//db, session, pro

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