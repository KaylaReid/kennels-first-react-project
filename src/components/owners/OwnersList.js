import React, { Component } from 'react';
import './owners.css'

export default class OwnersList extends Component {
    render() {
         return(
            <div className="owners">
                <h2>Owners</h2>
                {
                this.props.owners.map(owner =>
                    <div id={`owner--${owner.id}`} key={owner.id}>
                        <h4>{owner.name}</h4>
                        <p>{owner.phoneNumber}</p>
                    </div>
                )
            }
            </div>
         ) 
    }
}