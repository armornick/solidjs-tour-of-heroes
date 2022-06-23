import { createSignal, lazy } from 'solid-js';
import { Router, Routes, Route } from 'solid-app-router';
import HeroService from '../services/hero-service.js';

const Home = lazy(() => import('./Home.jsx'));
const Heroes = lazy(() => import('./Heroes.jsx'));
const Dashboard = lazy(() => import('./Dashboard.jsx'));
const HeroDetails = lazy(() => import('./HeroDetails.jsx'));

export default function App() {

    const [heroes, setHeroes] = createSignal([]);
    HeroService.getHeroes().then(heroes => setHeroes(heroes));

    return (
        <Router>
            <main class="container mx-auto text-center p-6">
                <nav class="flex items-center justify-around w-full mb-10 border-y-4 border-gray-600">
                    <a class="flex-grow py-3 hover:bg-gray-200" href="/">Home</a>
                    <a class="flex-grow py-3 hover:bg-gray-200" href="/dashboard">Dashboard</a>
                    <a class="flex-grow py-3 hover:bg-gray-200" href="/heroes">Heroes</a>
                </nav>
                <h1 class="text-3xl font-bold my-5">
                    Tour of Heroes
                </h1>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/heroes' element={<Heroes heroes={heroes} />} />
                    <Route path='/dashboard' element={<Dashboard heroes={heroes} />} />
                    <Route path='/detail/:id' element={<HeroDetails />} />
                </Routes>
            </main>
        </Router>
    );

}
