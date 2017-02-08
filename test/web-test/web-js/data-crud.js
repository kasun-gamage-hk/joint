app.data.uml.controls.addElement = function(elementTypeIn){
	var elementType = uml.Interface;
	switch (elementTypeIn) {
		case 'Class':
		case 'class':
			elementType = uml.Class;
			break;
		case 'Abstract':
		case 'abstract':
		case 'AbstractClass':
			elementType = uml.Abstract;
			break;
		case 'Interface':
		case 'interface':
			elementType = uml.Interface;
			break;
	}
	debug = elementType;

	var classRef = new elementType({
		position: { x: 640 , y: 0 },
		size: { width: 260, height: 100 },
		name: 'Classname'
	});

	app.data.uml.elements.add(classRef);

	graphUML.addCell(classRef);
	//selectElement(classRef);
}

app.data.uml.controls.setElementName = function(element, name){
	element.prop('name', name);
}
