<script lang="ts">
	import type { Movie } from '../interfaces/Movies';

	export let movie: Movie;
</script>

<div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-5">
	<div>
		<h3 class="mb-2 font-bold text-xl">
			{movie.original_title} ({new Date(movie.release_date).getFullYear()})
		</h3>
		<div class="text-xs flex flex-col gap-4">
			<p>{movie.overview}</p>
			<span>TMDB Score: <span class="font-bold">{movie.vote_average}</span></span>
		</div>
	</div>
	<img alt={movie.original_title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
</div>
