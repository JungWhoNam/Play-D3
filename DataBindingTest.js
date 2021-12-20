
var data = [1,2,3,4,5];

// in this example, only two array elements are shown as there are only two p elements.
d3.select("body").append("p");
d3.select("body").append("p");
d3.select("body").append("p");
var p = d3.select("body")
    .selectAll("p")
    .data(data)
    .text(function (d, i) {
        return d;
    });

// if want to dynamically create elements according to our data
// use enter().append(...)
var body = d3.select("body")
    .selectAll("span")
    .data(data)
    .enter() // checks for span elements corresponding to our five array elements
    .append("span") // append created spands to the body element
    .text((d, i) => d + " ")
    .style("color", (d, i) => i % 2 == 0 ? "red" : "black"); // color according to the array elements

// if want to update and remove elements according to our data
// use exit().remove()
data = ["hello", "world"];
var p = d3.select("body")
    .selectAll("p")
    .data(data)
    .text((d, i) => d)
    .exit()
    .remove();

// dealing with a double array
data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

var tr = d3.select("body")
    .append("table")
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");

var td = tr.selectAll("tr")
    .data((d) => d)
    .enter()
    .append("td")
    .text((d) => d);