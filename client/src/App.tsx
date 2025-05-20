import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import AuthPage from "./page/auth/AuthPage"
import Singup from "./page/auth/Singup"
import Login from "./page/auth/Login"
import UserData from "./page/dashboard/UserData"


const App = () => {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home/>}>
          <Route path="users" element={<UserData/>} />
        </Route>
        <Route path="/auth" element={<AuthPage/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Singup/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App