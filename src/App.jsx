import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Signup } from "./Pages/Signup"
import { VerifyUser } from "./Pages/verifyUser"
import { Login } from "./Pages/Login"
import { Profile } from "./Pages/Profile"
import ProtectedRoute from "./Pages/protectedRoute"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"       element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path='/verify' element={<VerifyUser />}></Route>
          <Route path="/login"  element={<Login />}></Route>

          <Route path='/profile'
           element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
          ></Route>

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
