//requires class_collection
//DATA MODEL CRUD & RULES

app.currentElement;

function addElement(element){
	var classRef = new element({
		position: { x: 640 , y: 0 },
		size: { width: 260, height: 100 },
		name: 'Classname'
	});
	app.classes.add(classRef);
	graph.addCell(classRef);
	selectElement(classRef);
	refresh();	
}

function connectElements(element_role, Relationship){
	var relRef;
	if(element_role === 'source'){
		relRef = new Relationship({ source: { id: app.currentElement.attributes.id } , target: { id: app.currentElement.attributes.id }});
	}else{
		relRef = new Relationship({ target: { id: app.currentElement.attributes.id } ,target: { id: app.currentElement.attributes.id }});
	}
	if(Relationship == uml.Association)

	app.relationships.add(relRef);
	graph.addCell(relRef);
	selectElement(relRef);
	refresh();
}

function addAttrib(class_name, access_modifier, attrib_name, type){
	var classRef = _.find(app.classes.models, function(model){ return model.attributes.name  === class_name; });
	var array = classRef.attributes.attributes;
	classRef.prop({ attributes: array});
	array.push(access_modifier + " " + attrib_name + ": " + type);
	classRef.prop({ attributes: array});
	refresh();
}

function addMethod(class_name, access_modifier, attrib_name, output, param){
	refresh();
}

function setElementName(){
	app.currentElement.prop('name', $("input#current_class_name").val());
}

function selectElement(element){
	app.currentElement = element;
	if(!(app.currentElement instanceof joint.dia.Link)){
		$("aside#element_sidebar").empty();
		$("aside#element_sidebar").append("<label>Name</label>"
		+ "<input type=\"text\" id=\"current_class_name\" onkeyup=\"setElementName()\" value=\"" + app.currentElement.attributes.name + "\">"
		+ "<h3>Properties</h3>"
		+ "<div id=\"attibs_editable\"></div>"
		+ "<button id=\"add_attrib\" onclick=\"attribDialog()\">+ New Property</button>"
		+ "<h3>Relationships</h3>"
		+ "<button onclick=\"connectElements('source', uml.Generalization)\">Generalize</button>"
		+ "<button onclick=\"connectElements('target', uml.Generalization)\">Specialize</button>"
		+ "<button onclick=\"connectElements('source', uml.Implementation)\">Realize</button>"
		+ "<button onclick=\"connectElements('target', uml.Implementation)\">Implement</button>"
		+ "<button onclick=\"connectElements('target', uml.Association)\">Associate</button>"
		+ "<button onclick=\"connectElements('target', uml.Aggregation)\">Aggregate</button>"
		+ "<button onclick=\"connectElements('source', uml.Aggregation)\">Aggregated by</button>"
		+ "<button onclick=\"connectElements('source', uml.Composition)\">Compose</button>"
		+ "<button onclick=\"connectElements('target', uml.Composition)\">Composed of</button>"
		+ "<button onclick=\"removeElement()\">Remove</button>");
		_.each(app.classes.models, function(c) {
			if(c.id === app.currentElement.id){
				_.each(c.attributes.attributes, function(c, index) {
					var attribStr;
					if(c.charAt(0) === '+' || c.charAt(0) === '#' || c.charAt(0) === '~' || c.charAt(0) === '-'){
					}
					attribStr = c.split(": ");

					$("div#attibs_editable").append("<div>"
						+ "<select onchange=\"changeAttrib(- " + index + ", \'" + attribStr[0] + "\: ' + this.item(this.selectedIndex).text)\" type=\"text\" value=\"" + attribStr[1] + "\">"
							+ "<option>String</option>"
							+ "<option>String[]</option>"
							+ "<option>Integer</option>"
							+ "<option>Integer[]</option>"
							+ "<option>Real</option>"
							+ "<option>Real[]</option>"
							+ "<option>Boolean</option>"
							+ "<option>Boolean[]</option>"
						+ "</select>"
						+ "<input onchange=\"changeAttrib(" + index + ",'- ' + this.value + \': " + attribStr[1] + "\')\" type=\"text\" value=\"" + attribStr[0].substr(2, attribStr[0].length) + "\">"
						+ "</div>");
				});
			}
		});
	}
}

function changeAttrib(index, val){
	app.currentElement.prop('attributes/' + index, val);
	selectElement(app.currentElement);
}
 
function unselectElements(){
	app.currentElement = null;
	$("aside#element_sidebar").empty();
	$("aside#element_sidebar").append(

					"<button onclick=\"addElement(joint.shapes.uml.Class)\">Add Class</button><br>"

					+ "<button onclick=\"addElement(joint.shapes.uml.Abstract)\">Add Abstract Class</button><br>"
					+ "<button onclick=\"addElement(joint.shapes.uml.Interface)\">Add Interface</button>"
					
				);
}

function newDerivedAttrib(ref){
	$( "#dialog" ).data('ref', ref).dialog("open");;
}
var q,w;
function removeElement(){
	q= app.classes.models;

	
	app.classes.remove(app.currentElement);
	app.currentElement.position = { x: 640 , y: 0 };
	alert(app.classes.length);
	refresh();
}