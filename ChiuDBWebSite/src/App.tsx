// ----> General Imports
import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as action_creator from "./store/userData/action_creator"
import { useSelector } from "react-redux"
import { State } from "./store/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ----> Import Components
import Login from "./components/login"
import User from "./components/user"
import Logo from './components/logo'
// ----> Design Imports
import '../setPublic/scss/init.scss'
import '../setPublic/scss/index.scss'
// --------------------

const App: React.FC = () => {
  // UserData redux store init
  const dispatch = useDispatch()
  const { addUser } = bindActionCreators(action_creator, dispatch)
  const state: IUserDataState = useSelector((state: State) => state.userData)
  // -------------------------
  const [loading, setLoading] = useState<boolean>(true); window.addEventListener('load', () => { document.getElementsByClassName("loadingSVG")[0].addEventListener('animationiteration', () => { setLoading(false) }) })
  function LoginElement() { return ( <div className="fullCover colCont centerChild"><Logo loading={loading}/>{ !loading && <Login loading={loading} /> }</div> ) }
  // -------------------------
  return (
    <Router>
      {!loading && <div className="documentation">Documentation</div>}
      <Routes>
        <Route path="login" element={<LoginElement />}></Route>
        <Route path="user" element={<User state={state}/>}></Route>
      </Routes>
    </Router>
  )
}

export default App