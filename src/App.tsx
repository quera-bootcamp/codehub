import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";
import Shop from "./routes/Shop.tsx";
import Navbar from "./components/Navbar.tsx";
import Register from "./routes/Register.tsx";
import Favorites from "./routes/Favorites.tsx";
import ShoppingBasket from "./routes/ShoppingBasket.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage.tsx";
import UpdateProfile from "./routes/UpdateProfile.tsx";
import ShoppingProgress from "./routes/ShoppingProgress.tsx";
import AddProduct from "./routes/CreateProduct.tsx";

function App() {
  return (
    <div dir={"rtl"}>
      <Router>
        <Navbar />
        <div className="pt-6 max-w-[1440px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ShoppingBasket" element={<ShoppingBasket />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/UpdateProfile" element={<UpdateProfile />} />
            <Route path="/ShoppingProgress" element={<ShoppingProgress />} />
            <Route path="/AddProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
