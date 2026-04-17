import "./App.css";
import { PokemonDetails } from "./components/PokemonDetails";
import { useState, useEffect } from "react";

function App() {
  const [pokeName, setpokeName] = useState("");
  const [query, setQuery] = useState("");
  const [pokeInfo, setpokeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const fetchPokemon = () => {
    if (!pokeName) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        if (res.status === 404) {
          setpokeInfo(null);
          throw new Error("No Pokemon Found");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setpokeInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    setError("");
    if (!pokeName) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchPokemon();
  }, [pokeName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim().toLowerCase();
    setpokeName(trimmedQuery);
  };

  const handleClear = () => {
    setQuery("");
    setpokeName("");
    setpokeInfo(null);
    setError("");
    setLoading(false);
  };
  const backcolor = color[pokeInfo?.types[0]?.type?.name];
  //console.log(backcolor);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-amber-500 font-sans font-extrabold m-10">
        Welcome to pokemon finder:
      </h1>
      <div
        className="mx-auto w-full text-black bg-amber-100 max-w-4xl rounded-2xl border border-blue-500 p-6 shadow-xl sm:p-8"
        style={{ backgroundColor: backcolor }}
      >
        <form className="mt-6 grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
          <label
            htmlFor="pokemonName"
            className="text-2xl font-serif font-semibold"
          >
            Enter name of pokemon:
          </label>
          <input
            id="pokemonName"
            type="text"
            className="p-10 my-10 text-black w-full border border-blue-300 bg-teal-100 rounded-4xl"
            placeholder="Enter the name of pokemon to search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-5">
            <button
              type="submit"
              className="rounded-lg bg-green-600 p-4 text-sm font-semibold text-white hover:bg-green-800"
            >
              Search
            </button>
            <button
              type="button"
              className="rounded-lg bg-red-600 p-4 text-sm font-semibold text-white hover:bg-red-800"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
        <div className="my-15 flex flex-col gap-10 justify-center items-center">
          <h1 className="text-2xl font-bold font-serif flex h-20 w-80 bg-purple-400 p-10 justify-center items-center rounded-3xl border-4 border-blue-700">
            Pokemon Details:
          </h1>
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error occured: {error}</h1>
          ) : pokeInfo ? (
            <PokemonDetails pokemon={pokeInfo} />
          ) : (
            <p className="text-lg text-slate-800">
              Search for a Pokemon by name.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
