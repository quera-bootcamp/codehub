import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";
import Shop from "./routes/Shop.tsx";
import Navbar from "./components/Navbar.tsx";
import Register from "./routes/Register.tsx";
import Favorites from "./routes/Favorites.tsx";
import ShoppingBasket from "./routes/ShoppingBasket.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div dir={'rtl'}>
            <Router>
                <Navbar/>
                <div className="pt-6 max-w-[1440px] mx-auto">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Shop" element={<Shop/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Register" element={<Register/>}/>
                        <Route path="/ShoppingBasket" element={<ShoppingBasket/>}/>
                        <Route path="/Favorites" element={<Favorites/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;