<script lang="ts">
	import { movies } from '../stores/writable';
	import Search from '../components/Search.svelte';
	import Results from '../components/Results.svelte';
	let value = '';
</script>

<div class="flex flex-col gap-5">
	<Search bind:value />
	<Results results={$movies} />
</div>
