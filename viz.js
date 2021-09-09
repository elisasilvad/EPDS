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

// call the aeroplane maps' scripts

function callScript(fileName){

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = fileName;
    document.getElementsByTagName("head")[0].appendChild(script);
    return false;

}

// default map
am4core.ready(function() {

// Themes begin
    am4core.useTheme(am4themes_frozen);
// Themes end

// Create map instance
    var chart = am4core.create("mapdiv", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.homeZoomLevel = 1;
    chart.homeGeoPoint = {
        latitude: 38,
        longitude: 0
    };

// Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);
    polygonSeries.mapPolygons.template.nonScalingStroke = true;
    polygonSeries.exclude = ["AQ"];


}); // end am4core.ready()

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// INSTITUTIONS
//ACQUIRING
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv5", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [{
 "inst":"Collezione Privata Italia",
"paintings":3813
},{
 "inst":"Mercato Antiquario Italia",
"paintings":1254
},{
 "inst":"Asta Christies Londra",
"paintings":669
},{
 "inst":"Collezione Privata Roma",
"paintings":418
},{
 "inst":"Asta Sothebys Londra",
"paintings":415
},{
 "inst":"Collezione Sh Kress New York Ny",
"paintings":344
},{
 "inst":"Pinacoteca Dellaccademia Carrara Bergamo",
"paintings":248
},{
 "inst":"Asta Sothebys New York Ny",
"paintings":246
},{
 "inst":"Asta Christies New York Ny",
"paintings":222
},{
 "inst":"Mercato Antiquario Milano",
"paintings":202
},{
 "inst":"National Gallery Of Art Washington Dc",
"paintings":183
},{
 "inst":"Contini Bonacossi Firenze",
"paintings":139
},{
 "inst":"The Walters Art Museum Baltimora Md",
"paintings":138
},{
 "inst":"Collezione Privata Londra",
"paintings":136
},{
 "inst":"Asta Farsetti Prato",
"paintings":131
},{
 "inst":"Mercato Antiquario Firenze",
"paintings":129
},{
 "inst":"Philadelphia Museum Of Art Philadelphia Pa",
"paintings":128
},{
 "inst":"Collezione Privata Milano",
"paintings":126
},{
 "inst":"Mercato Antiquario Roma",
"paintings":102
},{
 "inst":"Museo Thyssenbornemisza Madrid",
"paintings":100
}]

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "inst";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.fontSize = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 4500;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 30;
// axis break
var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 700;
axisBreak.endValue = 2000;
//axisBreak.breakSize = 0.005;

// fixed axis break
var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "inst";
series.dataFields.valueY = "paintings";
series.columns.template.tooltipText = "{categoryX}:\n{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

var topContainer = chart.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toFront();
topContainer.paddingBottom = 15;
topContainer.width = am4core.percent(100);

var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "[font-size:18px]...and acquiring:[/]\n[bold font-size:30px]the 20 most relevant acquiring institutions[/]";
dateTitle.fontWeight = 600;
dateTitle.align = "right";

}); // end am4core.ready()

// ------------------------------------------------------------------------------------------------------------------------------------------------

//GIVING
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv6", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [{
 "inst":"Collezione Privata Italia",
"paintings":1845
},{
 "inst":"Mercato Antiquario Italia",
"paintings":1199
},{
 "inst":"Asta Christies Londra",
"paintings":628
},{
 "inst":"Asta Sothebys Londra",
"paintings":538
},{
 "inst":"Collezione Sh Kress New York Ny",
"paintings":483
},{
 "inst":"Contini Bonacossi Firenze",
"paintings":359
},{
 "inst":"Mercato Antiquario Milano",
"paintings":277
},{
 "inst":"Asta Sothebys New York Ny",
"paintings":248
},{
 "inst":"Sestieri Roma",
"paintings":184
},{
 "inst":"Collezione I Brass Venezia",
"paintings":177
},{
 "inst":"Collezione Cook Londra",
"paintings":166
},{
 "inst":"Koetser New York Ny",
"paintings":165
},{
 "inst":"Asta Pandolfini Firenze",
"paintings":156
},{
 "inst":"F Mont New York Ny",
"paintings":134
},{
 "inst":"Mercato Antiquario Firenze",
"paintings":129
},{
 "inst":"Collezione M Massarenti Roma",
"paintings":124
},{
 "inst":"Collezione Stramezzi Crema",
"paintings":123
},{
 "inst":"Collezione Jg Johnson Philadelphia Pa",
"paintings":122
},{
 "inst":"Collezione Carrara Bergamo",
"paintings":120
},{
 "inst":"Mercato Antiquario Roma",
"paintings":110
}]

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "inst";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.fontSize = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 2100;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 30;
// axis break
var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 500;
axisBreak.endValue = 900;
//axisBreak.breakSize = 0.005;

// fixed axis break
var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "inst";
series.dataFields.valueY = "paintings";
series.columns.template.tooltipText = "{categoryX}:\n{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

var topContainer = chart.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toFront();
topContainer.paddingBottom = 15;
topContainer.width = am4core.percent(100);

var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "[font-size:18px]The dominance of Italian institutions in giving:[/]\n[bold font-size:30px]the 20 most relevant giving institutions[/]";
dateTitle.fontWeight = 600;
dateTitle.align = "right";

}); // end am4core.ready()

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// ACQUIRING AND GIVING
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create('chartdiv7', am4charts.XYChart)
chart.colors.step = 2;

chart.legend = new am4charts.Legend()
chart.legend.position = 'top'
chart.legend.paddingBottom = 20
chart.legend.labels.template.maxWidth = 95

var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
xAxis.dataFields.category = 'category'
xAxis.renderer.cellStartLocation = 0.1
xAxis.renderer.cellEndLocation = 0.9
xAxis.renderer.grid.template.location = 0;

var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.min = 0;

function createSeries(value, name) {
    var series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = value
    series.dataFields.categoryX = 'category'
    series.name = name

    series.events.on("hidden", arrangeColumns);
    series.events.on("shown", arrangeColumns);

    var bullet = series.bullets.push(new am4charts.LabelBullet())
    bullet.interactionsEnabled = false
    bullet.dy = 30;
    bullet.label.text = '{valueY}'
    bullet.label.fill = am4core.color('#ffffff')

    return series;
}

chart.data = [{
 category:"Collezione-privata-italia",
first:3813,
second:1845
},{
 category:"Mercato-antiquario-italia",
first:1254,
second:1199
},{
 category:"Asta-christies-londra",
first:669,
second:628
},{
 category:"Collezione-privata-roma",
first:418,
second:58
}
]

createSeries('first', 'Acquired paintings');
createSeries('second', 'Given paintings');
//createSeries('third', 'The Third');

function arrangeColumns() {

    var series = chart.series.getIndex(0);

    var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
    if (series.dataItems.length > 1) {
        var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        var delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
            var middle = chart.series.length / 2;

            var newIndex = 0;
            chart.series.each(function(series) {
                if (!series.isHidden && !series.isHiding) {
                    series.dummyData = newIndex;
                    newIndex++;
                }
                else {
                    series.dummyData = chart.series.indexOf(series);
                }
            })
            var visibleCount = newIndex;
            var newMiddle = visibleCount / 2;

            chart.series.each(function(series) {
                var trueIndex = chart.series.indexOf(series);
                var newIndex = series.dummyData;

                var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
            })
        }
    }
}

}); // end am4core.ready()

// ---------------------------------------------------------------------------------------------------------------------------------------------------
//NETWORK
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv8", am4charts.ChordDiagram);

// colors of main characters
chart.colors.saturation = 0.45;
chart.colors.step = 3;
var colors = {
    Rachel:chart.colors.next(),
    Monica:chart.colors.next(),
    Phoebe:chart.colors.next(),
    Ross:chart.colors.next(),
    Joey:chart.colors.next(),
    Chandler:chart.colors.next()
}

// data was provided by: https://www.reddit.com/user/notrudedude

chart.data = [
{"from":"National Gallery Of Art Washington Dc", "to":"Collezione Sh Kress New York Ny", "value":135},
{"from":"Collezione Sh Kress New York Ny", "to":"National Gallery Of Art Washington Dc", "value":135},
{"from":"Collezione Sh Kress New York Ny", "to":"Contini Bonacossi Firenze", "value":169},
{"from":"Contini Bonacossi Firenze", "to":"Collezione Sh Kress New York Ny", "value":169},
{"from":"Contini Bonacossi Firenze", "to":"Collezione Privata Italia", "value":123},
{"from":"Philadelphia Museum Of Art Philadelphia Pa", "to":"Collezione Jg Johnson Philadelphia Pa", "value":121},
{"from":"Collezione Jg Johnson Philadelphia Pa", "to":"Philadelphia Museum Of Art Philadelphia Pa", "value":121},
{"from":"The Walters Art Museum Baltimora Md", "to":"Collezione M Massarenti Roma", "value":123},
{"from":"Collezione M Massarenti Roma", "to":"The Walters Art Museum Baltimora Md", "value":123},
{"from":"Mercato Antiquario Stoccolma", "to":"Collezione Privata Italia", "value":82},
{"from":"Collezione Privata Italia", "to":"Contini Bonacossi Firenze", "value":123},
{"from":"Collezione Privata Italia", "to":"Mercato Antiquario Stoccolma", "value":82},
{"from":"Collezione Privata Italia", "to":"Collezione Privata Roma", "value":164},
{"from":"Collezione Privata Italia", "to":"V Frascione Firenze", "value":82},
{"from":"Collezione Privata Italia", "to":"Collezione Stramezzi Crema", "value":123},
{"from":"Collezione Privata Italia", "to":"Collezione Privata Londra", "value":82},
{"from":"Collezione Privata Italia", "to":"Asta Farsetti Prato", "value":123},
{"from":"Collezione Privata Italia", "to":"Sestieri Roma", "value":123},
{"from":"Collezione Privata Italia", "to":"Asta Christies Londra", "value":164},
{"from":"Collezione Privata Italia", "to":"Mercato Antiquario Italia", "value":902},
{"from":"Collezione Privata Italia", "to":"Mercato Antiquario Firenze", "value":82},
{"from":"Collezione Privata Italia", "to":"Asta Sothebys Londra", "value":205},
{"from":"Collezione Privata Italia", "to":"Mercato Antiquario Milano", "value":82},
{"from":"Collezione Privata Italia", "to":"Collezione Spark New York Ny", "value":82},
{"from":"Collezione Privata Italia", "to":"Asta Sothebys New York Ny", "value":123},
{"from":"Collezione Privata Italia", "to":"Asta Pandolfini Firenze", "value":123},
{"from":"Collezione Privata Italia", "to":"Collezione I Brass Venezia", "value":164},
{"from":"Collezione Privata Italia", "to":"Collezione Privata Brasile", "value":82},
{"from":"Collezione Privata Italia", "to":"Mercato Antiquario Assisi", "value":82},
{"from":"Collezione Privata Italia", "to":"Moratilla Parigi", "value":82},
{"from":"Collezione Privata Italia", "to":"Galleria Menaguale Verona", "value":82},
{"from":"Collezione Privata Italia", "to":"Museo Thyssenbornemisza Madrid", "value":82},
{"from":"Collezione Privata Italia", "to":"Collezione Odescalchi Roma", "value":82},
{"from":"Collezione Privata Italia", "to":"Koetser New York Ny", "value":164},
{"from":"Collezione Privata Italia", "to":"Asta Galardelli E Mazzoni Firenze", "value":82},
{"from":"Collezione Privata Roma", "to":"Collezione Privata Italia", "value":164},
{"from":"V Frascione Firenze", "to":"Collezione Privata Italia", "value":82},
{"from":"Collezione Stramezzi Crema", "to":"Collezione Privata Italia", "value":123},
{"from":"Collezione Privata Londra", "to":"Collezione Privata Italia", "value":82},
{"from":"Asta Farsetti Prato", "to":"Collezione Privata Italia", "value":123},
{"from":"Sestieri Roma", "to":"Collezione Privata Italia", "value":123},
{"from":"Pinacoteca Dell'Accademia Carrara Bergamo", "to":"Collezione Carrara Bergamo", "value":120},
{"from":"Collezione Carrara Bergamo", "to":"Pinacoteca Dellaccademia Carrara Bergamo", "value":120},
{"from":"Asta Christies Londra", "to":"Collezione Privata Italia", "value":164},
{"from":"Mercato Antiquario Italia", "to":"Collezione Privata Italia", "value":902},
{"from":"Mercato Antiquario Firenze", "to":"Collezione Privata Italia", "value":82},
{"from":"Asta Sothebys Londra", "to":"Collezione Privata Italia", "value":205},
{"from":"Mercato Antiquario Milano", "to":"Collezione Privata Italia", "value":82},
{"from":"Collezione Spark New York Ny", "to":"Collezione Privata Italia", "value":82},
{"from":"Asta Sothebys New York Ny", "to":"Collezione Privata Italia", "value":123},
{"from":"Asta Pandolfini Firenze", "to":"Collezione Privata Italia", "value":123},
{"from":"Collezione I Brass Venezia", "to":"Collezione Privata Italia", "value":164},
{"from":"Collezione Privata Brasile", "to":"Collezione Privata Italia", "value":82},
{"from":"Mercato Antiquario Assisi", "to":"Collezione Privata Italia", "value":82},
{"from":"Moratilla Parigi", "to":"Collezione Privata Italia", "value":82},
{"from":"Galleria Menaguale Verona", "to":"Collezione Privata Italia", "value":82},
{"from":"Museo Thyssenbornemisza Madrid", "to":"Collezione Privata Italia", "value":82},
{"from":"Collezione Odescalchi Roma", "to":"Collezione Privata Italia", "value":82},
{"from":"Koetser New York Ny", "to":"Collezione Privata Italia", "value":164},
{"from":"Asta Galardelli E Mazzoni Firenze", "to":"Collezione Privata Italia", "value":82}
]

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 0.05;
chart.minNodeSize = 0.03;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 10;

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}'s exchanges: {total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function(fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function(dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName} & {toName}:{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

}); // end am4core.ready()