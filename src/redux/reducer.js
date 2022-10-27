import types from "./types";
let init_state = {
    num: 0,
    myData: [
        {
            _id: 1,
            title: "Mobile",
            desc: "Bla bla blabla blablablabla",
            quantity: 0,
        },
        {
            _id: 2,
            title: "Laptop",
            desc: "Bla bla blabla blablablabla",
            quantity: 0,
        },
        {
            _id: 3,
            title: "Watch",
            desc: "Bla bla blabla blablablabla",
            quantity: 0,
        },
    ]
}
export function counterReducer(state = init_state, action) {
    switch (action.type) {
        case types.INCREMENT: {
            let data = action.payload
            return { ...state, num: data + 1 }
        }
        case types.DECREMENT: {
            let data = action.payload
            return { ...state, num: data - 1 }
        }
        default:
            return { state }
    }
}