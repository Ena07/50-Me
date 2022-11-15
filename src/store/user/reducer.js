// import { USER_ACTION_TYPES } from "../types";

const INITIAL_STATE = {
    currentUser: 0,
    
}
 const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "CURRENT_USER":
            return {...state, currentUser: action.payload };
        default:
        return state
    }
}



export default userReducer