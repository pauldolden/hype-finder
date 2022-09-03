<script lang="ts">
	import type { Movie } from '../interfaces/Movies';
	import MovieCard from './MovieCard.svelte';

	export let results: Movie[];
</script>

<section>
	{#each results as movie}
		<MovieCard {movie} />
	{/each}
</section>
