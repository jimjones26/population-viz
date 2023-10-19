<script lang="ts">
	export let yScale: any;

	//console.log('ticks: ', xScale.ticks());
</script>

{#each yScale.domain() as tick, i}
	<text style="text-anchor: end;" dy=".32em" x={-3} y={yScale(tick) + yScale.bandwidth() / 2}
		>{tick}</text
	>
{/each}
