
export default function Dashboard({ heroes }) {
    return (
        <div>
            <h2 class="title">
                Top Heroes
            </h2>
            <div class="flex flex-row flex-wrap justify-around items-start">
                <For each={heroes().slice(1, 5)}>
                    {hero =>
                        <a class="bg-green-600 hover:bg-green-800 text-white p-3 rounded-sm text-center w-full sm:w-1/5"
                            href={`/detail/${hero.id}`}>
                            {hero.name}
                        </a>}
                </For>
            </div>
        </div>
    )
}
