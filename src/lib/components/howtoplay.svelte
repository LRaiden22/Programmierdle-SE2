<script>
    import example1 from '$lib/img/example1.png';
    import example2 from '$lib/img/example2.png';
    import { onMount } from 'svelte';
    export let close;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    onMount(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            const diff = tomorrow - now;
            hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((diff / 1000 / 60) % 60);
            seconds = Math.floor((diff / 1000) % 60);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>


<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-base-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="card card-side bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How to play Codle?</h2>
                    <p>Guess today's programming language. It changes every 24h.</p>
                    <br>
                    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                          <span class="countdown font-mono text-5xl">
                            <span style="--value:{hours};">{hours}</span>
                          </span>
                          hours
                        </div> 
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                          <span class="countdown font-mono text-5xl">
                            <span style="--value:{minutes};">{minutes}</span>
                          </span>
                          min
                        </div> 
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                          <span class="countdown font-mono text-5xl">
                            <span style="--value:{seconds};">{seconds}</span>
                          </span>
                          sec
                        </div>
                      </div>
                      <p>Time zone: Europe (Midnight at UTC+2)</p>
                      <br>
                      <p>To play the game simply type in the name of a programming language and it will reveal its properties.
                        The color of the tiles will change to show how close your guess was to the champion to find:</p>
                        <span><span class="text-green-500">Green</span> indicates the property is an exact match.</span>
                        <span><span class="text-yellow-500">Yellow</span> indicates partial match.</span>
                        <span><span class="text-red-500">Red</span> indicates no overlap between your guess and the property.</span>
                        <p>⬇️ ⬆️ With arrows, it also indicates if the answer property is above or below your guess.</p>
                        <br>
                        <h2 class="card-title">Properties</h2>
                        <p>Here is the details of each of the properties columns:</p>
                        <br>
                        <div class="content-section">
                            <p><span class="text-cyan-500 text-bold">Platform: </span>the hardware and software environment in which programs are executed.</p>
                            <p><span class="text-cyan-500 text-bold">Typesystem: </span>the mechanism that defines the data types that can be used and the rules for using and manipulating those types.</p>
                            <p><span class="text-cyan-500 text-bold">Purpose: </span>the purpose the programming language is commonly used for.</p>
                            <p><span class="text-cyan-500 text-bold">Release year: </span>the year the programming language was first released.</p>
                        </div>
                        <br>
                        <div class="content-section">
                            <h2 class="card-title">Example</h2>
                            <span>Consider the correct answer is <span class="text-cyan-500 font-bold">JavaScript</span><span class="text-neutral-300">.</span>
                            <span>If you enter <span class="text-cyan-500 font-bold">C#</span><span class="text-neutral-300">, these properties will appear:</span>
                        </div>
                        <br>
                        <div class="content-section">
                            <figure class="object-fit">
                                <img src={example1} alt="Example" class="w-full h-full object-cover rounded" />
                            </figure>
                        </div>
                        <br>
                        <div class="content-section">
                            <p><span class="text-red-500 text-bold">Paradigm: </span>is not a match since JavaScript is multi paradigm.</p>
                            <p><span class="text-green-500 text-bold">Platform: </span>is an exact match, as they are both cross platform.</p>
                            <p><span class="text-red-500 text-bold">Typesystem: </span>is not a match since JavaScript is dynamic.</p>
                            <p><span class="text-red-500 text-bold">Purpose: </span>is not a match since JavaScript is for scripting and web development.</p>
                            <p><span class="text-red-500 text-bold">Release year: </span>is not a match since JavaScript got, as the down arrow indicates, released before 2000.</p>
                        </div>
                        <br>
                        <div class="content-section">
                            <p>If you entered <span class="text-cyan-500 font-bold">JavaScript</span>, here is what would come up:</p>
                        </div>
                        <br>
                        <div class="content-section">
                            <figure class="object-fit">
                                <img src={example2} alt="Example" class="w-full h-full object-cover rounded" />
                            </figure>
                        </div>
                        <br>
                        <div class="card-actions justify-end">
                            <button class="btn btn-secondary" on:click={close()}>Close</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>