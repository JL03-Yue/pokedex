import React from 'react'
import FetchPoke from './FetchPoke'
import './Content.css'

export default function Content({searchWord}) {
    return (
        <div className = 'content-wrap'>

           <div className = 'pokecard-wrap'>
            <FetchPoke searchFilter = {searchWord}/>
            </div>
        </div>
    )
}
