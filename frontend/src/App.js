import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import SignUp from "./screens/Signup.jsx";
import Cart from "./screens/Cart.jsx";
import {CartProvider} from "./components/Contextreducer.jsx";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Routes>
            <Route
              path="/"  
              element={<Home/>}
            />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/signup" 
              element={<SignUp/>}
            />
            <Route
              path="/cart"
              element={<Cart/>}
            />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
