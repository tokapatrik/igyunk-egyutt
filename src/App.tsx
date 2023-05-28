import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Navbar } from './layout/siteTop';
import MainPage from './pages/mainPage';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
