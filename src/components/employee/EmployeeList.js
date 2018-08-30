import React, { Component } from 'react'
import './employees.css'
import {Link} from 'react-router-dom'
import AnimalCard from '../animals/AnimalCard'

export default class EmployeeList  extends Component {
    render() {
        
        return (
            <React.Fragment>
            <section className="employee-section">
                <h2 className="employees">Our Employees</h2>
                <div className="employeeButton">
                    <button type="button" className="btn btn-success"
                    onClick={() => {this.props.history.push("/employees/new")}}>Add New Employee</button>
                </div>
                <div className="employees">
                {
                this.props.employees.map(employee =>
                    <div className="card employes-card" key={employee.id}>
                        <div className="card-body">
                        <div className="card-title">
                            <h4>{employee.name}</h4>
                            <p>Position: {employee.position}</p>
                            <button onClick={() => this.props.deleteEmployee(employee)}
                                className="card-link">Terminate</button>
                            <Link className="nav-link" to={`/employee/${employee.id}`}>Details</Link>
                        </div>
                        <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(animal => animal.employeeId === employee.id)
                                    .map(animal => <AnimalCard key={animal.id} animal={animal} {...this.props} />)
                            }
                            </div>

                    </div>
                </div>
                )
                }
                </div>
            </section>
            </React.Fragment>
        );
    }
}

