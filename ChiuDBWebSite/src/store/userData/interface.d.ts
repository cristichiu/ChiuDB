interface IUserDataBase {
    name: string,
    password: string,
    creatingAt: number,
    token: string,
    user: string
}
interface IUserDataState {
    name: string,
    password: string,
    dataBase: Array<IDataBase>,
    token: string,
    creatingAt: number
}
interface IUserDataAction {
    type: string,
    state?: IDataState
}