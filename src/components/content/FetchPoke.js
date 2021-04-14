import React, { Component, useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    paginator: {
        justifyContent: "center",
        padding: "20px"
      }
}));

const FetchPoke = ({searchFilter}) => {

    const [statuses, setStatuses] = useState([]);
    const [filter, setFilter] = useState('')

    const classes = useStyles();
    const itemsPerPage = 15;
    const [page, setPage] = useState(1);
    const [noOfPages] = useState(
        Math.ceil(100 / itemsPerPage)
    );


    const handleSearchChange = (e) =>{
        setFilter(e.target.value);
        

    }

    function handleChange(event, value) {
        setPage(value);
    };

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
                setStatuses(statuses => [...statuses, pokeData])
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
            { statuses && statuses
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map(status => (
                status.forms[0].name.includes(searchFilter) &&
                <PokeCard data={status} key={status.id} />
            ))}

            <Pagination
                count={noOfPages}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color="secondary"
                size="large"
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
            />




        </div>
    )

}

export default FetchPoke;