//Container

var app = app || {};

var uml = joint.shapes.uml;

app.classes = new Backbone.Collection;

app.relationships = new Backbone.Collection;

app.processes = [];

app.userGroups = [];

app.sessionVars = [];

app.tables = [];

app.pages = new Backbone.Collection;

app.units = new Backbone.Collection;

app.links = new Backbone.Collection;

//sample
function loadSample(){
app.classes.add(new uml.Interface({
					position: { x:300  , y: 50 },
					size: { width: 260, height: 100 },
					name: 'Mammal',
					methods: ['+ setDateOfBirth(dob: Date): Void','+ getAgeAsDays(): Numeric'],
					attrs: {
					    '.uml-class-name-rect': {
							fill: '#feb662',
						    stroke: '#ffffff',
						    'stroke-width': 0.5
						},
						'.uml-class-attrs-rect, .uml-class-methods-rect': {
						    fill: '#fdc886',
						    stroke: '#fff',
						    'stroke-width': 0.5
						},
						'.uml-class-attrs-text': {
						    ref: '.uml-class-attrs-rect',
						    'ref-y': 0.5,
						    'y-alignment': 'middle'
						},
						'.uml-class-methods-text': {
						    ref: '.uml-class-methods-rect',
						    'ref-y': 0.5,
						    'y-alignment': 'middle'
						}

					}
				}));
			app.classes.add(new uml.Abstract({
						        position: { x:300  , y: 300 },
						        size: { width: 260, height: 100 },
						        name: 'Person',
						        attributes: ['firstName: String','lastName: String'],
						        methods: ['+ setName(first: String, last: String): Void','+ getName(): String'],
						        attrs: {
						            '.uml-class-name-rect': {
						                fill: '#68ddd5',
						                stroke: '#ffffff',
						                'stroke-width': 0.5
						            },
						            '.uml-class-attrs-rect, .uml-class-methods-rect': {
						                fill: '#9687fe',
						                stroke: '#fff',
						                'stroke-width': 0.5
						            },
						            '.uml-class-methods-text, .uml-class-attrs-text': {
						                fill: '#fff'
						            }
						        }
						    }));
		app.classes.add(new uml.Class({
        position: { x:20  , y: 190 },
        size: { width: 220, height: 100 },
        name: 'BloodGroup',
        attributes: ['bloodGroup: String'],
        methods: ['+ isCompatible(bG: String): Boolean'],
        attrs: {
            '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }));

    app.classes.add(new uml.Class({
        position: { x:630  , y: 190 },
        size: { width: 160, height: 100 },
        name: 'Address',
        attributes: ['houseNumber: Integer','streetName: String','town: String','postcode: String'],
        methods: [],
        attrs: {
            '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-text': {
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        },

    }));

    app.classes.add(new uml.Class({
        position: { x:200  , y: 500 },
        size: { width: 180, height: 50 },
        name: 'Man',
        attrs: {
            '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            }
        }
    }));

    app.classes.add(new uml.Class({
        position: { x:450  , y: 500 },
        size: { width: 180, height: 50 },
        name: 'Woman',
        methods: ['+ giveABrith(): Person []'],
        attrs: {
            '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-text': {
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }));

    var mammal = _.find(app.classes.models, function(model){ return model.attributes.name  === "Mammal"; });
    var person = _.find(app.classes.models, function(model){ return model.attributes.name  === "Person"; });
    var woman = _.find(app.classes.models, function(model){ return model.attributes.name  === "Woman"; });
    var address = _.find(app.classes.models, function(model){ return model.attributes.name  === "Address"; });
    var bloodGroup = _.find(app.classes.models, function(model){ return model.attributes.name  === "BloodGroup"; });
    var man = _.find(app.classes.models, function(model){ return model.attributes.name  === "Man"; });


    app.relationships.add(new uml.Generalization({ source: { id: man.id }, target: { id: person.id }}));
    app.relationships.add(new uml.Generalization({ source: { id: woman.id }, target: { id: person.id }}));
    app.relationships.add(new uml.Implementation({ source: { id: person.id }, target: { id: mammal.id }}));
    app.relationships.add(new uml.Aggregation({ source: { id: address.id }, target: { id: person.id }}));
    app.relationships.add(new uml.Composition({ source: { id: bloodGroup.id }, target: { id: person.id }}));
/*
    app.userGroups.push({name : 'admin'}, {name : 'normal'}, {name : 'premium'});

    app.processes.push({name : 'process', input : 'int', output : 'void'});
    app.processes.push({name : 'process2', input : 'int', output : 'String'});
    app.processes.push({name : 'process3', input : 'int', output : 'double'});
    app.processes.push({name : 'process4', input : 'void', output : 'void'});
    app.processes.push({name : 'process5', input : 'Integer', output : 'String'});
    app.processes.push({name : 'process6', input : 'int', output : 'void'});

    app.sessionVars.push({name : 'username'});

    addArea('OrderManagement');    

    addPage('OrderManagment');

    app.units.push({name : 'SearchOrder'});

    app.units.push({name : 'OrdersList', param : ['date', 'totalAmount']});

    app.links.push({type : 'auto', source : 'SearchOrder', target : 'OrdersList'});
    */
    refresh();
}
//end of sample