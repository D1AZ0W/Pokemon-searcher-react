export default function PokemonDetails(props) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-blue-300 bg-white p-6 shadow-lg shadow-blue-200">
      <div className="flex justify-center">
        <img
          className="h-60 w-60"
          src={props.pokemon.sprites.other.dream_world.front_default}
          alt={props.pokemon.name}
        />
      </div>
      <h2 className="mt-4 text-center text-2xl font-bold capitalize text-blue-600">
        {props.pokemon.name}
      </h2>
      <div className="mt-6 space-y-10 text-black">
        <p className="flex justify-between border-b pb-2">
          <span className="font-semibold">Height</span>
          <span>{props.pokemon.height}</span>
        </p>

        <p className="flex justify-between border-b pb-2">
          <span className="font-semibold">Weight</span>
          <span>{props.pokemon.weight}</span>
        </p>

        <p className="flex justify-between border-b pb-2">
          <span className="font-semibold">Speed</span>
          <span>{props.pokemon.stats[5].base_stat}</span>
        </p>
      </div>
    </div>
  );
}
