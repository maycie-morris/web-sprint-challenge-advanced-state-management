import React from 'react'
import { deleteSmurf } from '../actions'
import { connect } from 'react-redux'

const Smurf = (props) => {
    // const deleteSmurf = () => {
    //     smurf.filter(item => smurf.id != item.id)
    // }
    return (
        <div>
            <h2>Name: {props.name} </h2>
            {/* <p> {props.id} </p> */}
            <p>Age: {props.age} </p>
            <p>Height: {props.height} </p>
            {/* <button onClick={() => props.deleteSmurf(props.smurfData)} >Delete Smurf (meanie)</button> */}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        deleteSmurf: state.deleteSmurf
    }
}

export default connect(mapStateToProps, { deleteSmurf }) (Smurf)