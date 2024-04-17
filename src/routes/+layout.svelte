<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import {goto, invalidate} from '$app/navigation';
	import publicRoutes from '$lib/data/publicRoutes.json';

	export let data
	let {supabase, session} = data
	$: ({supabase, session} = data)
	onMount(()=>{
		const{
			data: {subscription}} = supabase.auth.onAuthStateChange((event, _session)=>{
				if(_session?.expires_at !== session?.expires_at){
					invalidate('supabase:auth')
				}
		})
		return () => subscription.unsubscribe()
	})
</script>

<div class="flex flex-col h-screen">
	<Navbar {session} {supabase} />
	<div class="flex-1 mx-auto container grow">
		<slot></slot>
	</div>
</div>
