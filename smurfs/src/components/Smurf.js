import React from 'react'
import { deleteSmurf } from '../actions'
import { connect } from 'react-redux'

const Smurf = ({props}) => {
    // const deleteSmurf = () => {
    //     smurf.filter(item => smurf.id != item.id)
    // }
    return (
        <div>
            <h2>{props.name} </h2>
            <p> {props.id} </p>
            <p> {props.age} </p>
            <p> {props.height} </p>
            <button onClick={() => PaymentResponse.deleteSmurf(props.smurfData)} >Delete Smurf (meanie)</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        deleteSmurf: state.deleteSmurf
    }
}

export default connect(mapStateToProps, { deleteSmurf }) (Smurf)