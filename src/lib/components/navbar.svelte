<script>
	import logo from '$lib/img/logo.png';
	import { loggedIn } from '../../routes/stores';
	export let supabase
	export let session
	const handleBlur = () => {
		document.querySelector('details')?.removeAttribute('open');
	};
	const signout = () => {
		handleBlur()
		supabase.auth.signOut();
	};

</script>

<div class="navbar bg-background">
	<div class="mx-auto container flex flex-row justify-between">
		<div class="flex flex-row items-center">
			<a class="link" href="/">
				<img class="h-10 mt-1 w-auto" src={logo} alt="Logo" />
			</a>
			<ul class="menu menu-horizontal">
				<li><a href="/about">About</a></li>
				<li><a href="/imprint">Imprint</a></li>
				<li><a href="/date">Change Date</a></li>
			</ul>
		</div>
		<ul class="menu menu-horizontal">
			<li>
				<details class="px-4">
					<summary>
						<svg
							class="w-10 h-auto text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1"
								d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
						</svg>
					</summary>
				<ul class="p-2 bg-background rounded-t-none">
					{#if session}
						<li><a on:click={handleBlur} href="/profile" >Profile</a></li>
						<li><a on:click={signout} href="/" >Sign Out</a></li>
					{:else}
						<li><a on:click={handleBlur} href="/login" >Log In</a></li>
						<li><a on:click={handleBlur } href="/signup" >Sign Up</a></li>
					{/if}
				</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
