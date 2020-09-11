import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF } from '../actions'


const initialState = {
    smurfData: [],
    isFetching: false,
    error: '',
    updated: false

}

export const reducer = (state = initialState, action) => {
    console.log(state)
}