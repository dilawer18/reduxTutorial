import types from "./types";

export function increment(data, data2) {
    return {
        type: types.INCREMENT,
        payload: { quantity: data, _id: data2 }
    }
}
export function decrement(data, data2) {
    return {
        type: types.DECREMENT,
        payload: {
            quantity: data,
            _id: data2
        }
    }
}
export function defaultdata(data){
    return {
        type: types.DEFAULTDATA,
        payload: data
    }
}