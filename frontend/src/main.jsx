import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
import SelectParserPage from "./pages/parser/SelectParserPage.jsx";
import ParserPage from "./pages/parser/ParserPage.jsx";
import {LoginPage} from "./pages/auth/LoginPage.jsx";
import {RegisterPage} from "./pages/auth/RegisterPage.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/main/*' element={<SelectParserPage />}/>
            <Route path='/main/parser/:store' element={<ParserPage />} />
        </Routes>
    </BrowserRouter>
)
