import { Route, Routes } from "react-router"
import Register from "./components/Register"
import AuthProvider from "./providers/AuthProvider"
import ThemeProvider from "./providers/ThemeProvider"


function App() {


  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
            <div className="d-flex justify-content-center">
                <h1>Online food Order</h1>
            </div>
            <Routes>
                <Route index element=<Login/> />
                <Route path="'/login'" element=<Login/> />
                <Route path="/register" element=<Register/> />
                <Route>

                </Route>
            </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
