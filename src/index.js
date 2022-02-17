import { render } from 'solid-js/web';

const App = () => (
    <main class="container mx-auto text-center p-6">
        <h1 class="text-2xl font-bold">Tour of Heroes</h1>
    </main>
);

render(
    () => <App />, 
    document.getElementById('app')
);
