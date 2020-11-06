import App from './App.svelte';
import './services/i18n';

const app = new App({
	target: document.body,
	props: {
		name: "hello"
	}
});

export default app;