import App from './App.svelte';
import './services/i18n';

// src/index.js
import pkg from './package.json';
console.log(`running version ${pkg.version}`);

const app = new App({
	target: document.body,
	props: {
		name: "hello"
	}
});

export default app;