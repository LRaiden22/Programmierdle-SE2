<script>
	import { supabase } from '$lib/supabaseclient';

	const logInWithGithub = async () => {
		let { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: 'https://www.codle.de/auth/callback'
			}
		});
		if (error) console.log(error);
		else console.log(data);
	};
	export let form
</script>
{#if form?.error}
	<div class="alert alert-error">{form?.error}</div>
{/if}
<div class="h-full flex items-center justify-center w-full">
	<div class="h-4/5 grow flex items-center justify-center w-full">
		<div
			class="flex md:flex-row flex-col justify-center items-center h-full w-3/4 bg-secondary gap-5 p-10 rounded-lg"
		>
			<div
				class="flex flex-col bg-background text-text p-10 h-full md:w-1/3 w-full rounded-md justify-start"
			>
				<div>
					<h1 class="text-6xl">Log In</h1>
					<p class="mt-10">You can Log In here if you already have an account!</p>
				</div>
				<p class=""></p>
			</div>
			<div class="flex flex-col bg-background p-10 rounded-md md:w-2/3 w-full gap-2">
				<form action="?/login" method="POST" class="flex flex-col w-full gap-2">
					<label class="input input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4 opacity-70"
							><path
								d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
							/><path
								d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
							/></svg
						>
						<input type="email" name="email" class="grow" placeholder="Email" />
					</label>
					<label class="input input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4 opacity-70"
							><path
								fill-rule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clip-rule="evenodd"
							/></svg
						>
						<input type="password" name="password" class="grow" placeholder="●●●●●●●●●●" />
					</label>
					<div class="flex justify-between">
						<p class="text-sm text-neutral-400">
							Dont have an Account yet? <a class="link hover:text-text text-primary" href="/signup"
								>Sign Up!</a
							>
						</p>
					</div>
					<button class="btn btn-primary mt-20">Log in</button>
				</form>
				<div class="divider">OR</div>
				<button on:click={logInWithGithub} class="btn">
					Sign in With Github
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
				</button>
			</div>


		</div>
	</div>
</div>
