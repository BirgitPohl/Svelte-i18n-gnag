<script lang="ts">
	import { waitLocale, t, isLoading } from 'svelte-i18n'
  	export async function preload() {
		return waitLocale('en');
	  }
</script>

{#if $isLoading}
  Please wait...
{:else}
	<main>
		<h1>Hello i18n!</h1>
		{$t('website_under_construction')}
	</main>
{/if}

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>