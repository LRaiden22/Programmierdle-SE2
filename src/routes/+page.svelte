<main class="flex flex-col items-center justify-center h-screen w-full">
        <div>
                <div class="flex justify-center space-x-0">
                    {#each Array(7).fill() as _, i}
                        <div class="flex flex-col items-center">
                            <label for={`box${i}`} class="mb-2">Überschrift {i+1}</label>
                            <div id={`box${i}`} class={`w-24 h-24 border border-black ${['bg-success', 'bg-warning', 'bg-error'][i % 3]}`}/>
                        </div>
                    {/each}
                </div>
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
</main>
<script>
    export let data
</script>