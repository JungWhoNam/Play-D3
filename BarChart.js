
var data = [5, 10, 12];
var width = 200, scaleFactor = 10, barHeight = 20;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);

var bar = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", (d, i) => `translate(0, ${i * barHeight})`);

bar.append("rect")
    .attr("width", (d, i) => d * scaleFactor)
    .attr("height", barHeight - 1);

bar.append("text")
    .text((d, i) => d)
    .attr("x", (d, i) => d * scaleFactor)
    .attr("y", (barHeight - 1) * 0.5)
    .attr("dx", "-.35em")
    .attr("dy", ".35em");