<script>

    import { writable } from 'svelte/store';
    import Resultshow from "./resultshow.svelte";
    import Searchbar from "./searchbar.svelte";
    import { supabase } from "$lib/supabaseclient";
	import Propertyheaders from './propertyheaders.svelte';

	let found = false;
	let resultarray = writable([]);
	let submissionarray = writable([]);
	onMount(() => {
        if(localStorage.getItem('dailyLangDate')!==new Date().toDateString()){
            localStorage.setItem('submissionarray', JSON.stringify([]));
            localStorage.setItem('resultarray', JSON.stringify([]));
            localStorage.setItem('found', false)
        }
        found = localStorage.getItem('found')
		const storedSubmissionArray = localStorage.getItem('submissionarray');
		const storedResultArray = localStorage.getItem('resultarray');
		submissionarray = writable(storedSubmissionArray ? JSON.parse(storedSubmissionArray) : []);
		submissionarray.subscribe((value) =>
			localStorage.setItem('submissionarray', JSON.stringify(value))
		);
		resultarray = writable(storedResultArray ? JSON.parse(storedResultArray) : []);
		resultarray.subscribe((value) => {
            localStorage.setItem('resultarray', JSON.stringify(value));
			localStorage.setItem('dailyLangDate', new Date().toDateString());
		});
	});
	let searching = false;
	const checkLang = async (item) => {
		searching = true;
		const result = await supabase.functions.invoke('checkLang', { body: { id: item.id } });
		searching = false;
		resultarray.update((values) => [...values, result]);
		submissionarray.update((values) => [...values, item]);
		found = result.data.correct;
		if (found) {
            localStorage.setItem('found', true);
			const myModal = document.getElementById('my_modal_2');
			myModal.showModal();
		}
	};
</script>

{#if !found}
	<Searchbar onSubmission={checkLang} />
{/if}
<dialog id="my_modal_2" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Congratulations!</h3>
		<p class="py-4">You found the Language of the Day!</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<br />
{#if searching}
	<span class="loading loading-dots loading-lg"></span>
{/if}

{#if $resultarray.length > 0}
    <Propertyheaders/>
{/if}

{#each { length: $resultarray.length } as _, i}
	{@const reverseIndex = $resultarray.length - 1 - i}
	{@const result = $resultarray[reverseIndex]}
	{@const submission = $submissionarray[reverseIndex]}
	<Resultshow {result} {submission} />
	<br />
{/each}
