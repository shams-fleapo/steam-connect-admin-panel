// import './App.css';
// import { ProfileLayout } from './components/layout';
import Login from './components/login';
import { Dashboard } from './components/dashboard';
import { Header } from './components/layout/header';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

function App() {
	return (
		<div className='bg-gray-200 min-h-screen'>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
