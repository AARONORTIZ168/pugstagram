import App from './containers/App.svelte';

//empujar app dentro del html
const app = new App({
    target: document.querySelector('main')
});

export default app;