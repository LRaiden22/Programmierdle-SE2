<main>
    <div class="flex flex-col items-center justify-start h-full pt-16 space-y-4 mb-10">
        <h1 class="text-4xl font-bold">Welcome to Codle! - A programming language guessing game </h1>
        <Iconbar/>
    </div>
    <Game/>
</main>
<script>
    import { langs } from './stores';
    import Game from '$lib/components/game.svelte';
    import Iconbar from '$lib/components/iconbar.svelte';
    export let data;
    langs.set (data.programmingLanguages);
</script>
