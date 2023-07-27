export const auth = {
	email: 'test@gmail.com',
	password: 'Test@123',
};

export enum nameType {
	Student = 'Student',
	Pro = 'Pro',
	Premium = 'Premium',
	Enterprise = 'Enterprise',
}

export enum statusType {
	active = 'Active',
	in_active = 'In Active',
}

export enum userStatusType {
	active = 'Active',
	frozen = 'Frozen',
	suspended = 'Suspended',
}
export interface DataType {
	key: React.Key;
	user: string;
	email: string;
	tarif: string;
	administrator: string;
	user_status: userStatusType;
	referred_by: string;
	date_created: string;
	next_date_update_payment: string;
	paymentId: string;
	paymentDate: string;
	amount: number;
	paymentStatus: string;
	name?: nameType;
	storage?: string | number;
	maxPersonCount?: string | number;
	monthlyPrice?: string | number;
	annualPrice?: string | number;
	status?: statusType;
	subsciberCount?: number;
}

export type UserDataType = Pick<
	DataType,
	'key' | 'user' | 'tarif' | 'administrator' | 'user_status' | 'date_created' | 'next_date_update_payment' | 'email' | 'referred_by'
>;

export const UserData: UserDataType[] = [
	{
		key: 1,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.active,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 2,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.frozen,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 3,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.active,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 4,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.active,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 5,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.suspended,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 6,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.suspended,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 7,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.suspended,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 8,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.frozen,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 9,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.frozen,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 10,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.frozen,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 11,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.frozen,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
	{
		key: 12,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		user_status: userStatusType.frozen,
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		referred_by: 'Steve Thornton',
	},
];
type PaymentDataType = Pick<DataType, 'key' | 'paymentId' | 'paymentDate' | 'email' | 'amount' | 'paymentStatus'>;

export const paymentData: PaymentDataType[] = [
	{
		key: 1,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 2,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 3,

		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 4,

		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 5,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 6,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 7,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 8,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 9,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 10,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 11,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
	{
		key: 12,
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
		email: 'aundry@stymnnect.com',
	},
];

type SubscriptionDataType = Pick<
	DataType,
	'key' | 'name' | 'storage' | 'maxPersonCount' | 'monthlyPrice' | 'annualPrice' | 'status' | 'subsciberCount'
>;

export const subscriptionData: SubscriptionDataType[] = [
	{
		key: 1,
		name: nameType.Student,
		storage: 2,
		maxPersonCount: 1,
		monthlyPrice: 83,
		annualPrice: 7.99,
		status: statusType.active,
		subsciberCount: 10,
	},
	{
		key: 2,
		name: nameType.Pro,
		storage: 5,
		maxPersonCount: 1,
		monthlyPrice: 157,
		annualPrice: 14.99,
		status: statusType.active,
		subsciberCount: 20,
	},
	{
		key: 3,
		name: nameType.Premium,
		storage: 10,
		maxPersonCount: 5,
		monthlyPrice: 365,
		annualPrice: 34.99,
		status: statusType.active,
		subsciberCount: 30,
	},
	{
		key: 4,
		name: nameType.Enterprise,
		storage: 'Unlimited',
		maxPersonCount: 'Unlimited',
		monthlyPrice: 'Not Set',
		annualPrice: 'Not Set',
		status: statusType.in_active,
		subsciberCount: 0,
	},
];
