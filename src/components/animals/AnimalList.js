import React, { Component } from 'react';
import './animals.css'
import  Cat from "./cat.jpg"
import {Link} from 'react-router-dom'

export default class AnimalList extends Component {
    render () {
        // JavaScript stuff can be writen here!
        return (
            <React.Fragment>
            <div className="animalButton">
                <button type="button" className="btn btn-success"
                onClick={() => {this.props.history.push("/animals/new")}}>Admit Animal</button>
            </div>
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={Cat} alt="cat" className="icon--cat" />
                                {animal.type}<br />
                                {animal.name}
                                <button onClick={() => this.props.deleteAnimal(animal)}
                                    className="card-link">Release</button>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}