import { combineReducers } from "redux";
import reducer from "./userData/reducer";

const reducers = combineReducers({
    userData: reducer
})

export default reducers
export type State = ReturnType<typeof reducers> 