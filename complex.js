var d3 = require('d3');

var height = 200;
var width = 600;


var svg = d3.select('#node')
  .append('svg')
    .attr('width', width)
    .attr('height', height);

var node1 = svg.append('circle')
    .attr('cx', width/3)
    .attr('cy', height/3)
    .attr('r', 20);

var node2 = svg.append('circle')
    .attr('cx', 2*width/3)
    .attr('cy', 2*height/3)
    .attr('r', 20);
