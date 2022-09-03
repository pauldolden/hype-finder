<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<section class="min-h-screen bg-dark">
	<Header />

	<main class="px-10 text-white font-rubik md:max-w-xl mx-auto">
		<slot />
	</main>
</section>
