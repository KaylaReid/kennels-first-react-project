import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import animalManager from "../dataManager/animalManager"
import employeeManager from "../dataManager/employeeManager"
import ownerManager from "../dataManager/ownerManager"
import locationManager from "../dataManager/locationManager"

    class ApplicationViews extends Component {

    state = 
        {
            locations: [],
            animals: [],
            employees: [],
            owners: []
            //, isLoaded: []
        }

        // deleteAnimal = id => animalManager.deleteAnimal.removeAndList(id)(id)
        //     .then(animals => this.setState({
        //     animals: animals
        //     }))


        deleteAnimal = id => {
            fetch(`http://localhost:5002/animals/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
        }

    componentDidMount() {
        const newState = {}

        animalManager.getAllAnimals().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        employeeManager.getAllEmployees().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        ownerManager.getAllOwners().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
        locationManager.getAllLocations().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
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