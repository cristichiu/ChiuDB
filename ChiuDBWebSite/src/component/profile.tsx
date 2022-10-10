import react, { useEffect, useState } from 'react'

import IUser from '../interface/IUser'

import CreatePannel from './profileComponents/createPannel'
import AllDataBase from './profileComponents/allDataBase'
import Loading from './loading'

import '../../setPublic/scss_design/profile.scss'
import '../../setPublic/scss_design/app.scss'
import axios from 'axios'

function Porfile({user}: IUser) {
    const [createPannel, setCreatePannel] = useState(false)
    const [userData, setUserData] = useState<any>({loading: true})
    async function getUserData() {
        await axios.post("http://localhost:5000/login", {
            password: user.password, name: user.name
        }).then(res => {
            const { vpassword, vname } = res.data.state
            if(!vname || !vpassword) {
                return
            } else {
                setUserData(res.data.userData)
            }
        }).catch(err => { console.log(err) })
    }
    useEffect(()=> {
        getUserData()
    }, [user])

    return (
        <div>
            { userData.loading ? <Loading /> : <div>
                {userData?.dataBase.length != 0 && <AllDataBase dataBase={userData?.dataBase} />}
                <button className='create' onClick={() => setCreatePannel(true)}>Create</button>
                { createPannel && <CreatePannel /> }
            </div> }
        </div>
    )
}

export default Porfile