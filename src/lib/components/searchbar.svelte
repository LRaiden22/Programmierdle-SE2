<script>
    import { supabase } from '$lib/supabaseclient.js';
    import { onMount } from 'svelte';
    import { langs } from '../../routes/stores';

    let data = $langs;
    let search = '';
    let selected = null;
    export let onSubmission = () => {};

    // Create a local variable for submitted guesses
    let submittedGuesses = [];

    let filteredData = [];
    $: {
        filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) && !submittedGuesses.includes(item.name));
    }
</script>

<div class="relative">
    <input bind:value={search} type="text" placeholder="Search" class="input input-bordered w-full" />
    {#if search}
        <ul class="mt-2 rounded shadow">
            {#each filteredData as item (item.id)}
                <li on:click={() => { onSubmission(item); submittedGuesses = [...submittedGuesses, item.name]; search = ''; }} class="input input-bordered px-4 py-2 hover:bg-neutral-900 cursor-pointer text-white">{item.name}</li>
            {/each}
        </ul>
    {/if}
</div>