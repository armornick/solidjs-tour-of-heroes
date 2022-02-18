import HeroService from '../services/hero-service.js';
import Heroes from './Heroes.jsx';

export default function App() {

    const heroes = HeroService.getHeroes();

    return (
        <main class="container mx-auto text-center p-6">
            <h1 class="text-3xl font-bold my-5">
                Tour of Heroes
            </h1>
            <Heroes heroes={heroes} />
        </main>
    );

}
