import { createSignal } from 'solid-js';
import HeroService from '../services/hero-service.js';
import Heroes from './Heroes.jsx';

export default function App() {

    const [heroes, setHeroes] = createSignal([]);
    HeroService.getHeroes().then(heroes => setHeroes(heroes));

    return (
        <main class="container mx-auto text-center p-6">
            <h1 class="text-3xl font-bold my-5">
                Tour of Heroes
            </h1>
            <Heroes heroes={heroes} />
        </main>
    );

}
