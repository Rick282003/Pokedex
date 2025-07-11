import { useState } from "react";
import usePokemonFetch from "./usePokemonFetch";

const PokeList = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const {
        pokemonJsonObject,
        isLoading,
        hasError,
        error
    } = usePokemonFetch(
        offset,
        limit
    );

    return (
        <div className="poke-list">
            <h2>Pokémon List</h2>
            {!isLoading && !hasError && (
                <>
                    <pre>
                        {JSON.stringify(pokemonJsonObject, null, 2)}
                    </pre>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOffset(offset + 20);
                        }}
                    >
                        Next
                    </button>
                </>
            )}
            {hasError && (
                <strong>Algo malo pasó, y no se puede cargar, sorry</strong>
            )}
        </div>
    )
}

export default PokeList;