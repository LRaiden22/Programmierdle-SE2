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
        </div>
</main>