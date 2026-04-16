export default function PokemonDetails(props) {
  const color = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#ff0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#efb549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190ff",
  };

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
      <div className="flex items-center justify-center space-x-5 m-15">
        {props.pokemon?.types?.map((element, index) => {
          return (
            <span
              key={element?.type?.name}
              className="px-5 py-2 rounded-4xl font-bold border-2 border-black capitalize"
              style={{
                background: `${color[props.pokemon?.types[index]?.type?.name]}`,
              }}
            >
              {element?.type?.name}
            </span>
          );
        })}
      </div>
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
