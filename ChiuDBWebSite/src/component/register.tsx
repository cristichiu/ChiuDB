import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

import IUser from "../interface/IUser"

interface IsetUserGlobal { setUserGlobal({ user }: IUser): void }
interface IUserLocal { name: string, password: string, confirm: string }

const Register = ({ setUserGlobal }: IsetUserGlobal) => {
    const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);
    function refClick(ref: any): void { if(ref != null) { ref.current?.focus(); } };

    const [user, setUser] = useState<IUserLocal>({name: '', password: '', confirm: ''})
    const [errorName, setErrorName] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const [errorConPass, setErrorConPass] = useState(false)
    const [existentUser, setExistentUser] = useState(false)

    async function register() {
        if(user.name == "") { setErrorName(true); setTimeout(async () => { setErrorName(false) }, 5000) }
        if(user.password == "") { setErrorPass(true); setTimeout(async () => { setErrorPass(false) }, 5000) }
        if(user.confirm == "") { setErrorConPass(true); setTimeout(async () => { setErrorConPass(false) }, 5000) }
        if(user.confirm != user.password) { setErrorConPass(true); setTimeout(async () => { setErrorConPass(false) }, 5000) }
        if(user.name == "" || user.password == "" || user.confirm == "" || user.password != user.confirm) return;
        await axios.post("http://localhost:5000/register", {
            name: user.name, password: user.password
        }).then(res => {
            if(res.data.state) {
                setUserGlobal({ user: {name: user.name, password: user.password} })
                navigate(`/user`)
                setExistentUser(false)
            } else { setExistentUser(true) }
        })
    }

    return (
        <div className="container">
            <Link className="docLink" to='/documentation'>Documentation</Link>
            <main className="main">
                <div className="title">ChiuDB</div>
                <div className="subTitle">Buna!</div>
                <div className="description">Înregistrează-te si cel mai important nu uita parola!</div>
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
                        <span className={errorName ? "errorColor placeHolder" : "normalColor placeHolder"} onClick={() => refClick(nameRef)}>Name</span>
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
                    <div className="inputBox">
                        <input className="input" required
                            type="password"
                            ref={confirmRef}
                            value={user.confirm}
                            onChange={(value) => {
                                setUser({...user, confirm: value.target.value})
                                if(errorConPass) setErrorConPass(false)
                            } } />
                        <span className={errorConPass ? "errorColor placeHolder" : "normalColor placeHolder"} onClick={() => refClick(confirmRef)}>Confirm</span>
                    </div>
                </div>
                <button className="button" onClick={register}>Register</button>
                { errorName || errorPass || errorConPass ? <div className="errorColor">Parola sau nume greșit</div> : null }
                { existentUser && <div className="errorColor">Acest user deja există!</div> }
                <button onClick={() => navigate("/login")} className="button">Înapoi la login</button>
            </main>
        </div>
    )
}

export default Register