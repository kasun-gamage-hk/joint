function newSiteMapElement(type){
    switch(type){
        case 'page' : addPage(name);
            break;
    }
}

function addPage(pageName){
    pageName = prompt("Enter Name");
	var pageRef = new app.Page({
        position: { x: 10, y: 10 },
        attrs: { text: { text: pageName } }
    });
    pageRef.set('z', 2);
    pageRef.on('change:parent', function() {

        pageRef.attr({
            rect: { fill: '#66ABD9' }
        });  

    });
	app.pages.add({name : pageName, ref : pageRef, containerType : 'Page', nestedContainers: null});
	org_nav_graph.addCell(pageRef);
}

function addLandmarkPage(pageName){
    pageName = prompt("Enter Name");
    var pageRef = new app.LandmarkPage({
        position: { x: 10, y: 10 },
        attrs: { text: { text: pageName } }
    });
    pageRef.set('z', 2);

    pageRef.on('change:parent', function() {

        pageRef.attr({
            rect: { fill: '#66ABD9' }
        });  

    });

    app.pages.add({name : pageName, ref : pageRef, containerType : 'LMPage', nestedContainers: null});
    org_nav_graph.addCell(pageRef);
}

function addHomePage(){
    var pageRef = new app.HomePage();
    pageRef.set('z', 2);

    pageRef.on('change:parent', function() {

        pageRef.attr({
            rect: { fill: '#66ABD9' }
        });  

    });

    app.pages.add({ref : pageRef, containerType : 'HPage', nestedContainers: null});
    org_nav_graph.addCell(pageRef);
}

function addArea(areaName){
    var areaName2 = prompt("Enter Name");
    if(areaName2 == null) return;
	var areaRef = new app.Area({
        attrs: {text: { text: areaName2} }
    });

    areaRef.set('z', 1);
    
    app.pages.add({name : areaName2, ref : areaRef, containerType : 'Area', nestedContainers: [] });
	org_nav_graph.addCell(areaRef);
}

function addModule(moduleName){
    var moduleName2 = prompt("Enter Name");
    if(moduleName2 == null) return;
    var moduleRef = new app.Module({
        attrs: { text: { text: moduleName2 } }
    });
    moduleRef.set('z', 3);
    
    moduleRef.on('change:parent', function() {

        moduleRef.attr({
            rect: { fill: '#29ABA4' }
        });  

    });

    app.pages.add({name : moduleName2, ref : moduleRef, containerType : 'Module'});
    org_nav_graph.addCell(moduleRef);
}

var current_SMElement;
function selectSMElement(model){
    current_SMElement = model;
}
function addUnit(name, unitType, mapTo, param){

    if(unitType == null || mapTo == null || param == null) return;
    var unitRef = new app.Unit({
        attrs: { text: { text: name /*+ "<br>" + mapTo + "-" + unitType*/, fill: 'purple', 'ref-y': 12 } }
    });
    unitRef.set('z', 4);

    unitRef.on('change:parent', function() {

        unitRef.attr({
            rect: { fill: '#E6CBAE' }
        });  

    });
    
    app.pages.add({name : mapTo + "-" + unitType, ref : unitRef, containerType : 'Unit', mapTo: mapTo, param : param, name : name});
    org_nav_graph.addCell(unitRef);
}

function addProcessUnit(processName){
    if(processName == null) return;

    var processRef = new app.Process({
        attrs: { text: { text: processName, fill: 'black', 'ref-y': 12 } }
    });
    processRef.set('z', 4);

    processRef.on('change:parent', function() {

        processRef.attr({
            rect: { fill: '#86704B' }
        });  

    });
    
    app.pages.add({name : processName, ref : processRef, containerType : 'Process'});
    org_nav_graph.addCell(processRef);
}
function addContexualLink(param){
    //app.pages.models[0].attributes.ref.getEmbeddedCells()[0].attributes.source.id.attributes.attrs.text;
    var relRef;
    relRef = new app.ContexualLink({ source: { id: current_SMElement }});

    relRef.label(0, {
        position: .5,
        attrs: {
            text: { fill: 'black', text : param }
        }
    });
    app.links.add(relRef);
    org_nav_graph.addCell(relRef);
    selectSMElement(relRef);
    //refresh();
}

function addNCLink(){
    //app.pages.models[0].attributes.ref.getEmbeddedCells()[0].attributes.source.id.attributes.attrs.text;
    var relRef;
    relRef = new app.NonContexualLink({ source: { id: current_SMElement }});
    app.links.add(relRef);
    org_nav_graph.addCell(relRef);
    selectSMElement(relRef);
    //refresh();
}
function addTransLink(){
    //app.pages.models[0].attributes.ref.getEmbeddedCells()[0].attributes.source.id.attributes.attrs.text;
    var relRef;
    relRef = new app.TransportLink({ source: { id: current_SMElement }});
    app.links.add(relRef);
    org_nav_graph.addCell(relRef);
    selectSMElement(relRef);
    //refresh();
}
function addAutoLink(){
    //app.pages.models[0].attributes.ref.getEmbeddedCells()[0].attributes.source.id.attributes.attrs.text;
    var relRef;
    relRef = new app.AutomaticLink({ source: { id: current_SMElement }});

    relRef.label(0, {
        position: .5,
        attrs: {
            rect: { fill: 'white', stroke: 'red' },
            text: { fill: 'red', text : 'A' }
        }
    });

    app.links.add(relRef);
    org_nav_graph.addCell(relRef);
    selectSMElement(relRef);
    //refresh();
}
function unselectSMElement(){
    current_SMElement = null;
}
function renderOrgBar(){
    $("#navca_bar").addClass("hidden_bar");
    $("#org_bar").removeClass("hidden_bar");
    $("#org_bar").addClass("cur_bar");
}
function renderNavCABar(){
    $("#org_bar").addClass("hidden_bar");
    $("#navca_bar").removeClass("hidden_bar");
    $("#navca_bar").addClass("cur_bar");
}