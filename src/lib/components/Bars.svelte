<script lang="ts">
	export let data: any;
	export let xScale: any;
	export let yScale: any;
	export let xValue: any;
	export let yValue: any;
	export let toolTipFormat: any;
</script>

{#each data as item, i}
	<rect
		x={0}
		y={yScale(yValue(item))}
		width={xScale(xValue(item))}
		height={yScale.bandwidth()}
		fill="#137B80"
	>
		<title>{toolTipFormat(xValue(item) * 1000)}</title>
	</rect>
{/each}
