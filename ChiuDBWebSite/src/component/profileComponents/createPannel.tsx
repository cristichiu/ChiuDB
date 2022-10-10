import { useState } from "react"

function CreatePannel() {
    const [createData, setCreateData] = useState({name: "", password: "", confirm: ""})

    return (
        <div className="createContainer">
            <input type="text"placeholder="database name" autoFocus value={createData.name} onChange={(event) => setCreateData({...createData, name: event.target.value})} />
            <input type="password" placeholder="database password" value={createData.password} onChange={(event) => setCreateData({...createData, password: event.target.value})} />
            <input type="password" placeholder="confirm password" value={createData.confirm} onChange={(event) => setCreateData({...createData, confirm: event.target.value})} />
        </div>
    )
}

export default CreatePannel