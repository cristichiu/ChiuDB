import { ActionType } from "./reducer_type"
import { Dispatch } from "react"

export const addUser = (user: IUserDataState) => {
    return (dispatch: Dispatch<IUserDataAction>) => {
        dispatch({
            type: ActionType.ADD,
            state: user
        })
    }
}