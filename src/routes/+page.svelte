<main class="flex flex-col items-center justify-center h-full w-full">
        <div>
                <Searchbar/>
                <button on:click={test} class="btn btn-ghost text-xl">Test API</button>
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
    const test =async () => {
        let response = await supabase.functions.invoke('checkLang',{body:{id:7}})
        console.log(response)
    }
	import Searchbar from '$lib/components/searchbar.svelte';
	import { supabase } from '$lib/supabaseclient';
	import { langs } from './stores';
    export let data
    langs.set(data.programmingLanguages)
</script>