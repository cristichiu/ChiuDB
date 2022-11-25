interface LocalUserState {
    state: IUserDataState
}

const User = ({state}: LocalUserState) => {
    console.log(state)
    return <div>test</div>
}

export default User