<script lang="ts">
	import AxisX from '$lib/components/AxisX.svelte';
	import AxisY from '$lib/components/AxisY.svelte';
	import Bars from '$lib/components/Bars.svelte';
	import * as d3 from 'd3';
	import { getContext } from 'svelte';

	const chartData: any = getContext('csvData');
	let maxItems: number = 10;

	const width: number = 960;
	const height: number = 500;
	const margin = { top: 20, right: 20, bottom: 20, left: 200 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;
	const yValue = (d: any) => d.Country;
	const xValue = (d: any) => parseFloat(d['2020']);

	const yScale = d3
		.scaleBand()
		.domain($chartData.slice(0, maxItems).map(yValue))
		.range([0, innerHeight])
		.padding(0.1);
	const xScale = d3
		.scaleLinear()
		.domain([0, d3.max($chartData.slice(0, maxItems), xValue)])
		.range([0, innerWidth]);
</script>

<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		<AxisX {xScale} {innerHeight} />
		<AxisY {yScale} />
		<Bars data={$chartData.slice(0, maxItems)} {xScale} {yScale} {yValue} {xValue} />
	</g>
</svg>
