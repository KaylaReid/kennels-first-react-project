import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import AnimalDetail from './animals/AnimalDetail'
import AnimalForm from './animals/AnimalForm'
import AnimalEdit from './animals/AnimalEdit'
import OwnerDetail from './owners/OwnerDetail'
import OwnerForm from './owners/OwnerForm'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import APIManager from "../dataManager/APIManager"
import NavBar from "./nav/NavBar"


    class ApplicationViews extends Component {

    state = 
        {
            locations: [],
            animals: [],
            employees: [],
            owners: [],
            login: true
        }

        deleteAnimal = (animal) => APIManager.removeAndListData("animals", animal.id)
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
        
        deleteEmployee = (employee) => APIManager.removeAndListData("employees", employee.id)
            .then(employees => {
                this.setState({
                    employees: employees
                })
            });
        
        deleteOwner = (owner) => APIManager.removeAndListData("owners", owner.id)
            .then(owners => {
                this.setState({
                    owners: owners
                })
            });
        
        deleteLocation = (location) => APIManager.removeAndListData("locations", location.id)
            .then(locations => {
                this.setState({
                    locations: locations
                })
            });
        

        editAnimal = (animalId, animalObject) => {
            return APIManager.edit("animals", animalId, animalObject)
            .then(animals => {

                this.setState({
                    animals: animals
                })
            });
        }

        addAnimal = animal => APIManager.post(animal, "animals")
            .then(() => APIManager.getAllData("animals"))
            .then(animals => this.setState({
            animals: animals
             }))

        addEmployee = employee => APIManager.post(employee, "employees")
            .then(() => APIManager.getAllData("employees"))
            .then(employees => this.setState({
                employees: employees
             }))

        addOwner = owner => APIManager.post(owner, "owners")
            .then(() => APIManager.getAllData("owners"))
            .then(owners => this.setState({
                owners: owners
             }))

        handleLogout = () => {
            sessionStorage.removeItem("credentials");
            localStorage.removeItem("credentials")
            this.setState({login: false})
        }


        componentDidMount() {
            const newState = {}

            APIManager.getAllData("animals")
            .then(allAnimals => {
                newState.animals = allAnimals
            })
            APIManager.getAllData("employees")
            .then(allEmployees => {
                newState.employees = allEmployees
            })
            APIManager.getAllData("owners")
            .then(allOwners => {
                newState.owners = allOwners
                    
                
            })
            APIManager.getAllData("locations")
            .then(allLocations => {
                newState.locations = allLocations
               
            })
            .then(() => this.setState(newState))
        }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isAuthenticated() &&
                    <div className="wrapper">
                        <NavBar handleLogout={this.handleLogout}/>
                        <Route exact path="/" render={(props) => {    
                            return <LocationList {...props} deleteLocation={this.deleteLocation} employees={this.state.employees} locations={this.state.locations} />     
                        }} />
                        <Route exact path="/animals" render={(props) => {
                            return <AnimalList {...props} deleteAnimal={this.deleteAnimal} employees={this.state.employees} animals={this.state.animals} />
                        }} />
                        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                            return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals}/>
                        }} />
                        <Route exact path="/animals/edit/:animalId(\d+)" render={(props) => {
                            return <AnimalEdit {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals}
                            editAnimal={this.editAnimal} employees={this.state.employees}/>
                        }} />
                        <Route exact path="/animals/new" render={(props) => {
                            return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees}/>
                        }} />
                        <Route exact path="/employees" render={props => {
                            return <EmployeeList {...props} deleteEmployee={this.deleteEmployee} animals={this.state.animals}
                                    employees={this.state.employees} />
                            }} />
                        <Route exact path="/employee/:employeeId(\d+)" render={(props) => {
                            return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees}/>
                        }} />
                        <Route exact path="/employees/new" render={(props) => {
                            return <EmployeeForm {...props} addEmployee={this.addEmployee} locations={this.state.locations} employees={this.state.employees}/>
                        }} />
                        <Route exact path="/owners" render={(props) => {
                            return <OwnersList {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                        }} />
                        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                            return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners}/>
                        }} />
                        <Route exact path="/owners/new" render={(props) => {
                            return <OwnerForm {...props} addOwner={this.addOwner} owners={this.state.owners}/>
                        }} />
                    </div>
                }
                {
                    !this.props.isAuthenticated() &&
                    <Redirect to="/login" />
                }
            </React.Fragment>
        )
    }
}
export default ApplicationViews