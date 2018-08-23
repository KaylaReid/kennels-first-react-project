import React, { Component } from 'react';

export default class LocationList extends Component {
    render() {
         return(
            <div className="locations">
                <h2>Our Locations</h2>
                {
                this.props.locations.map(location =>
                    <div id={`location--${location.id}`} key={location.id}>
                        <h4>{location.name}</h4>
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                    </div>
                )
            }
            </div>
         ) 
    }
}