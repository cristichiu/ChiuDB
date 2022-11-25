import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from "redux"
import * as action_creator from "../store/userData/action_creator"
import { useSelector } from "react-redux"
import { State } from "../store/index"
import { enterType } from "../utilitis/variables/enterTypes"
import axios from "axios"

import '../../setPublic/scss/login.scss'

interface IUserLocal { name: string, password: string }

const Login = ({loading}: loading) => {
    // UserData redux store init
  const dispatch = useDispatch()
  const { addUser } = bindActionCreators(action_creator, dispatch)
  const state = useSelector((state: State) => state.userData)
  // -------------------------
  const navigate = useNavigate()
  const [user, setUser] = useState<IUserLocal>({ name: "", password: "" })
  const userRef = { name: useRef<HTMLInputElement>(null), password: useRef<HTMLInputElement>(null) }
  function refClick(ref: any): void { if(ref != null) { ref.current?.focus(); } };
  function hitEnterEvent(type: string) {
    switch(type) {
      case enterType.name:
        refClick(userRef.password)
      break;
      case enterType.password:
        login()
      break;
      default: break;
    }
  }

  async function login(): Promise<void> {
    await axios.post("http://localhost:5000/login", {
            password: user.password, name: user.name
        }).then(res => {
            const { vpassword, vname } = res.data.state
            if(!vname || !vpassword) {
                return
            } else {
                addUser(res.data.userData)
                navigate('/user')
            }
        }).catch(err => { console.log(err) })
  }

  return (
    <div className="loginContainer">
      <div className="loginDesc description">Acesta este ChiuDB : prima data trebuie să dai login : succese</div>
      <div className="loginInput flexDis colCont">
        <div className="inputCont">
          <input type="text" autoFocus required
            value={user.name} 
            ref={userRef.name}
            onKeyDown={(event) => { if(event.keyCode === 13) hitEnterEvent(enterType.name) }}
            onChange={(event) => setUser({...user, name: event.target.value}) }
          />
          <span className="placeholder" onClick={() => refClick(userRef.name)}>name</span>
        </div>
        <div className="inputCont">
          <input type="password" required
            value={user.password}
            ref={userRef.password}
            onKeyDown={(event) => { if(event.keyCode === 13) hitEnterEvent(enterType.password) }}
            onChange={(event) => setUser({...user, password: event.target.value}) }
          />
          <span className="placeholder" onClick={() => refClick(userRef.password)}>password</span>
        </div>
        <div className="loginButtonContainer"><button className="loginButton">Login</button></div>
      </div>
    </div>
  )
}

export default Login