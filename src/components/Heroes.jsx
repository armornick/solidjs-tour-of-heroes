import { For, Show, createSignal, createMemo } from "solid-js";
import HeroEditor from "./HeroEditor";

export default function Heroes({ heroes }) {
    
    const [selectedHero, setSelectedHero] = createSignal(null);

    const onSelect = (hero) => {
        console.log(`set selected hero: ${JSON.stringify(hero)}`);
        setSelectedHero(hero);
    };

    return (
        <div class="p-4 border-y-2 border-gray-400 text-left">
            <h2 class="text-xl mb-4 font-bold">
                My Heroes
            </h2>
            <div class="flex gap-4">
                <div class="w-1/2">
                    <ul class="flex flex-col gap-3">
                        <For each={heroes()}>
                            {hero => 
                                <HeroItem hero={hero} onSelect={onSelect} selectedHero={selectedHero} />}
                        </For>
                    </ul>
                </div>
                <div class="w-1/2">
                    <Show when={selectedHero()}>
                        <HeroEditor hero={selectedHero} update={setSelectedHero} />
                    </Show>
                </div>
            </div>
        </div>
    );

}

function HeroItem({ hero, onSelect, selectedHero }) {

    const selected = createMemo(() => selectedHero() && selectedHero().id === hero.id)

    return (
        <li class="w-full text-left rounded bg-gray-300 flex">
            <span class="py-2 px-4 rounded-l text-white bg-gray-500">
                {hero.id}
            </span>
            <button class="px-6 py-2 text-left grow rounded-r hover:text-white hover:bg-gray-800"
                classList={{ 'text-white': selected(), 'bg-gray-800': selected() }}
                onClick={e => onSelect(hero)}>
                {hero.name}
            </button>
        </li>
    );
}
