

const data = [100, "a200", "a300", 400];

for (let i = 0; i < data.length; i++) {
    // document.body.append(
    //     document.createElement("p")
    // );
    d3.select("body").append("p");
}

d3.select("body")
    .selectAll("p")
    .data(data)
    .text(function (d, i) {
        console.log("d:", d); // data element
        console.log("i:", i); // index element
        console.log("this:", this); // DOM element
        return `${i}: ${d}`;
    })
    .style("color", function(d, i) {
        var text = this.innerText;
        if (text.indexOf("a") >= 0) return "red";
        return "green";
    });