
export default function HeroEditor({ hero, update }) {

    return (
        <div class="p-3 text-left">
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
                    value={hero().name} 
                    onInput={e => update({ id: hero().id, name: e.target.value })} />
            </div>
        </div>
    );

}
