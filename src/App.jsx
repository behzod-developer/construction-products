import { Route, Routes } from "react-router-dom"
import Register from "./views/Form/Register/Register"
import Home from "./views/Home/Home"
import Login from "./views/Form/Log In/Login"
import AddProduct from "./views/add_product/AddProduct"


function App() {

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'add_product'} element={<AddProduct />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
