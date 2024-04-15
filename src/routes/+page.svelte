<main class="flex flex-col items-center justify-center h-screen w-full">
        <div>
            <Game/>
        </div>
</main>
<script>
	import Searchbar from '$lib/components/searchbar.svelte';
    import Resultshow from '$lib/components/resultshow.svelte';
	import { langs } from './stores';
	import Game from '$lib/components/game.svelte';
    export let data;
    langs.set (data.programmingLanguages);
</script>