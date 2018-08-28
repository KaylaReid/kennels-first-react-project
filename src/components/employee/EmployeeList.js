import React, { Component } from 'react'
import './employees.css'
import {Link} from 'react-router-dom'

export default class EmployeeList  extends Component {
    render() {
        
        return (
            <React.Fragment>
            <section className="employee-section">
                <h2>Our Employees</h2>
            <div className="employeeButton">
                <button type="button" className="btn btn-success"
                onClick={() => {this.props.history.push("/employees/new")}}>Add New Employee</button>
            </div>
                <div className="employees">
                {
                this.props.employees.map(employee =>
                    <div className="card" key={employee.id}>
                        <div className="card-body">
                        <div className="card-title">
                            <h4>{employee.name}</h4>
                            <p>Position: {employee.position}</p>
                            <button onClick={() => this.props.deleteEmployee(employee)}
                                className="card-link">Terminate</button>
                            <Link className="nav-link" to={`/employee/${employee.id}`}>Details</Link>
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

