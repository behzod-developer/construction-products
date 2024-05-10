import { Route, Routes } from "react-router-dom"
import Register from "./views/Form/Register/Register"
import Home from "./views/Home/Home"
import Login from "./views/Form/Log In/Login"
import AddProduct from "./views/add_product/AddProduct"
import { createContext, useEffect, useState } from "react"
import ProtecttedRoute from "./ProtecttedRoute"
import Detail from "./views/Detail/Detail"

export const Context = createContext()

function App() {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')) || false)
  const [userProducts, setUserProducts] = useState(JSON.parse(localStorage.getItem('userProducts')) || [])
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {})


  useEffect(() => {
    localStorage.setItem('login', login)
    localStorage.setItem('userProduct', JSON.stringify(userProducts))
    localStorage.setItem('userData', JSON.stringify(userData))
  }, [login, userProducts, userData])

  return (
    <Context.Provider value={{ login, setLogin, userProducts, setUserProducts, userData, setUserData }}>
      <Routes>
        <Route element={<ProtecttedRoute />}>
          <Route path={'/*'} element={<Home />} />
          <Route path={'detail/:id'} element={<Detail />} />
          <Route path={'add_product'} element={<AddProduct />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
