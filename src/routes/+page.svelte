<script lang="ts">
	import AxisX from '$lib/components/AxisX.svelte';
	import AxisY from '$lib/components/AxisY.svelte';
	import * as d3 from 'd3';
	import { getContext } from 'svelte';

	const chartData: any = getContext('csvData');

	const width: number = 960;
	const height: number = 500;
	const margin = { top: 20, right: 20, bottom: 20, left: 200 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const yScale = d3
		.scaleBand()
		.domain($chartData.slice(0, 10).map((d: any) => d.Country))
		.range([0, innerHeight]);
	const xScale = d3
		.scaleLinear()
		.domain([0, d3.max($chartData.slice(0, 10), (d: any) => parseFloat(d['2020']))])
		.range([0, innerWidth]);
</script>

<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		<AxisX {xScale} {innerHeight} />
		<AxisY {yScale} />
		{#each $chartData.slice(0, 10) as item}
			<rect
				x={0}
				y={yScale(item.Country)}
				width={xScale(parseFloat(item['2020']))}
				height={yScale.bandwidth()}
			/>
		{/each}
	</g>
</svg>
