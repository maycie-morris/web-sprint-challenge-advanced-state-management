import axios from 'axios'

export const FETCH_SMURF = 'FETCH_SMURF'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'
export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'
export const DELETE_SMURF = 'DELETE_SMURF'


export const fetchSmurf = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_SMURF
        })
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('Yaaaas, we did it', res.data)
                // dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log('Uh-oh, its an error', err)
                // dispatch({ type: FETCH_SMURF_ERROR, payload: err })
            })
    }
}

export const addSmurf = smurf => {
    const addNewSmurf = axios.post('http://localhost:3333/smurfs', smurf)
    return (dispatch) => {
        dispatch({
            type: ADD_SMURF
        })
        addNewSmurf
            .then(({ smurfData }) => {
                console.log('Yay a new smurf!', smurfData)
                dispatch({ type: ADD_SMURF_SUCCESS, payload: smurfData })
            })
            .catch(err => {
                console.log('No new smurf for you!!', err)
                // dispatch({ type: ADD_SMURF_ERROR, payload: err })
            })
    }
}

export const deleteSmurf = smurf => {
    const removeSmurf = axios.delete('http://localhost:3333/smurfs', smurf)
    return (dispatch) => {
        dispatch({ type: DELETE_SMURF })
        removeSmurf
            .then(({ smurfData }) => {
                dispatch({ type: ADD_SMURF_SUCCESS, payload: smurfData })
            })
            .catch(err => {
                console.log('Uh oh, cant get rid of him', err)
                // dispatch({ type: ADD_SMURF_ERROR, payload: err })
            })
    }
}
