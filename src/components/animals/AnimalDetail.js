import React, { Component } from "react"
import "./animals.css"
import cat from "./cat.jpg"
// import {Link} from 'react-router-dom'

export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}

        return (
            <section className="animals">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={cat} alt="cat" className="icon--cat" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.type}</h6>
                        <button className="nav-link"
                            onClick={() => this.props.deleteAnimal(animal)
                            .then(() => this.props.history.push('/animals'))}
                            className="card-link">Release</button>
                    </div>
                </div>
            </section>
        )
    }
}