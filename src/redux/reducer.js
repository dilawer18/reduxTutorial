import types from "./types";
let init_state = {
    num: 1,
    myData: [
        {
            _id: 1,
            title: "Mobile",
            desc: "MI Mobiles",
            quantity: 0,
        },
        {
            _id: 2,
            title: "Laptop",
            desc: "MACBOOK",
            quantity: 0,
        },
        {
            _id: 3,
            title: "Watch",
            desc: "NOICE",
            quantity: 0,
        },
    ]
}
export function counterReducer(state = init_state, action) {
    switch (action.type) {
        case types.INCREMENT: {
            let data = action.payload.quantity
            let mainArr=[...state.myData]
            console.log("data in the increment function",mainArr)
            let index=mainArr.findIndex(target => target._id == action.payload._id)
            console.log("index of the target data in increment function", index)
            const newArr=[...state.myData];
            console.log("data in new array",newArr)
           if(index>=0)
            { newArr[index].quantity=data+1}
        
            return{ ...state,myData:newArr, number: 1 }
        }
        case types.DECREMENT: {
            let data = action.payload.quantity
            let mainArr=[...state.myData]
            console.log("data in the decrement function",mainArr)
            let index=mainArr.findIndex(target => target._id == action.payload._id)
            console.log("index of the target data in decrement function", index)
            const newArr=[...state.myData];
           if(index>=0)
            { newArr[index].quantity=data-1}
            
            return {...state,myData:newArr }
        }
        default:
            return { ...state }
    }
}