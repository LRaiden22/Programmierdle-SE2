<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="flex flex-col h-screen">
	<Navbar />


	<div class="flex-1 mx-auto container grow">
		<slot></slot>
	</div>
</div>
