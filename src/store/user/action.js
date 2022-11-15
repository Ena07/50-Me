// import { USER_ACTION_TYPES } from "./types";

// export const createAction = (type, payload) => ({ type, payload})

export const userPresent=(user)=>{
    return{
        type: "CURRENT_USER",
        payload:user
    }
}