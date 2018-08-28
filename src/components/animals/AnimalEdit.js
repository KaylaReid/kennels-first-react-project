import React, { Component } from "react"
import "./animals.css"

export default class AnimalEdit extends Component {
    // Set initial state
    state = {
        name: "",
        type: "",
        employeeId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    // constructNewAnimal = evt => {
    //     evt.preventDefault()
    //     if (this.state.employee === "") {
    //         window.alert("Please select a caretaker")
    //     } else {
    //         const animal = {
    //             name: this.state.animalName,
    //             type: this.state.type,
    //             employeeId: this.props.employees.find(e => e.name === this.state.employee).id
    //         }

    //         // Create the animal and redirect user to animal list
    //         this.props.addAnimal(animal).then(() => this.props.history.push("/animals"))
    //     }
    // }
     edit = () => {this.props.editAnimal(parseInt(this.props.match.params.animalId), 
        {
            name: this.state.name,
            type: this.state.type,
            employeeId: this.state.employeeId
        })
        .then(() => this.props.history.push('/animals'))
    }

    render() {
        console.log(this.props.animals) 
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={animal.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type" 
                               defaultValue={animal.type}
                               placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={animal.employeeId} name="employee" id="employeeId"
                                onChange={this.handleFieldChange}>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.edit} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}