import {Map} from "immutable";
import * as helperFnc from "../utils/helperFunction";
import * as ActionNames from '../utils/actionNames';

const initialState = Map({
    apiFailed : false,
    productList: null,
    selectedProduct: null,
    selectedBand: null,
    selectedSubBand: null
});

export function FeReducer(state = initialState, action){
    switch(action.type){
        case ActionNames.API_FAILED: {
            return state.set("apiFailed", action.event);
        }

        case ActionNames.SET_RECORDS: {
            state = state.set("apiFailed", false);
            state = state.set("productList", action.productList);
            return state;
        }

        case ActionNames.PRODUCT_SELECTED: {
            state = state.set("selectedProduct", action.selectedProduct);
            state = state.set("selectedBand", null);
            state = state.set("selectedSubBand", null);
            return state;
        }

        case ActionNames.BAND_SELECTED: {
            state = state.set("selectedBand", action.selectedBand);
            return state;
        }

        case ActionNames.SUB_BAND_SELECTED: {
            state = state.set("selectedSubBand", action.selectedSubBand);
            return state;
        }

    }
    return state;
}