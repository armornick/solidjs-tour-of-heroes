import { render } from 'solid-js/web';
import HeroEditor from './HeroEditor.jsx';

const hero = {
    id: 1,
    name: "Windstorm",
};

const App = () => (
    <main class="container mx-auto text-center p-6">
        <h1 class="text-2xl font-bold my-3">Tour of Heroes</h1>
        <HeroEditor {...hero} />
    </main>
);

render(
    () => <App />, 
    document.getElementById('app')
);
