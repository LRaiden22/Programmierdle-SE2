<script>
    import Howtoplay from './howtoplay.svelte';
    import Updatelog from './updatelog.svelte';
    import Stats from './stats.svelte';

    let showHelp = false;
    const closeHelp = () => {
        showHelp = false;
    }

    let showUpdatelog = false;
    const closeUpdatelog = () => {
        showUpdatelog = false;
    }

    let showStats = false;
    const closeStats = () => {
        showStats = false;
    }


</script>

<ul class="menu bg-base-200 lg:menu-horizontal rounded-box">
    <li>
        <a on:click={() => showHelp = !showHelp}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/> </svg>
            How to play
        </a>
    </li>
    <li>
        <a on:click={() => showUpdatelog = !showUpdatelog}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Updates
        </a>
    </li>
    <li>
        <a on:click={() => showStats = !showStats}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/>
            </svg>          
            Stats
        </a>
    </li>
</ul>

{#if showHelp}
    <Howtoplay closeHelp={closeHelp}/>
{/if}

{#if showUpdatelog}
    <Updatelog closeUpdatelog={closeUpdatelog}/>
{/if}

{#if showStats}
    <Stats closeStats={closeStats}/>
{/if}