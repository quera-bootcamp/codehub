import './index.css'
import App from './App.tsx'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from "./stroe/ThemeContext.tsx";
import {UserProvider} from "./userStore/UserContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UserProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </UserProvider>
    </StrictMode>
)