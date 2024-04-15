<main class="flex flex-col items-center justify-center h-screen w-full">
        <div>
                <div>
                    {#each data.programmingLanguages as pl}
                            <div class="flex flex-row space-x-4">
                                <img src={pl.picture} class="h-20 w-20 object-contain"/>
                                <div class="text-white">{pl.name}</div>
                                <div class="text-white">{pl.paradigm}</div>
                                <div class="text-white">{pl.typesystem}</div>
                                <div class="text-white">{pl.platform}</div>
                            </div>
                    {/each}
                </div>
        </div>
        <Searchbar/>
</main>
<script>
	import Searchbar from '$lib/components/searchbar.svelte';

    export let data
</script>