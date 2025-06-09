import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./page/auth/Login"
import DashboardLayout from "./components/layout/DashboardLayout"
import Clients from "./page/Clients"
import Consultations from "./page/Consultation"
import Analytics from "./page/Analytics"
import Messages from "./page/Messages"
import Settings from "./page/Settings"
import Signup from "./page/auth/Singup"
import AuthenticationContext from "./context/AuthenticationContext"
import Dashboard from "./page/Dashboard"

const App = () => {
  return (
    <Router>
      <Routes >
        <Route path="/" element={
          <AuthenticationContext>
            <DashboardLayout />
          </AuthenticationContext>
        } >
          <Route path="" element={<Dashboard/>}/>
          <Route path="analytics" element={<Analytics />} />
          <Route path="clients" element={<Clients />} />
          <Route path="consultations" element={<Consultations />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router >
  )
}

export default App