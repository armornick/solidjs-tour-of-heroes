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
            <ul class="flex flex-wrap gap-3">
                <For each={heroes}>
                {hero => (
                    <li>
                        <button class="p-2 border rounded border-gray-800 hover:bg-gray-300" 
                            onClick={e => onSelect(hero)}>
                            {hero.name}
                        </button>
                    </li>
                )}
                </For>
            </ul>
            <Show when={selectedHero()}>
                <HeroEditor hero={selectedHero} />
            </Show>
        </div>
    );

}
