import * as ActionNames from "../utils/actionNames";

export function fetchData() {
    return{
        type : ActionNames.FETCH_DATA
    }
}

export function apiFailed(e){
    return{
        type: ActionNames.API_FAILED,
        event: e
    }
}

export function setRecords(productList){
    return{
        type: ActionNames.SET_RECORDS,
        productList
    }
}

export function setProduct(selectedProduct){
    return {
        type: ActionNames.PRODUCT_SELECTED,
        selectedProduct
    }
}

export function setBand(selectedBand){
    return {
        type: ActionNames.BAND_SELECTED,
        selectedBand
    }
}

export function setSubBandt(selectedSubBand){
    return {
        type: ActionNames.SUB_BAND_SELECTED,
        selectedSubBand
    }
}

