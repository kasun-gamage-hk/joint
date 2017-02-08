var app = app || {};

var uml = joint.shapes.uml;

app.data = {};
app.data.web = {};
app.data.uml = {};
app.data.er = {};

app.hypertext = {};

app.data.uml.elements = new Backbone.Collection;
app.data.uml.controls = {};

app.currentElement;
var debug;
