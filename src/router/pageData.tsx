import { routerType } from '../types/router.types';
import Dashboard from '../screens/dashboard';
import Login from '../screens/login';
import UserDetails from '../screens/user-details';

const pagesData: routerType[] = [
	{
		path: '/',
		element: <Login />,
		title: 'login',
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		title: 'dashboard',
	},
	{
		path: '/user',
		element: <UserDetails />,
		title: 'user',
	},
];

export default pagesData;
