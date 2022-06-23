import { Show, createResource, createSignal } from 'solid-js';
import { useParams } from "solid-app-router";
import heroService from "../services/hero-service";

export default function HeroDetails() {

    const params = useParams();
    const [hero, setHero] = createSignal(null);

    // we set the hero inside the createResource fetcher
    // this is a dirty hack, but createResource always returns undefined, no matter what I try
    //
    // NOTE: it still doesn't work, though!!!
    const resource = createResource(() => params.id, 
        async (id) => { const hero = await heroService.getHeroById(id); console.log(hero); setHero(hero); return hero });

    return (
        <div class="p-3 text-left px-20">
            <Show key={hero()} 
                fallback={<p>Hero with id {params.id} could not be read</p>}>
                <h2 class="title">
                    {hero().name.toUpperCase()} Details
                </h2>
                <div class='flex gap-3 items-center'>
                    <strong class="font-semibold">Id:</strong>
                    <span>{hero().id}</span>
                </div>
                <div class="flex gap-3 items-center">
                    <label class="font-semibold">Hero Name:</label>
                    <input class="rounded border border-gray-400 p-2" type="text" 
                        value={hero().name} />
                </div>
            </Show>
        </div>
    );

}
