import { Route, Routes } from "react-router-dom"
import Register from "./views/Form/Register/Register"
import Home from "./views/Home/Home"
import Login from "./views/Form/Log In/Login"
import AddProduct from "./views/add_product/AddProduct"
import { createContext, useEffect, useState } from "react"
import ProtecttedRoute from "./ProtecttedRoute"

export const Context = createContext()

function App() {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')) || false)
  const [userProducts, setUserProducts] = useState(JSON.parse(localStorage.getItem('userProducts')) || [])

  useEffect(() => {
    localStorage.setItem('login', login)
    localStorage.setItem('userProduct', JSON.stringify(userProducts))
  }, [login, userProducts])

  return (
    <Context.Provider value={{ login, setLogin, userProducts, setUserProducts }}>
      <Routes>
        <Route element={<ProtecttedRoute />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'add_product'} element={<AddProduct />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
