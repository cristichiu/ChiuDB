import { useState, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'

import IUser from "../interface/IUser"

interface IUserLocal { name: string, password: string }
interface IsetUserGlobal { setUserGlobal({ user }: IUser): void }

function Login({ setUserGlobal }: IsetUserGlobal) {
    const navigate = useNavigate()
    const [user, setUser] = useState<IUserLocal>({ name: "", password: "" })

    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    function refClick(ref: any): void { if(ref != null) { ref.current?.focus(); } };

    const [errorName, setErrorName] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
  
    async function login(): Promise<void> {
        if(user.name == "") { setErrorName(true); setTimeout(async () => { setErrorName(false) }, 3000) }
        if(user.password == "") { setErrorPass(true); setTimeout(async () => { setErrorPass(false) }, 3000) }
        if(user.name == "" || user.password == "") return;
        await axios.post("http://localhost:5000/login", {
            password: user.password, name: user.name
        }).then(res => {
            const { vpassword, vname } = res.data.state
            !vname ? setErrorName(true) : setErrorName(false)
            !vpassword ? setErrorPass(true) : setErrorPass(false)
            if(!vname || !vpassword) {
                setErrorName(true)
                setErrorPass(true)
                return
            } else {
                setUserGlobal({ user: { name: user.name, password: user.password } })
                navigate(`/user`)
            }
        }).catch(err => { console.log(err) })
    }  

    return (
        <div className="container">
            <Link className="docLink" to='/documentation'>Documentation</Link>
            <main className="main">
                <div className="title">ChiuDB</div>
                <div className="subTitle">Buna!</div>
                <div className="description">Acesta este ChiuDB, pentru început trebuie neaparat să te loghezi. Succes!</div>
                <div className="login">
                    <div className="inputBox">
                        <input className="input" required autoFocus
                            type="text"
                            ref={nameRef}
                            value={user.name}
                            onChange={(value) => {
                                setUser({...user, name: value.target.value})
                                if(errorName) setErrorName(false)
                            } } />
                        <span className={errorName ? "errorColor placeHolder" : "normalColor placeHolder" } onClick={() => refClick(nameRef)}>Name</span>
                    </div>
                    <div className="inputBox">
                        <input className="input" required
                            type="password"
                            ref={passwordRef}
                            value={user.password}
                            onChange={(value) => {
                                setUser({...user, password: value.target.value})
                                if(errorPass) setErrorPass(false)
                            } } />
                        <span className={errorPass ? "errorColor placeHolder" : "normalColor placeHolder"} onClick={() => refClick(passwordRef)}>Password</span>
                    </div>
                </div>
                <button className="button" onClick={login}>Login</button>
                { errorName || errorPass ? <div className="errorColor">Parola sau nume greșit</div> : null }
                <button onClick={() => navigate("/register")} className="button">Nu am un cont</button>
            </main>
        </div>
    )
}

export default Login