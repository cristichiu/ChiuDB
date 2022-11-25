import { ActionType } from "./reducer_type"

const initialState = {
    name: '',
    password: '',
    dataBase: [],
    token: '',
    creatingAt: 0,
}

const reducer = (state: IUserDataState = initialState, action: IUserDataAction) => {
    switch(action.type) {
        case ActionType.ADD:
            return action.state
        break;
        default: return state
    }
}

export default reducer