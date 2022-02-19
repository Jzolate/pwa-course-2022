import App from './App.js';
import Profile from './Profile.js';
import MiniGame from './MiniGame.js';
import Spiderman from './Spiderman';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/App" element={<App />} />
                 <Route path="/Profile" element={<Profile /> } />
                 <Route path="/Minigame" element={<MiniGame /> } />
                 <Route path="/Spiderman" element={<Spiderman /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;