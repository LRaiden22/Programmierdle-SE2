<script>
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let result;
	export let submission;

	const checkCorrectPic = (tocheck) => {
		if (tocheck === false) return 'border-red-700';
		if (tocheck === true) return 'border-green-700';
	};

	const checkCorrect = (tocheck) => {
		if (tocheck === false) return 'bg-red-500 border-red-700 text-white';
		if (tocheck === true) return 'bg-green-500 border-green-700 text-white';
	};

	const checkValue = (value) => {
		if (value === 0) return 'bg-red-500 border-red-700 text-white';
		if (value === 1) return 'bg-yellow-500 border-yellow-700 text-white';
		if (value === 2) return 'bg-green-500 border-green-700 text-white';
	};

	const checkReleaseYear = (value) => {
		if (value === 0) return 'bg-red-500 border-red-700 text-white';
		if (value === 1) return 'bg-green-500 border-green-700 text-white';
		if (value === 2) return 'bg-red-500 border-red-700 text-white';
	};
</script>

{#if submission}
	<div class="flex space-x-4">
		<div
			transition:fade={{ delay: 100, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkCorrectPic(result.data.correct)} flex items-center justify-center`}
		>
			<img
				src={submission.picture}
				alt={submission.name}
				class="w-full h-full object-cover rounded"
			/>
		</div>
		<div
			transition:fade={{ delay: 200, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkCorrect(result.data.correct)} flex items-center justify-center text-lg font-bold text-center overflow-hidden`}
		>
			<p class="text-xs sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
				{submission.name}
			</p>
		</div>
		<div
			transition:fade={{ delay: 300, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkValue(result.data.paradigm)} flex items-center justify-center text-lg font-bold text-center overflow-hidden`}
		>
			<p class="text-xs sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
				{submission.paradigm}
			</p>
		</div>
		<div
			transition:fade={{ delay: 400, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkValue(result.data.platform)} flex items-center justify-center text-lg font-bold text-center overflow-hidden`}
		>
			<p class="text-xs sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
				{submission.platform}
			</p>
		</div>
		<div
			transition:fade={{ delay: 500, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkValue(result.data.typesystem)} flex items-center justify-center text-lg font-bold text-center overflow-hidden`}
		>
			<p class="text-xs sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
				{submission.typesystem}
			</p>
		</div>
		<div
			transition:fade={{ delay: 600, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkValue(result.data.purpose)} flex items-center justify-center text-lg font-bold text-center overflow-hidden`}
		>
			<p class="text-xs sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
				{submission.purpose}
			</p>
		</div>
		<div
			transition:fade={{ delay: 700, duration: 500, easing: cubicOut }}
			class={`w-32 h-32 border-2 rounded ${checkReleaseYear(result.data.releaseyear)} flex items-center justify-center text-lg font-bold text-center overflow-hidden`}
		>
			{#if result.data.releaseyear === 2}
				<svg
					class="w-6 h-6 text-gray-800 dark:text-white"
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
						stroke-width="2"
						d="M12 6v13m0-13 4 4m-4-4-4 4"
					/>
				</svg>
			{:else if result.data.releaseyear === 0}
				<svg
					class="w-6 h-6 text-gray-800 dark:text-white"
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
						stroke-width="2"
						d="M12 19V5m0 14-4-4m4 4 4-4"
					/>
				</svg>
			{/if}
            <p>{submission.releaseyear}</p>
		</div>
	</div>
{/if}
