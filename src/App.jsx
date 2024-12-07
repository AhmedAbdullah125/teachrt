import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
// import NotFound from './pages/404'
import { createContext } from 'react';
// import "preline/preline";
// import '../css/main.css';
import '../src/css/main.css'
import '../src/css/fontawesome.min.css';
// import Header from './components/Header';
import ChatPage from './pages/Chatpage';
import Forget from './components/home/Forget';
import Login from './components/home/Login';
import Mail from './components/home/Mail';
import NewPass from './components/home/NewPass';

export const AppContext = createContext();

function App() {
	return (
		<AppContext.Provider >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/chat" element={<ChatPage />} />
					<Route path="/forget" element={<Forget />} />
					<Route path="/login" element={<Login />} />
					<Route path="/mail" element={<Mail />} />
					<Route path="/newpass" element={<NewPass />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}
export default App
