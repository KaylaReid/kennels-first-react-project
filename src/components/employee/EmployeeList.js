import React, { Component } from 'react'
import './employees.css'

export default class EmployeeList  extends Component {
    render() {
        return (
            <section className="emplyees">
                <h2>Our Employees</h2>
                {
                this.props.employees.map(employee =>
                    <div className="card-body">
                    <h5 className="card-title">
                        <h4>{employee.name}</h4>
                        <p>Position: {employee.position}</p>
                        <button onClick={() => this.props.deleteEmployee(employee.id)}
                            className="card-link">Delete</button>
                    </h5>
                </div>
                )
            }
            </section>
        );
    }
}

