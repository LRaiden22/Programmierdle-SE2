<script>
    import { writable } from 'svelte/store';
    import Resultshow from "./resultshow.svelte";
    import Searchbar from "./searchbar.svelte";
    import { supabase } from "$lib/supabaseclient";

    const resultarray = writable([]);
    let submissionarray = [];

    const checkLang = async (item) => {
        const result = await supabase.functions.invoke('checkLang', {body:{id: item.id}});
        resultarray.update(values => [...values, result]);
        submissionarray.push(item);
        console.log(result, item)
    }
</script>

<Searchbar onSubmission={checkLang}/>
<br> 
{#each $resultarray as result, i}
    <Resultshow {result} submission={submissionarray[i]}/>
    <br>
{/each}