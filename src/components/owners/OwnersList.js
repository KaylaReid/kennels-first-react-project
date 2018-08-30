import React, { Component } from 'react';
import './owners.css'
import {Link} from 'react-router-dom'

export default class OwnersList extends Component {
    render() {
         return(
            <section className="owners-section">
                <h2 className="owners">Owners</h2>
                <div className="ownerButton">
                    <button type="button" className="btn btn-success"
                    onClick={() => {this.props.history.push("/owners/new")}}>Add New Owner</button>
                </div>
                <div className="owners">
                {
                    this.props.owners.map(owner =>
                            <div className="card-body card" key={owner.id}>
                                <div className="card-title">
                                    <h4>{owner.name}</h4>
                                    <p>{owner.phoneNumber}</p>
                                    <button onClick={() => this.props.deleteOwner(owner)}
                                        className="card-link">Remove</button>
                                    <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                </div>
                            </div>
                    )
                }
                </div>
            </section>
        ) 
    }
}