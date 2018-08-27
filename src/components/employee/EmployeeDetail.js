import React, { Component } from "react"
import "./employees.css"
import {Link} from 'react-router-dom'

export default class EmployeeDetail extends Component {
    render() {
        console.log(this.props)
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employees">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {employee.name}
                        </h4>
                        <h6 className="card-title">{employee.position}</h6>
                        <Link className="nav-link" to={`/employees`}
                            onClick={() => this.props.deleteEmployee(employee)}
                            className="card-link">Terminate</Link>
                    </div>
                </div>
            </section>
        )
    }
}