import { routerType } from '../types/router.types';
import Dashboard from '../screens/dashboard';
import Login from '../screens/login';

const pagesData: routerType[] = [
	{
		path: '/login',
		element: <Login />,
		title: 'login',
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		title: 'dashboard',
	},
];

export default pagesData;
