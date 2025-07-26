import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router";

import "./Pokemon.css";

const Pokemon = () => {
    const { pokemonId } = useParams();
    const navigate = useNavigate();

    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(resp => resp.json())
            .then(data => {
                setPokemonData(data);
                setIsLoading(false);
                setHasError(undefined);
            }).catch((err) => {
                setHasError("An Error Occurred while loading Pokémon");
                setIsLoading(false);
                setPokemonData(null);
            });
    }, [pokemonId]);

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {pokemonData && (
                <div className="pokemon-detail">
                    <h1 className="pokemon-name">Detalle del Pokémon: {pokemonData.name}</h1>
                    <hr className="divider" />
                    <div className="pokemon-container">
                        <div className="pokemon-images">
                            <img src={pokemonData.sprites.front_default} alt="Front" />
                            <img src={pokemonData.sprites.back_default} alt="Back" />
                        </div>
                        <div className="pokemon-stats">
                            <h2 className="stats-title">Estadísticas</h2>
                            <ul className="stats-list">
                                {pokemonData.stats.map(stat => (
                                    <li key={stat.stat.name} className="stat-item">
                                        <span className="stat-name">{stat.stat.name}</span>
                                        <div className="stat-bar">
                                            <div
                                                className="stat-fill"
                                                style={{ width: `${stat.base_stat / 2}%` }}
                                            ></div>
                                        </div>
                                        <span className="stat-value">{stat.base_stat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate("/pokelist")}
                        // onClick={() => window.history.back()}
                        className="back-button"
                    >
                        ← Volver a la lista
                    </button>
                </div>
            )}
            {hasError && <div className="error-message">{hasError}</div>}
        </>
    );
};

export default Pokemon;
