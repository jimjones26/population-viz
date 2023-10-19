<script lang="ts">
	export let innerHeight: number;
	export let xScale: any;

	//console.log('ticks: ', xScale.ticks());
</script>

{#each xScale.ticks() as tick}
	<g transform={`translate(${xScale(tick)}, 0)`}>
		<line x1={0} y1={0} x2={0} y2={innerHeight} stroke="black" />
		<text y={innerHeight + 3} style="text-anchor: middle;" dy={'.71em'}>{tick}</text>
	</g>
{/each}
