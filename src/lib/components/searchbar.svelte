<script>
    import { supabase } from '$lib/supabaseclient.js';
    import { onMount } from 'svelte';
    let search = '';
    let results = [];
    let selectedId = null;

    const searchDatabase = async () => {
        if (search.trim() !== '') {
            let { data, error } = await supabase
                .from('programmingLanguages')
                .select('*')
                .ilike('name', `%${search}%`);

            if (error) console.log("Error: ", error);
            else results = data;
        } else {
            results = [];
        }
    };

    const selectFirstResult = () => {
        if (results.length > 0) {
            search = results[0].name;
            selectedId = results[0].id;
            results = [];
            sendIdToBackend();
        }
    };

    const sendIdToBackend = async () => {
        
    };

    onMount(() => {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                selectFirstResult();
            }
        });

        return () => {
            window.removeEventListener('keydown', selectFirstResult);
        };
    });

    $: searchDatabase(), search;
</script>

<div class="w-full max-w-xs mx-auto">
    <div class="relative">
        <input type="text" bind:value={search} placeholder="Search..." class="form-input block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 9a2 2 0 100-4 2 2 0 000 4zm8 0a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M10 14a5 5 0 100-10 5 5 0 000 10zm0 1a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
    <ul class="list-reset bg-neutral-900 text-white">
        {#each results as result (result.id)}
            <li class="mb-2">
                <a href="#" on:click|preventDefault={() => { search = result.name; selectedId = result.id; results = []; sendIdToBackend(); }} class="block p-2 rounded-md hover:bg-neutral-900 text-white">{result.name}</a>
            </li>
        {/each}
    </ul>
</div>