import React, { Component } from 'react';
import './locations.css'
// import EmployeeList from '../employee/EmployeeList';


export default class LocationList extends Component {
 
    render() {
         return(
            <section className="locations">
                <h2>Our Locations</h2>
                {
                this.props.locations.map(location =>
                        <div id={`location--${location.id}`} key={location.id}>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>{location.name}</h4>
                                    <p>{location.address}</p>
                                    <p>{location.city}</p>
                                    <h5>Employees at this location:</h5>
                                    {
                                        this.props.employees
                                        .filter(employee => employee.locationId === location.id)
                                        .map(employee => {
                                             return (<div className="employee-list">
                                                        <li>{employee.name}</li>
                                                   </div>)
                                        })
                                    }
                                              {/* this.props.animals
                                    .filter(animal => animal.employeeId === employee.id)
                                    .map(animal => <AnimalCard key={animal.id} animal={animal} {...this.props} />) */}
                                    <button onClick={() => this.props.deleteLocation(location)}
                                        className="card-link">Remove Location</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
         ) 
    }
}
