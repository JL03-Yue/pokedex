import React, { Component, useState, useEffect } from 'react'

const FetchPoke = () => {

    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        fetchKantoPokemon();
        return () => {

        }
    }, [])

    function fetchPokemonData(pokemon) {
        let url = pokemon.url
        fetch(url)
            .then(response => response.json())
            .then((pokeData) => {
                console.log(pokeData)
                setStatuses(pokeData.forms)
                
            })
    }

    function fetchKantoPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then((allpokemon) => {
                allpokemon.results.forEach((pokemon) => {
                    fetchPokemonData(pokemon);
                })
            })
    }


    return (
        <div>
            {statuses && statuses.map(status => (
               <p> {status.name}</p>

            ))}

        </div>
    )

}

export default FetchPoke;