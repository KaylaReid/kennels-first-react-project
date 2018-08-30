import React, { Component } from "react"
import { Link } from "react-router-dom"
import  Cat from "./cat.jpg"
import "./animals.css"


export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card animal-card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={Cat} alt="cat" className="icon--cat" />
                        <h4>Name: {this.props.animal.name}</h4>
                        <h4>Type: {this.props.animal.type}</h4>
                        <h4>Asigned to:</h4>
                        {
                            this.props.employees.map(employee => {
                                if(employee.id === this.props.animal.employeeId){
                                    return (<h5 key={employee.id}>{employee.name}</h5>)
                                }
                            })
                        }
                        <button onClick={() => this.props.deleteAnimal(this.props.animal)
                            .then(() => this.props.history.push('/animals'))}
                            className="card-link">Release</button>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <Link className="nav-link" to={`/animals/edit/${this.props.animal.id}`}>Edit</Link>
                    </div>
                </div>
            </div>
        )
    }
}