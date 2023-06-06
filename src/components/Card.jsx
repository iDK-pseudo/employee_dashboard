import React from 'react'
import "../styles/Card.css"

function Card(props) {
    const classes = `card-container ${props.type}`;
    return (
      <div className={classes}>
          <div className="card-inner-container">
              {props.children}
          </div>
      </div>
    )
}

export default Card