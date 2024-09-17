import Home from "./routes/Home.tsx";
import Testing from "./routes/Testing.tsx";
import Navbar from "./components/Navbar.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div dir={'rtl'} className={'font-primaryRegular dark:bg-default-950 dark:text-white'}>
            <Router>
                <Navbar/>
                <div className="pt-2 max-w-[1440px] mx-auto">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/testing" element={<Testing/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;