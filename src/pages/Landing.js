import React, { Component } from 'react'
import ContentSection from '../components/content/Content'
import LandingBar from '../components/landingBar/LandingBar'

export default class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter:''
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(value){
        this.setState({
            filter:value,
        })
    }

    render() {
        return (
            <div>
                <LandingBar setFilter= {this.handleFilterChange}/>
                <hr/>
                {/* content of pokedex */}
                <ContentSection searchWord = {this.state.filter}/>
            </div>
        )
    }
}
