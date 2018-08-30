import React, { Component } from "react"
import "./employees.css"

export default class EmployeeForm extends Component {
    state = {
        name: "",
        position: "",
        locationId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = evt => {
        evt.preventDefault()
        if ((this.state.position === "") || (this.state.name === "")) {
            window.alert("Please fill out both fields")
        } else {
            const employee = {
                name: this.state.name,
                position: this.state.position,
                locationId: this.props.locations.find(location => location.name === this.state.locationId).id
            }
            this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="employee-form">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Employee Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="position" placeholder="Position" />
                        <label htmlFor="locationId">Assign employee to a location</label>
                        <select defaultValue="" name="locationId" id="locationId"
                                onChange={this.handleFieldChange}>
                            <option value="">Select a location</option>
                        {
                            this.props.locations.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}