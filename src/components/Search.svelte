<script lang="ts">
	import type { Keyword } from '../interfaces/Keywords';
	import { fetchAllPages } from '../api/fetchAllPages';
	import { fetchKeywords, type FetchKeywordsOptions } from '../api/tmdb';

	export let value: string;

	function handleClick() {
		if (!value) return;

		const options = {
			params: {
				keyword: value
			},
			cursor: 1
		};

		// @ts-ignore
		fetchAllPages<Keyword, FetchKeywordsOptions>(fetchKeywords, options);
	}
</script>

<form class="flex flex-col gap-3">
	<h2 class="font-thin">It starts with a vibe...</h2>
	<div class="flex flex-col bg-transparent ring-1 ring-logo focus-within:ring-2 p-2 rounded-lg">
		<label class="text-xs mb-1" for="search">What are you feeling?</label>
		<input class="bg-transparent outline-none" id="search" bind:value />
	</div>
	<button
		on:click|preventDefault={handleClick}
		type="button"
		class="bg-logo text-dark p-3 rounded-lg">Hype me up, Jack!</button
	>
</form>
