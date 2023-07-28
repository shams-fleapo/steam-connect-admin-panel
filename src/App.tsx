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
