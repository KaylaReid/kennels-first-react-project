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
                            <div className="card-title">
                                <img src={Cat} alt="cat" className="icon--cat" />
                                <h4>{animal.name}</h4>
                                <h4>Type: <br />  {animal.type}</h4>
                                <button onClick={() => this.props.deleteAnimal(animal)
                                .then(() => this.props.history.push('/animals'))}
                                    className="card-link">Release</button>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <Link className="nav-link" to={`/animals/edit/${animal.id}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}