'use client';

import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

interface DataList {
  priceUsd: string,
  time: number,
  date: string
}

interface LineChartProps {
  data: DataList[]
}

export default function LineChart({ data }:LineChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const width = 928;
  const height = 500;
  const marginTop = 20;
  const marginRight = 10;
  const marginBottom = 30;
  const marginLeft = 40;

  useEffect(() => {
    if (!data || data.length === 0) return;

    const parsedData = data.map(d => ({
      price: parseFloat(d.priceUsd),
      time: new Date(d.time),
    }));
    const xDomain = d3.extent(parsedData, d => d.time);
    const yDomain = [0, d3.max(parsedData, d => d.price) || 0];

    if (!xDomain[0] || !xDomain[1] || !yDomain[1]) return;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc()
      .domain(xDomain as [Date, Date])
      .range([marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
      .domain(yDomain)
      .range([height - marginBottom, marginTop]);

    // Declare the line generator.
    const line = d3.line<{ price: number; time: Date }>()
      .x(d => x(d.time))
      .y(d => y(d.price))
      .curve(d3.curveMonotoneX);

    // Create the SVG container.
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic')

    svg.selectAll('*').remove(); // Clear previous content

    // Add the x-axis.
    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

    // Add the y-axis, remove the domain line, add grid lines and a label.
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').clone()
        .attr('x2', width - marginLeft - marginRight)
        .attr('stroke-opacity', 0.2))
      .call(g => g.append('text')
        .attr('x', -marginLeft)
        .attr('y', 10)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start')
        .text('↑ Daily close ($)'));

    // Append a path for the line.
    svg.append('path')
      .datum(parsedData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

  }, [data]);

  return <svg ref={svgRef}></svg>;
}
