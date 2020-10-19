import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRecs(action) {
    try {
        console.log(action.payload)
        let response = yield axios.post(`/api/statePolicies`, action.payload)
        console.log(response.data)
        yield put ({ type: 'SET_RECS', payload: response.data})
    } catch (error) {
        console.log('error fetching recs', error)
    }
}

function* RecsSaga() {
    yield takeLatest('FETCH_RECS', fetchRecs)
}

export default RecsSaga;