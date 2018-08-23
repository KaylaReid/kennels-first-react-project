import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'


    class ApplicationViews extends Component {
    // This will eventually get pulled from the API

    employeesFromAPI = [
        { id: 1, name: "Kayla Reid" },
        { id: 2, name: "Helen Chalmers" },
        { id: 3, name: "Madi Peper" },
        { id: 4, name: "Meg Ducharme" }
    ]
    
    locationsFromAPI = [
        { id: 1, name: "North Nashville", address: "500 Circle Way", city: "Nashville, TN 37211"  },
        { id: 2, name: "South Nashville", address: "10101 Binary Court", city: "Nashville, TN 37215" },
        { id: 3, name: "Nashville West", address: "2053 Happy Way", city: "Nashville, TN 37209"  },
        { id: 4, name: "East Nashville", address: "23 Dope Lane", city: "Nashville, TN 37207"  },
    ]

    animalsFromAPI = [
        { id: 1, name: "Knox", type: "Dog"},
        { id: 2, name: "Lumos", type: "Cat"},
        { id: 3, name: "Stryder", type: "Cat"},
        { id: 4, name: "Bella", type: "Dog"},
    ]

    ownersFromAPI = [
        { id: 1, name: "Sam Pope", phoneNumber: "615-370-5567"},
        { id: 2, name: "Emma Watson", phoneNumber: "615-786-3428" },
        { id: 3, name: "Harry Potter", phoneNumber: "615-948-6276" },
        { id: 4, name: "Eleven", phoneNumber: "615-424-9387" }
    ]

    

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
export default ApplicationViews