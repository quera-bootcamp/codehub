import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";
import Testing from "./routes/Testing.tsx";
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
                <div className="pt-2 max-w-[1440px] mx-auto">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Testing" element={<Testing/>}/>
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