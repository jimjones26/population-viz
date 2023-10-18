<script lang="ts">
	import * as d3 from 'd3';
	import { getContext } from 'svelte';

	const chartData: any = getContext('csvData');

	const width: number = 960;
	const height: number = 500;
	const yScale = d3
		.scaleBand()
		.domain($chartData.slice(0, 10).map((d: any) => d.Country))
		.range([0, height]);
	const xScale = d3
		.scaleLinear()
		.domain([0, d3.max($chartData.slice(0, 10), (d: any) => parseFloat(d['2020']))])
		.range([0, width]);

	$: console.log(parseFloat($chartData[0]['2020']));
</script>

<svg {width} {height}>
	{#each $chartData.slice(0, 10) as item}
		<rect
			x={0}
			y={yScale(item.Country)}
			width={xScale(parseFloat(item['2020']))}
			height={yScale.bandwidth()}
		/>
	{/each}
</svg>
