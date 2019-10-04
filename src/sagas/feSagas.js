import * as actionNames from "../utils/actionNames";
import { call, put, takeEvery, takeLatest} from "redux-saga/effects";
import * as actions from '../actions/feActions';
import { fetchData } from "./api";
import {productData} from "./data";

function* fetchRecords(){   
    let productList = productData;
    yield put(actions.setRecords(productList));
    try {
        // do api call
        //let  productList = yield call(fetchData);
        //yield put(actions.setRecords(productList)); 
      } catch (e) {
          //if fails trigger this action
        //yield put(actions.apiFailed(e)); 
      }
}

function* feSagas(){
    yield takeLatest(actionNames.FETCH_DATA, fetchRecords);
}

export default feSagas;