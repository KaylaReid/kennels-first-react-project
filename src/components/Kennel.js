import React, { Component } from "react"

import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"
import './kennel.css'
import Login from "./Login/Login"
import { Route } from 'react-router-dom'



class Kennel extends Component {
    
    isAuthenticated = () => ((sessionStorage.getItem("credentials") !== null) || (localStorage.getItem("credentials") !== null))
    
    render() {


        return (
            <React.Fragment>
                {
                    !this.isAuthenticated() && 
                    <Route exact path="/login" render={(props) => {
                        return <Login {...props} />
                    }} />
                }
                {
                    <ApplicationViews isAuthenticated={this.isAuthenticated} />
                }
            </React.Fragment>
        )
    }
}

export default Kennel