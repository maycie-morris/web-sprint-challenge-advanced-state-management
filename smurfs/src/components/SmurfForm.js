import React, { useState } from 'react'
import { addSmurf } from '../actions'
import { connect } from 'react-redux'


const SmurfForm = props => {
    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: ''
    })

    const inputChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const formSubmit = e => {
        // e.preventDefault();
        props.addSmurf(formState)
    }

    return (
        <div className="form-container">
            <form onSubmit={formSubmit}>
                <div className="form-name">
                    <label htmlFor="name">
                        <input
                            placeholder="Enter Smurf name"
                            type="text"
                            name="name"
                            onChange={ inputChange }
                            value={ formState.name }
                        />
                    </label>
                </div>
                <div className="form-age">
                    <label htmlFor="age">
                        <input
                            placeholder="Enter Smurf age"
                            type="text"
                            name="age"
                            onChange={ inputChange }
                            value= { formState.age }
                        />
                    </label>
                </div>
                <div className="form-height">
                    <label htmlFor="height">
                        <input
                            placeholder="Enter Smurf height (in cm)"
                            type="text"
                            name="height"
                            onChange= { inputChange }
                            value= { formState.height }
                        />
                    </label>
                </div>
                <button type="submit">Add new Smurf</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        addSmurf: state.addSmurf
    }
}

export default connect(mapStateToProps, {addSmurf}) (SmurfForm)