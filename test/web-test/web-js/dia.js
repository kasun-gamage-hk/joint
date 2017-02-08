const paperWidth = 1000;
const paperHeight = 800;

var graphWeb = new joint.dia.Graph();
var graphUML = new joint.dia.Graph();
var graphER = new joint.dia.Graph();

function setUpPapers(){
  var graphHypertext = new joint.dia.Graph();

  var paperWeb = new joint.dia.Paper({
      el: $('#dia-data-web'),
      width: paperWidth,
      height: paperHeight,
      gridSize: 1,
      model: graphWeb
  });

  var paperUML = new joint.dia.Paper({
      el: $('#dia-data-uml'),
      width: paperWidth,
      height: paperHeight,
      gridSize: 1,
      model: graphUML
  });

  var paperER = new joint.dia.Paper({
      el: $('#dia-data-er'),
      width: paperWidth,
      height: paperHeight,
      gridSize: 1,
      model: graphER
  });

  var paperHypertext = new joint.dia.Paper({
      el: $('#dia-hypertext'),
      width: paperWidth,
      height: paperHeight,
      gridSize: 1,
      model: graphHypertext
  });

  paperUML.on('cell:pointerclick', function(cellView, el) {
    app.currentElement = cellView.model;
  });

  paperUML.on('blank:pointerclick', function(evt, x, y) {
    app.currentElement = null;
  });
}
