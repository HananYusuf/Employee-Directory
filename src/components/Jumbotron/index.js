import React from 'react'

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <input className="form-control" placeholder="search names"></input>
        </div>
    )
}

export default Jumbotron
