var gjson;
var transform;

$(document).on("pageinit", function() {

  //populate the projects list with JSON2HTML template
  transform ={"tag":"div","data-role":"collapsible","data-mini":"true","class":"projectDivs","children":[
    {"tag":"h4","html":"${Title}"},
    {"tag":"p","html":"${Description}"}
  ]}
  //alert(transform);
  //the JSON is loaded from an external file, but it is in this format:
  /*var json= [{
          "Title": "Node-Red on Raspberry Pi",
          "projectBrief": "Node-Red",
          "Description": "Link to <a href=\"http://lesterthomas.ddns.net:1880\" data-ajax=\"false\" target=\"new\">Node-Red on Raspberry Pi </a></br>The link above takes you to the Development Environment for Node-Red running on my Raspberry Pi (configured as a <a href=\"http://thethingbox.io/\" data-ajax=\"false\">TheThingBox</a>.)"
        },{
          "Title": "Node.js on Heroku",
          "projectBrief": "Node-Red2",
          "Description": "Node-Red Description2"
        }];*/

    $.getJSON("projects.json", function(json) {
        gjson=json;
        $('#projects').json2html(json,transform); //apply the template to the #projects div
        //alert(json);
        $("#projects").trigger('create');  //cause the collabsible elements to come alive
      });

});


