import { useState, useEffect } from "react";
const usePokemonFetch = (
    offset = 0,
    limit = 10
)=>{
    const [pokemonJsonObject, setPokemonJsonObject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(false);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true);
            return;
        }
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            .then((resp => resp.json()))
            .then(data => {
                console.log("Returned: ", data);
                setIsLoading(false);
                setHasError(false);
                setError(null);
                setPokemonJsonObject(data);
            })
            .catch(err => { 
                console.error(err);
                setIsLoading(false);
                setHasError(true);
                setError(err);
            });
    }, [isMounted, setIsMounted, setIsLoading, setHasError, setHasError, setPokemonJsonObject, offset, limit])
    
    return {
        pokemonJsonObject,
        isLoading,
        hasError,
        error
    }
}

export default usePokemonFetch;