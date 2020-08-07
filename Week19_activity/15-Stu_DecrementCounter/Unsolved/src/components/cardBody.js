import React from "react";

function CardBody(props){
    return (
        <div className="card-body">
          <p className="card-text">Click Count: {props.count}</p>
          <button className="btn btn-primary mr-2" onClick={props.increment}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={props.decrement}>
            Decrement
          </button>
        </div>
    )
}

export default CardBody;