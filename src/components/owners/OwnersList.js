import React, { Component } from 'react';
import './owners.css'
import {Link} from 'react-router-dom'

export default class OwnersList extends Component {
    render() {
         return(
            <section className="owners">
                <h2>Owners</h2>
                {
                    this.props.owners.map(owner =>
                        <div className="card-body" key={owner.id}>
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
            </section>
        ) 
    }
}
