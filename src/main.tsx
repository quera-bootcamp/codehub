import './index.css'
import App from './App.tsx'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Testing from "./components/Testing.tsx";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div dir={'rtl'} className={'font-primaryRegular'}>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/testing">Testing</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/testing" element={<Testing />} />
                </Routes>
            </Router>
        </div>
    </StrictMode>
)
