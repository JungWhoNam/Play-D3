
var data = [0, 22, 200, 300, 400];
var width = 200, scaleFactor = 10, barHeight = 20;

var scale = d3.scaleLinear()
            .domain([d3.min(data), d3.max(data)])
            .range([0, width]);
var getWidthInPx = (str) => 
    str.toString().length * 7;
var isLeftAligned = (d) => 
    scale(d) < getWidthInPx(scale(d).toString());

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
    .attr("width", (d, i) => scale(d))
    .attr("height", barHeight - 1);

bar.append("text")
    .text((d, i) => d)
    .attr("style", (d) => 
        isLeftAligned(d) ? "fill: rgb(150,150,150)" : "fill: rgb(255,255,255)"
    )
    .attr("x", (d, i) => 
        isLeftAligned(d) ? getWidthInPx(scale(d).toString()) : scale(d)
    )
    .attr("y", (barHeight - 1) * 0.5)
    .attr("dx", (d) => 
        isLeftAligned(d) ? ".35em" : "-.35em"
    )
    .attr("dy", ".35em");

var xScale = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, width]);
var xAxis = d3.axisBottom().scale(xScale);
svg.append("g")
    .attr("transform", `translate(0,0)`)
    .attr("class", "axis")
    .call(xAxis);