/* ---------------------------------------------
// LINKS
// https://www.digitalocean.com/community/tutorials/getting-started-with-data-visualization-using-javascript-and-the-d3-library
// https://visual.ly/blog/creating-animations-and-transitions-with-d3-js/
--------------------------------------------- */
import * as d3 from 'd3';

export const addBars = (data, whichSVG) => {
  let currSVG;
  if (whichSVG === 'online') {
    currSVG = '#online';
  } else if (whichSVG === 'stage') {
    currSVG = '#stage';
  }

  // const width = online.offsetWidth;
  const width = 500;
  // const barHeight = online.offsetHeight;
  const barHeight = 100;

  const xScale =
    d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, d3.max(data) * 2]);

  const chart =
    d3.select(currSVG)
      .attr('width', width)
      .attr('height', barHeight * data.length);

  const bar =
    chart.selectAll('g')
         .data(data)
         .enter()
         .append('g')
         .attr('transform', (d, i) => {
            return ('translate(0,'+ i * barHeight +')');
         });

  bar.append('rect')
     .attr('width', 0)
     .attr('height', barHeight - 1)
     .attr('class', 'bar')
     .transition()
     .duration(1500)
     .delay(500)
     .attr('width', xScale);

  bar.append('text')
     .attr('x', (d) => xScale(d))
     .attr('y', barHeight / 2)
     .text((d) => d)
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
//   let currSVG;
//   if (whichSVG === 'online') {
//     currSVG = '#online';
//   } else if (whichSVG === 'stage') {
//     currSVG = '#stage';
//   }

//   let height = online.offsetHeight;
//   let width  = online.offsetWidth;
//   let margin = { top: 0, right: 0, bottom: 30, left: 30 };

//   let xScale =
//     d3.scaleBand()
//       .domain(data)
//       .range([0, width])
//       .padding(0.1);

//   let yScale =
//     d3.scaleLinear()
//       .domain([0, d3.max(data)])
//       .range([0, height]);

//   let svg =
//     d3.select(currSVG)
//       .append('svg')
//       .attr('height', height)
//       .attr('width', width);

//   let bar =
//     svg.selectAll('rect')
//        .data(data)
//        .enter();

//   bar.append('rect')
//      .attr('height', (d) => yScale(d))
//      .attr('width', (d) => xScale(d))
//      .attr('x', (d) => xScale(d))
//      .attr('y', (d) => height - yScale(d))
//      .attr('class', 'bar')
//      .attr('fill', '#ffdfa0')
//      .transition()
//      .duration(1500)
//      .delay(500)
//      .style('height', 100);

//   bar.append('text')
//      .attr('x', (d) => xScale(d))
//      .attr('y', height / 2)
//      .attr('dx', '.5em')
//      .text((d) => {
//         return (d);
//      })
//      .style('opacity', 0)
//      .transition()
//      .duration(5000)
//      .delay(1500)
//      .style('opacity', 100);
// };
