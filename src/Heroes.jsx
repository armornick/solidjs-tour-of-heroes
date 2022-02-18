import { For, Show, createSignal } from "solid-js";
import HeroEditor from "./HeroEditor";

export default function Heroes({ heroes }) {
    
    const [selectedHero, setSelectedHero] = createSignal(null);

    const onSelect = (hero) => {
        // console.log(`set selected hero: ${JSON.stringify(hero)}`);
        setSelectedHero(hero);
    };

    return (
        <div class="p-6 border-y-2 border-gray-400 text-left">
            <h2 class="text-xl my-2 font-bold">
                My Heroes
            </h2>
            <div class="flex gap-4">
                <div class="w-1/2">
                    <HeroList heroes={heroes} onSelect={onSelect} />
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

function HeroList({ heroes, onSelect }) {
    return (
        <ul class="flex flex-col gap-3">
            <For each={heroes}>
            {hero => (
                <li class="w-full text-left rounded bg-gray-300 flex">
                    <span class="py-2 px-4 rounded-l text-white bg-gray-500">
                        {hero.id}
                    </span>
                    <button class="px-6 py-2 text-left grow rounded-r hover:text-white hover:bg-gray-800"
                        onClick={e => onSelect(hero)}>
                        {hero.name}
                    </button>
                </li>
            )}
            </For>
        </ul>
    );
}
