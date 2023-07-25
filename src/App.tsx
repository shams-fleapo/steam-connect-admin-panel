// import './App.css';
// import { ProfileLayout } from './components/layout';
import Login from './components/login';
import { Dashboard } from './components/dashboard';
import { Header } from './components/layout/header';

function App() {
	return (
		<div className='bg-gray-200 min-h-screen'>
			{/* <h1 className='text-3xl font-bold text-red-500 underline text-center'>Stym Connect</h1> */}
			{/* <Login /> */}
			<Dashboard />
		</div>
	);
}

export default App;
