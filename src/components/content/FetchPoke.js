import React, { Component, useState, useEffect } from 'react'
import PokeCard from './PokeCard'

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
                setStatuses(statuses => [...statuses,pokeData])
                console.log(statuses)
                
                
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
         
               <PokeCard data = {status} key = {status.id}/>

            ))}

        </div>
    )

}

export default FetchPoke;