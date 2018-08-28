import React, { Component } from "react"
import "./employees.css"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: "",
        position: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating employee object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee = evt => {
        evt.preventDefault()
        if ((this.state.position === "") || (this.state.name === "")) {
            window.alert("Please fill out both fields")
        } else {
            const employee = {
                name: this.state.employeeName,
                position: this.state.position
            }

            // Create the employee and redirect user to employee list
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
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}