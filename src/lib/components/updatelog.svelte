<script>
    export let closeUpdatelog;
</script>

<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-base-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="card card-side bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="join join-vertical w-full">
                        <div class="collapse collapse-arrow join-item border border-base-300">
                          <input type="radio" name="my-accordion-4" /> 
                          <div class="collapse-title text-xl font-medium">
                            Future Updates
                          </div>
                          <div class="collapse-content"> 
                            <p>Stay tuned for more exciting updates to come...</p>
                          </div>
                        </div>
                        <div class="collapse collapse-arrow join-item border border-base-300">
                          <input type="radio" name="my-accordion-4" checked="checked" /> 
                          <div class="collapse-title text-xl font-medium">
                            04/18/2024 - Site Launch
                          </div>
                          <div class="collapse-content"> 
                            <p>The Site was launched.</p>
                          </div>
                        </div>
                      </div>
                    <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-end">
                        <br>
                        <div class="card-actions">
                            <button class="btn btn-secondary" on:click={closeUpdatelog()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>