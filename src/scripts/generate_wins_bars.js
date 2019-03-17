export const addBars = (data, whichSVG) => {
  let svg;
  if (whichSVG === 'online') {
    svg = '.online-wins-svg';
  } else if (whichSVG === 'stage') {
    svg = '.stage-wins-svg';
  }

  const width = 500, barHeight = 200;

  const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  const chart =
    d3.select(svg)
      .attr('width', width)
      .attr('height', barHeight * data.length);

  const bar =
    chart.selectAll('g')
         .data(data)
         .enter()
         .append('g')
         .attr('transform', (d, i) => {
            // BEST FOR MULTIPLE BARS
            // return ('translate(0,'+ i * barHeight +')');

            // USE THIS FOR SINGLE BARS
            return ('translate(0, 200)');
         });

  bar.append('rect')
     .attr('class', 'bar')
     .attr('width', 0)
     .attr('height', barHeight - 1)
     .attr('fill', '#ffdfa0')
     .transition()
     .duration(1500)
     .delay(500)
     .attr('width', x);

  bar.append('text')
     .attr('x', (d) => {
        return (x(d) - 50);
     })
     .attr('y', barHeight / 2)
     .attr('dy', '.35em')
     .text((d) => {
        return (d);
     })
     .style('opacity', 0)
     .transition()
     .duration(5000)
     .delay(1500)
     .style('opacity', 100);
};

/* ---------------------------------------------
// TRYING OUT A COLUMN CHART
--------------------------------------------- */
// export const addBars = (data, whichSVG) => {
//   let svg;
//   if (whichSVG === 'online') {
//     svg = '.online-wins-svg';
//   } else if (whichSVG === 'stage') {
//     svg = '.stage-wins-svg';
//   }

//   d3.select(svg)
//     .selectAll('rect')
//     .data(data)
//     .enter()
//     .append('rect')
//     .attr('class', 'bar')
//     .attr('height', function(d,i) {
//       return (d * 10);
//     })
//     .attr('width', 40)
//     .attr('x', function(d,i) {
//       return ((i * 60) + 25);
//     })
//     .attr('y', function(d,i) {
//       return (700 - (d * 10));
//     })
//    .transition()
//    .duration(1500)
//    .delay(500)
//    // .attr('height', 700);
// };
