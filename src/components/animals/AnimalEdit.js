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

     edit = (event) => {
         event.preventDefault()
         let employeeId = this.state.employeeId
        if(typeof (this.state.employeeId) != 'number'){
            employeeId = this.props.employees.find(e => this.state.employeeId === e.name).id
        }
        const newAnimal = {
            name: this.state.name,
            type: this.state.type,
            employeeId: employeeId
        }
        this.props.editAnimal(this.props.match.params.animalId, newAnimal)
        .then(() => this.props.history.push("/animals"))

    }
    
    componentDidMount () {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        this.setState({
            name: animal.name,
            type: animal.type,
            employeeId: animal.employeeId
        })

    }

    render() {
    
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type" 
                               defaultValue={this.state.type}
                               placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={this.state.employeeId} name="employee" id="employeeId"
                                onChange={this.handleFieldChange}>
                        {
                            this.props.employees.map(e => <option key={e.id} id="employeeId">{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.edit} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}