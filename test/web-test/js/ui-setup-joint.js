function setupUIJoint(){
	var graph = new joint.dia.Graph();

				var paper = new joint.dia.Paper({
				    el: $('#class_diagram'),
				    width: 10000,
				    height: 10000,
				    gridSize: 1,
				    model: graph
				});
				
				paper.on('cell:pointerclick', function(cellView, el) {
					selectElement(cellView.model);
				});

				paper.on('blank:pointerclick', function(evt, x, y) {
    				unselectElements();
				});
}