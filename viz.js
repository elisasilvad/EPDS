// CITIES PIE ------------------------------------------------------------------------------------------------------------------------------------------------------
// ACQUIRING
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data

chart.data = [{
 "city":"Londra",
"paintings":2082
},{
 "city":"New-york-ny",
"paintings":1809
},{
 "city":"Roma",
"paintings":1241
},{
 "city":"Firenze",
"paintings":965
},{
 "city":"Milano",
"paintings":965
},{
 "city":"Venezia",
"paintings":341
},{
 "city":"Bergamo",
"paintings":325
},{
 "city":"Bologna",
"paintings":321
},{
 "city":"Torino",
"paintings":290
},{
 "city":"Others",
"paintings":8756
}]

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "paintings";
pieSeries.dataFields.category = "city";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);

var topContainer = chart.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toBack();
topContainer.paddingBottom = 15;
topContainer.width = am4core.percent(100);

var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "[font-size:18px]importing art acts[/]:\n[bold font-size:30px]Most acquiring cities[/]";
dateTitle.fontWeight = 500;
dateTitle.align = "left";


}); // end am4core.ready()


// GIVING
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv2", am4charts.PieChart);

// Add data

chart.data = [{
 "city":"Londra",
"paintings":2334
},{
 "city":"New-york-ny",
"paintings":2138
},{
 "city":"Firenze",
"paintings":1614
},{
 "city":"Roma",
"paintings":1515
},{
 "city":"Milano",
"paintings":1010
},{
 "city":"Venezia",
"paintings":573
},{
 "city":"Parigi",
"paintings":516
},{
 "city":"Regno-unito",
"paintings":447
},{
 "city":"Torino",
"paintings":322
},{
 "city":"Others",
"paintings":4691
}]

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "paintings";
pieSeries.dataFields.category = "city";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);

var topContainer = chart.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toBack();
topContainer.paddingBottom = 15;
topContainer.width = am4core.percent(100);

var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "[font-size:18px]exporting art acts[/]:\n[bold font-size:30px]Most giving cities[/]";
dateTitle.fontWeight = 600;
dateTitle.align = "left";


}); // end am4core.ready()

// --------------------------------------------------------------------------------------------------------------------------------------------------------

//NESTED PIE CHART

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv3", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Add data
chart.data = [{
 "city":"Londra",
"acq_paintings":2082,
"giv_paintings":2334
},{
 "city":"New-york-ny",
"acq_paintings":1809,
"giv_paintings":2138
},{
 "city":"Roma",
"acq_paintings":1241,
"giv_paintings":1515
},{
 "city":"Firenze",
"acq_paintings":965,
"giv_paintings":1614
},{
 "city":"Milano",
"acq_paintings":965,
"giv_paintings":1010
},{
 "city":"Venezia",
"acq_paintings":341,
"giv_paintings":573
},{
 "city":"Bergamo",
"acq_paintings":325,
"giv_paintings":282
},{
 "city":"Bologna",
"acq_paintings":321,
"giv_paintings":305
},{
 "city":"Torino",
"acq_paintings":290,
"giv_paintings":322
},{
 "city":"Others",
"acq_paintings":8756,
"giv_paintings":4691
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "giv_paintings";
pieSeries.dataFields.category = "city";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;

// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "acq_paintings";
pieSeries2.dataFields.category = "city";
pieSeries2.slices.template.stroke = am4core.color("#fff");
pieSeries2.slices.template.strokeWidth = 2;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;

var topContainer = chart.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toBack();
topContainer.paddingBottom = 15;
topContainer.width = am4core.percent(100);

var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "[font-size:18px]acquisitions (external) and \ngiving away (internal)[/]:\n[bold font-size:30px]Differences in \nexchanging among \ncities[/]";
dateTitle.fontWeight = 600;
dateTitle.align = "left";

}); // end am4core.ready()

// --------------------------------------------------------------------------------------------------------------------------------------------------------

//Variable-radius nested donut chart ---------------------------------------------------------------------------------------------------------------------
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv1", am4charts.PieChart);
chart.startAngle = 160;
chart.endAngle = 380;

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Add data
chart.data = [{
 "city":"Londra",
"acq_paintings":4416,
},{
 "city":"New-york-ny",
"acq_paintings":3947
},{
 "city":"Roma",
"acq_paintings":2756
},{
 "city":"Firenze",
"acq_paintings":2579
},{
 "city":"Milano",
"acq_paintings":1975
},{
 "city":"Venezia",
"acq_paintings":914
},{
 "city":"Bergamo",
"acq_paintings":607
},{
 "city":"Bologna",
"acq_paintings":626
},{
 "city":"Torino",
"acq_paintings":612
},{
 "city":"Others",
"acq_paintings":13447
}]

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
//pieSeries.dataFields.value = "acq_paintings";
pieSeries.dataFields.category = "city";
pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
pieSeries.slices.template.strokeWidth = 1;
pieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
pieSeries.radius = am4core.percent(40);
pieSeries.innerRadius = am4core.percent(30);

var cs = pieSeries.colors;
cs.list = [am4core.color(new am4core.ColorSet().getIndex(0))];

cs.stepOptions = {
  lightness: -0.05,
  hue: 0
};
cs.wrap = false;


// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "acq_paintings";
pieSeries2.dataFields.category = "city";
pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
pieSeries2.slices.template.strokeWidth = 1;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0.05;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;

pieSeries2.labels.template.disabled = true;
pieSeries2.ticks.template.disabled = true;


var label = chart.seriesContainer.createChild(am4core.Label);
label.textAlign = "middle";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.adapter.add("text", function(text, target){
  return "[font-size:18px]times a painting has been moved[/]:\n[bold font-size:30px]" + 32.668 + "[/]";
  //return "[font-size:18px]times a painting has been moved[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
})

}); // end am4core.ready()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// BULLET MAP
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv4", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.polygon.fillOpacity = 0.6;


// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0);

// Add image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{title}";
imageSeries.mapImages.template.propertyFields.url = "url";

var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 3;
circle.propertyFields.fill = "color";
circle.nonScaling = true;

var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle2.radius = 3;
circle2.propertyFields.fill = "color";


circle2.events.on("inited", function(event){
  animateBullet(event.target);
})


function animateBullet(circle) {
    var animation = circle.animate([{ property: "scale", from: 3 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
      animateBullet(event.target.object);
    })
}

var colorSet = new am4core.ColorSet();

imageSeries.data = [ {
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "url": "http://www.google.co.uk",
  "color":colorSet.next()
},{
  "title": "New-York",
  "latitude": 40.7127,
  "longitude": -74.0059,
  "color":colorSet.next()
}, {
  "title": "Rome",
  "latitude": 41.9027,
  "longitude": 12.4963,
  "color":colorSet.next()
},{
  "title": "Florence",
  "latitude": 43.9826,
  "longitude": 12.0998,
  "color":colorSet.next()
},{
  "title": "Milan",
  "latitude": 45.4646,
  "longitude": 9.1885,
  "color":colorSet.next()
},{
  "title": "Venice",
  "latitude": 45.4387,
  "longitude": 12.3271,
  "color":colorSet.next()
},{
  "title": "Bergamo",
  "latitude": 45.6950,
  "longitude": 9.6700,
  "color":colorSet.next()
},{
  "title": "Bologna",
  "latitude": 44.4989,
  "longitude": 11.3275,
  "color":colorSet.next()
},{
  "title": "Paris",
  "latitude": 48.8647,
  "longitude": 2.3490,
  "color":colorSet.next()
},{
  "title": "Washington, DC",
  "latitude": 38.9004,
  "longitude": -77.0075,
  "color":colorSet.next()
},{
  "title": "Baltimore",
  "latitude": 39.2992,
  "longitude": -76.6093,
  "color":colorSet.next()
},{
  "title": "Philadelphia",
  "latitude": 39.9525,
  "longitude": -75.1652,
  "color":colorSet.next()
},{
  "title": "Madrid",
  "latitude": 40.4167,
  "longitude": -3.7037,
  "color":colorSet.next()
}];

var topContainer = chart.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toFront();
topContainer.paddingBottom = 15;
topContainer.width = am4core.percent(100);

var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "[font-size:18px]The space of this movement is actually very concise:[/]\n[bold font-size:30px]The route of art is drawn across \nthe Atlantic[/]";
dateTitle.fontWeight = 600;
dateTitle.align = "left";

}); // end am4core.ready()
