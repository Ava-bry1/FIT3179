var vg_1 = "BarChart.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "TopoMap.json";
vegaEmbed("#map_one", vg_2).then(function(result) {}).catch(console.error);

var vg_3 = "ChloroMap.json";
vegaEmbed("#map_two", vg_3).then(function(result) {}).catch(console.error);

var vg_4 = "BubblePlot.json";
vegaEmbed("#bubble_one", vg_4).then(function(result) {}).catch(console.error);