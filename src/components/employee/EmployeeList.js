import React, { Component } from 'react'
import './employees.css'

export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="emplyees">
                <h2>Our Employees</h2>
                {
                this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                        <h3>{employee.name}</h3>
                        <p>{employee.address}</p>
                    </div>
                )
            }
            </div>
        );
    }
}