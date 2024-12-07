import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
// import NotFound from './pages/404'
import { createContext } from 'react';
// import "preline/preline";
// import '../css/main.css';
import '../src/css/main.css'
import '../src/css/fontawesome.min.css';
// import Header from './components/Header';

export const AppContext = createContext();

function App() {
	


	return (
		<AppContext.Provider >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/chat" element={<Homepage />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
