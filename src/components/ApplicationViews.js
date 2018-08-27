import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import APIManager from "../dataManager/APIManager"

    class ApplicationViews extends Component {

    state = 
        {
            locations: [],
            animals: [],
            employees: [],
            owners: []
            //, isLoaded: []
        }

        deleteAnimal = (animal) => {APIManager.removeAndListData("animals", animal.id)
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
        }
        deleteEmployee = (employee) => {APIManager.removeAndListData("employees", employee.id)
            .then(employees => {
                this.setState({
                    employees: employees
                })
            });
        }
        deleteOwner = (owner) => {APIManager.removeAndListData("owners", owner.id)
            .then(owners => {
                this.setState({
                    owners: owners
                })
            });
        }
        deleteLocation = (location) => {APIManager.removeAndListData("locations", location.id)
            .then(locations => {
                this.setState({
                    locations: locations
                })
            });
        }


        componentDidMount() {
            const newState = {}

            APIManager.getAllData("animals")
            .then(allAnimals => {
                this.setState({
                    animals: allAnimals
                })
            })
            APIManager.getAllData("employees")
            .then(allEmployees => {
                this.setState({
                    employees: allEmployees
                })
            })
            APIManager.getAllData("owners")
            .then(allOwners => {
                this.setState({
                    owners: allOwners
                })
            })
            APIManager.getAllData("locations")
            .then(allLocations => {
                this.setState({
                    locations: allLocations
                })
            })
            .then(() => this.setState(newState))
        }



        // Old delete option
        // deleteAnimal = id => {
        //     fetch(`http://localhost:5002/animals/${id}`, {
        //         method: "DELETE"
        //     })
        //     .then(e => e.json())
        //     .then(() => fetch(`http://localhost:5002/animals`))
        //     .then(e => e.json())
        //     .then(animals => this.setState({
        //         animals: animals
        //     }))
        // }
        
        // Old componentDidMount fetch calls 
    // componentDidMount() {
    //     const newState = {}

    //     animalManager.getAllAnimals()
    //     .then(allAnimals => {
    //         this.setState({
    //             animals: allAnimals
    //         })
    //     })
    //     employeeManager.getAllEmployees()
    //     .then(allEmployees => {
    //         this.setState({
    //             employees: allEmployees
    //         })
    //     })
    //     ownerManager.getAllOwners()
    //     .then(allOwners => {
    //         this.setState({
    //             owners: allOwners
    //         })
    //     })
    //     locationManager.getAllLocations()
    //     .then(allLocations => {
    //         this.setState({
    //             locations: allLocations
    //         })
    //     })
    //     .then(() => this.setState(newState))
    // }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList deleteLocation={this.deleteLocation} locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals}/>
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/employee/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees}/>
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
export default ApplicationViews