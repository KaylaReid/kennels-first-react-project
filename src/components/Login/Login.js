import React, { Component } from "react"
import './login.css'
// import Redirect from 'react-router-dom'


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        isChecked: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()
        if(this.state.isChecked === true){
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
            this.props.history.push("/")
        } else {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
            this.props.history.push("/")
        }    
    }
 
    render() {
        return (
            <form onSubmit={this.handleLogin} className="login">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" /><br />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" /><br />
                <label htmlFor="reemberMe">Remeber Me</label>
                <input onClick={() => (this.setState({isChecked: true}))} id="rememberMe" type="checkbox"/><br />
                <button type="submit">Sign in</button>
            </form>
        )
    }
}