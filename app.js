
const data = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 15, region: 'France' },
    { id: 'd3', value: 6, region: 'Korea' }
]

d3.select('div')
    .selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text(dta => dta.region)

console.log(d3.select('div').select('p').innerHtml)