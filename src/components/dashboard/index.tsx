import { useCallback, useState } from 'react';
import ProfileLayout from '../layout';
import { Header } from '../layout/header';
import { Table, Dropdown, MenuProps, ConfigProvider, theme, Input, Typography } from 'antd';
import {
	EllipsisOutlined,
	EyeOutlined,
	SubnodeOutlined,
	EditOutlined,
	InteractionOutlined,
	LockOutlined,
	DeliveredProcedureOutlined,
	AuditOutlined,
	PlusSquareOutlined,
	StarOutlined,
	ScanOutlined,
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { UserData, UserDataType, paymentData, subscriptionData, userStatusType } from './data';
import { useNavigate } from 'react-router-dom';
import Modals from '../modals';

const Dashboard = () => {
	const navigate = useNavigate();
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [selectedMenuKey, setSelectedMenuKey] = useState('1');
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [modalData, setModalData] = useState({
		openModal: false,
		modalTitle: '',
		modalType: null,
	});
	const [filteredUserData, setFilteredUserData] = useState(UserData);
	const [filteredPaymentData, setFilteredPaymentData] = useState(paymentData);
	const [filteredSubscriptionData, setFilteredSubscriptionData] = useState(subscriptionData);

	const isDesktop = useMediaQuery({ minWidth: 1024 });
	const scrollY = !isDesktop ? 500 : 500;

	const handleUserSearch = (value) => {
		const filteredData = UserData.filter((item) =>
			Object.values(item).some((val) => val && val.toString().toLowerCase().includes(value.toLowerCase())),
		);
		setFilteredUserData(filteredData);
	};
	const handlePaymentSearch = (value) => {
		const filteredData = paymentData.filter((item) =>
			Object.values(item).some((val) => val && val.toString().toLowerCase().includes(value.toLowerCase())),
		);
		setFilteredPaymentData(filteredData);
	};
	const handleSubscriptionSearch = (value) => {
		const filteredData = subscriptionData.filter((item) =>
			Object.values(item).some((val) => val && val.toString().toLowerCase().includes(value.toLowerCase())),
		);
		setFilteredSubscriptionData(filteredData);
	};

	const handleMenuItemClick = useCallback(
		(key) => {
			switch (key) {
				case '0':
					navigate('/user');
					break;
				case '6':
					setModalData({
						openModal: true,
						modalTitle: 'Manage Subscription',
						modalType: 'manage-subscription',
					});
					break;
				case '7':
					setModalData({
						openModal: true,
						modalTitle: 'Add Storage',
						modalType: 'add-storage',
					});
					break;
				case '8':
					setModalData({
						openModal: true,
						modalTitle: 'Add Free Month',
						modalType: 'add-free-months',
					});
					break;
				default:
					break;
			}
		},
		[navigate],
	);

	const items: MenuProps['items'] = [
		{
			label: 'View Details',
			key: '0',
			style: { padding: '10px 10px' },
			icon: <EyeOutlined />,
			onClick: () => handleMenuItemClick('0'),
		},
		{
			label: 'Edit user',
			key: '1',
			style: { padding: '10px 10px' },
			icon: <EditOutlined />,
		},
		{
			label: 'Recover Trash',
			key: '2',
			style: { padding: '10px 10px' },
			icon: <InteractionOutlined />,
		},
		{
			label: 'Suspend Account',
			key: '3',
			style: { padding: '10px 10px' },
			icon: <LockOutlined />,
		},
		{
			label: 'Migrate Account',
			key: '4',
			style: { padding: '10px 10px' },
			icon: <DeliveredProcedureOutlined />,
		},
		{
			label: 'Reactivate User',
			key: '5',
			style: { padding: '10px 10px' },
			icon: <SubnodeOutlined />,
		},
		{
			label: 'Manage Supscription',
			key: '6',
			style: { padding: '10px 10px' },
			icon: <AuditOutlined />,
			onClick: () => handleMenuItemClick('6'),
		},
		{
			label: 'Add Storage',
			key: '7',
			style: { padding: '10px 10px' },
			icon: <PlusSquareOutlined />,
			onClick: () => handleMenuItemClick('7'),
		},
		{
			label: 'Add free months',
			key: '8',
			style: { padding: '10px 10px' },
			icon: <StarOutlined />,
			onClick: () => handleMenuItemClick('8'),
		},
		{
			label: 'Show Payment History',
			key: '9',
			style: { padding: '10px 10px' },
			icon: <ScanOutlined />,
		},
	];

	const userColumns = [
		{
			title: 'User',
			dataIndex: 'user',
			width: 150,
			render: (text, record) => (
				<div>
					<div>{record.user}</div>
					<div className='text-[12px] text-gray-500'>{record.email}</div>
				</div>
			),
		},
		{
			title: 'Administrator',
			dataIndex: 'administrator',
			width: 150,
		},
		{
			title: 'Status',
			dataIndex: 'user_status',
			width: 150,
		},
		{
			title: 'Date Created',
			dataIndex: 'date_created',
			width: 150,
		},
		{
			title: 'Next date update payment',
			dataIndex: 'next_date_update_payment',
			width: 150,
		},
		{
			title: 'Referred By',
			dataIndex: 'referred_by',
			width: 150,
		},
		{
			title: 'Action',
			dataIndex: 'action',
			width: 100,
			render: (text, record: UserDataType) =>
				record.user_status === userStatusType.frozen || record.user_status === userStatusType.suspended ? (
					<Dropdown
						menu={{ items: items.filter((item) => item.key !== '3') }}
						trigger={['click']}
						className='cursor-pointer'
						placement='bottomLeft'
					>
						<div className='center-icon'>
							<EllipsisOutlined style={{ fontSize: '30px' }} />
						</div>
					</Dropdown>
				) : (
					<Dropdown
						menu={{ items: items.filter((item) => item.key !== '5') }}
						trigger={['click']}
						className='cursor-pointer'
						placement='bottomLeft'
					>
						<div className='center-icon'>
							<EllipsisOutlined style={{ fontSize: '30px' }} />
						</div>
					</Dropdown>
				),
		},
	];

	const paymentsColumns = [
		{
			title: 'Payment Id',
			dataIndex: 'paymentId',
			width: 150,
		},
		{
			title: 'Payment date',
			dataIndex: 'paymentDate',
			width: 150,
		},
		{
			title: 'User email',
			dataIndex: 'email',
			width: 150,
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			width: 150,
		},
		{
			title: 'Payment Status',
			dataIndex: 'paymentStatus',
			width: 150,
		},
	];

	const subscriptionColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			width: 150,
		},
		{
			title: 'Storage',
			dataIndex: 'storage',
			width: 150,
			render: (value) => (typeof value === 'string' ? value : `${value} TB`),
		},
		{
			title: 'Max Person Count',
			dataIndex: 'maxPersonCount',
			width: 150,
		},
		{
			title: 'Monthly Price',
			dataIndex: 'monthlyPrice',
			width: 150,
			render: (value) => (typeof value === 'string' ? value : `$${value}`),
		},
		{
			title: 'Annual Price',
			dataIndex: 'annualPrice',
			width: 150,
			render: (value) => (typeof value === 'string' ? value : `$${value}`),
		},
		{
			title: 'Status',
			dataIndex: 'status',
			width: 150,
		},
		{
			title: 'Subsciber Count',
			dataIndex: 'subsciberCount',
			width: 150,
		},
	];

	const getMenuContent = () => {
		switch (selectedMenuKey) {
			case '1':
				return (
					<>
						<div className='flex flex-row justify-between'>
							{isDesktop && <Typography.Title level={3}>Monthly User</Typography.Title>}
							<Input.Search
								style={{ width: 300, marginBottom: 16 }}
								placeholder='Search by User, Administrator, Status, Date Created, Next date update payment, Referred By'
								enterButton
								onSearch={(value) => handleUserSearch(value)}
							/>
						</div>

						<div>
							<Table dataSource={filteredUserData} scroll={{ x: 1000, y: scrollY }} columns={userColumns} />
						</div>
					</>
				);

			case '2':
				return (
					<>
						<div className='flex flex-row justify-between'>
							{isDesktop && <Typography.Title level={3}>Annual User</Typography.Title>}
							<Input.Search
								style={{ width: 300, marginBottom: 16 }}
								placeholder='Search by User, Administrator, Status, Date Created, Next date update payment, Referred By'
								enterButton
								onSearch={(value) => handleUserSearch(value)}
							/>
						</div>

						<div>
							<Table dataSource={filteredUserData} scroll={{ x: 1000, y: scrollY }} columns={userColumns} />
						</div>
					</>
				);
			case '3':
				return (
					<>
						<div className='flex flex-row justify-between'>
							{isDesktop && <Typography.Title level={3}>Payments</Typography.Title>}
							<Input.Search
								style={{ width: 300, marginBottom: 16 }}
								placeholder='Search by User, Administrator, Status, Date Created, Next date update payment, Referred By'
								enterButton
								onSearch={(value) => handlePaymentSearch(value)}
							/>
						</div>

						<div>
							<Table dataSource={filteredPaymentData} scroll={{ x: 1000, y: scrollY }} columns={paymentsColumns} />
						</div>
					</>
				);
			case '4':
				return (
					<>
						<div className='flex flex-row justify-between'>
							{isDesktop && <Typography.Title level={3}>Subscription</Typography.Title>}
							<Input.Search
								style={{ width: 300, marginBottom: 16 }}
								placeholder='Search by User, Administrator, Status, Date Created, Next date update payment, Referred By'
								enterButton
								onSearch={(value) => handleSubscriptionSearch(value)}
							/>
						</div>

						<div>
							<Table dataSource={filteredSubscriptionData} scroll={{ x: 1000, y: scrollY }} columns={subscriptionColumns} />
						</div>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
				components: {
					Divider: {
						colorBgContainer: '#001529',
					},
				},
			}}
		>
			<ProfileLayout
				header={<Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}
				selectedMenuKey={selectedMenuKey}
				setSelectedMenuKey={setSelectedMenuKey}
			>
				{getMenuContent()}
				{modalData.openModal && (
					<Modals
						open={modalData.openModal}
						onClose={() => setModalData((prevData) => ({ ...prevData, openModal: false }))}
						title={modalData.modalTitle}
						type={modalData.modalType}
					/>
				)}
			</ProfileLayout>
		</ConfigProvider>
	);
};

export default Dashboard;
