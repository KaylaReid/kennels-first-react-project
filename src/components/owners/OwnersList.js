import React, { Component } from 'react';
import './owners.css'

export default class OwnersList extends Component {
    render() {
         return(
            <section className="owners">
                <h2>Owners</h2>
                {
                    this.props.owners.map(owner =>
                        <div className="card-body">
                            <h5 className="card-title">
                                <h4>{owner.name}</h4>
                                <p>{owner.phoneNumber}</p>
                                <button onClick={() => this.props.deleteOwner(owner)}
                                    className="card-link">Remove</button>
                            </h5>
                        </div>
                    )
                }
            </section>
        ) 
    }
}
