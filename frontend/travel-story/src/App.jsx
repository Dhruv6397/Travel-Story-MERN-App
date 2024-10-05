import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Home from '../pages/Home/Home'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="signUp" exact element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  )
}
