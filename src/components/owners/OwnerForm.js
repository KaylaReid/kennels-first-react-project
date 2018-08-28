import React, { Component } from "react"
import "./owners.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        name: "",
        phoneNumber: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating owner object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
        if ((this.state.phoneNumber === "") || (this.state.name === "")) {
            window.alert("Please fill out both fields")
        } else {
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.phoneNumber
            }

            // Create the employee and redirect user to employee list
            this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="owner-form">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="New Onwers Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phoneNumber" placeholder="000-000-0000" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}