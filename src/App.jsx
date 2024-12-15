import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { createContext } from 'react';
import '../src/css/main.css'
import '../src/css/fontawesome.min.css';
import ChatPage from './pages/Chatpage';
import Forget from './components/home/Forget';
import Login from './components/home/Login';
import Mail from './components/home/Mail';
import NewPass from './components/home/NewPass';
import Layout from './components/Layout';
// import Test from './components/test/Test';
export const AppContext = createContext();
function App() {
	const routes = createBrowserRouter([{
		path: '', element: <Layout></Layout>, children: [
			{ index: true, element: <Homepage></Homepage> },
			{ path: '/chat', element: <ChatPage></ChatPage> },
			{ path: '/forget', element: <Forget></Forget> },
			{ path: '/login', element: <Login></Login> },
			{ path: '/mail', element: <Mail></Mail> },
			{ path: '/newpass', element: <NewPass></NewPass> },
			// { path: '/test', element: <Test></Test> },
		]
	}
	])
	return (
		<div>
			<RouterProvider router={routes}></RouterProvider>
		</div>
	)
}
export default App