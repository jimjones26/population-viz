<script lang="ts">
	export let data: any;
	export let xScale: any;
	export let yScale: any;
</script>

{#each data as item, i}
	<rect
		x={0}
		y={yScale(item.Country)}
		width={xScale(parseFloat(item['2020']))}
		height={yScale.bandwidth()}
	/>
{/each}
