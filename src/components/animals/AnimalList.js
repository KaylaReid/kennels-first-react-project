import React, { Component } from 'react';
import './animals.css'
import AnimalCard from './AnimalCard'
// import  Cat from "./cat.jpg"
// import {Link} from 'react-router-dom'

export default class AnimalList extends Component {
    render () {
        // JavaScript stuff can be writen here!
        return (
            <React.Fragment>
                <h2 className="header">Animals</h2>
                <div className="animalButton">
                    <button type="button" className="btn btn-success"
                    onClick={() => {this.props.history.push("/animals/new")}}>Admit Animal</button>
                </div>
                <section className="animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} employees={this.props.employees} animal={animal} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}