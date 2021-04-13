import React from 'react'
import FetchPoke from './FetchPoke'
import './Content.css'

export default function Content() {
    return (
        <div className = 'content-wrap'>

           <div className = 'pokecard-wrap'>
            <FetchPoke/>
            </div>
        </div>
    )
}
