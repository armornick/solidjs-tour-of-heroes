import { createSignal, lazy } from 'solid-js';
import { Router, Routes, Route } from 'solid-app-router';
import HeroService from '../services/hero-service.js';

const Home = lazy(() => import('./Home.jsx'));
const Heroes = lazy(() => import('./Heroes.jsx'));

export default function App() {

    const [heroes, setHeroes] = createSignal([]);
    HeroService.getHeroes().then(heroes => setHeroes(heroes));

    return (
        <Router>
        <main class="container mx-auto text-center p-6">
            <h1 class="text-3xl font-bold my-5">
                Tour of Heroes
            </h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/heroes' element={<Heroes heroes={heroes} />} />
            </Routes>
        </main>
        </Router>
    );

}
