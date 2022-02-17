import { createSignal } from 'solid-js';
import { HEROES } from './mock-heroes.js';
import Heroes from './Heroes.jsx';

export default function App() {

    const heroes = HEROES;

    return (
        <main class="container mx-auto text-center p-6">
            <h1 class="text-3xl font-bold my-5">
                Tour of Heroes
            </h1>
            <Heroes heroes={heroes} />
        </main>
    );

}
