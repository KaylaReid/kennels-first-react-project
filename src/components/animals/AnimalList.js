import React, { Component } from 'react';
import './animals.css'

export default class AnimalList extends Component {
    render() {
         return(
            <div className="animals">
                <h2>Animals</h2>
                {
                this.props.animals.map(animal =>
                    <div id={`animal--${animal.id}`} key={animal.id}>
                        <h3>{animal.name}</h3>
                        <p>{animal.type}</p>
                    </div>
                )
            }
            </div>
         ) 
    }
}