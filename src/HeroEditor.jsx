import { createSignal } from 'solid-js';

export default function HeroEditor({ id, name: _name }) {
    
    const [name, setName] = createSignal(_name);

    return (
        <div class="p-6 bg-gray-200 text-left">
            <h2 class="text-xl my-2 font-bold">
                {name().toUpperCase()} Details
            </h2>
            <div class='flex gap-3 items-center'>
                <strong class="font-semibold">Id:</strong>
                <span>{id}</span>
            </div>
            <div class="flex gap-3 items-center">
                <label>Hero Name:</label>
                <input class="rounded p-2" type="text" 
                    value={name()} 
                    onInput={e => setName(e.target.value)} />
            </div>
        </div>
    );

}
