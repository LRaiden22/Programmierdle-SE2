<main class="flex flex-col items-center justify-center h-full pt-16">
    <div>
        <Game/>
    </div>
</main>
<script>
    import { langs } from './stores';
    import Game from '$lib/components/game.svelte';
    export let data;
    langs.set (data.programmingLanguages);
</script>