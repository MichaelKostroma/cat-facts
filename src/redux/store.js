import { createStore } from "redux";

const initialState = {
    likes: 0
}

const reducer = (state = initialState, action) => {
    console.log("reducer >", action);





}


export const store = createStore(reducer)