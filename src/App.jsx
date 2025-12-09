import { WelcomePage } from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
