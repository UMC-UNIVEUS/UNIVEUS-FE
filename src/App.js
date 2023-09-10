import { Reset } from 'styled-reset';
import './App.scss';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Verification from './pages/Verification';
import ProfileRegister from './pages/ProfileRegister';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import PostPage from './pages/PostPage';
import Test from './pages/Test';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/verification" element={<Verification />} />
					<Route path="/register" element={<ProfileRegister />} />
					<Route path="/home" element={<HomePage />} />
					<Route path='/search' element={<SearchPage />}/>
					<Route path='/post/:id' element={<PostPage />}/>
				</Routes>
			</BrowserRouter>
			<Reset />
		</div>
	);
}

export default App;
