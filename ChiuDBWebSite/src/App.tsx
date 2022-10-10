import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import IUser from './interface/IUser';
interface IUserLocal {
  name: string,
  password: string
}

import Login from './component/login';
import Register from './component/register';
import Loading from './component/loading';
import Profile from './component/profile';

import '../setPublic/scss_design/app.scss'
import '../setPublic/scss_design/init.scss'
import "../setPublic/scss_design/user.scss"

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  window.addEventListener("load", () => setLoading(false))

  const [user, setUser] = useState<IUserLocal>({name: '', password: ''})
  const [userData, setUserData] = useState<Object>({})
  function setUserGlobal({ user }: IUser): void {
    const userI = { name: user.name, password: user.password }
    setUser(userI); setUserData(userData)
    window.localStorage.setItem('state', JSON.stringify(userI));
  }

  window.addEventListener("load", () => {
    const GetLocalStorage: any = JSON.parse(window.localStorage.getItem('state') || '1')
    if(GetLocalStorage != 1) {
      const userI: IUserLocal = { name: GetLocalStorage?.name, password: GetLocalStorage?.password }
      setUser(userI)
    }
  })

  return (
    <Router>
      { loading && <Loading /> }
      <Routes>
        <Route path="login" element={ !loading && <Login setUserGlobal={setUserGlobal} />}></Route>
        <Route path="register" element={ !loading && <Register setUserGlobal={setUserGlobal} />}></Route>
        <Route path='user/'element={
          !loading && user.name != '' && user.password != '' ?
          <Profile user={user} /> :
          !loading && <Loading />
        }></Route>
      </Routes>
    </Router>
  )
}

export default App
