import React, { ReactNode, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

const { Header, Sider, Content } = Layout;

const ProfileLayout = ({ children, header }: { children?: ReactNode; header?: JSX.Element }) => {
	const isDesktop = useMediaQuery({ minWidth: 1024 });
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={!isDesktop ? true : collapsed}
				breakpoint={'lg'}
				style={{
					overflow: 'auto',
					height: '100vh',
					// position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
				}}
			>
				<div className='demo-logo-vertical' />
				<Button
					type='text'
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						fontSize: '16px',
						width: 64,
						height: 64,
						color: 'white',
						marginBottom: '10px',
					}}
				/>
				<div
					style={{
						borderBlock: '0.1px solid grey',
						margin: '1px 0 10px',
					}}
				/>
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <UserOutlined />,
							label: 'nav 1',
						},
						{
							key: '2',
							icon: <VideoCameraOutlined />,
							label: 'nav 2',
						},
						{
							key: '3',
							icon: <UploadOutlined />,
							label: 'nav 3',
						},
					]}
				/>
			</Sider>
			<Layout style={{ zIndex: isDesktop ? '50' : '0' }}>
				<div
					style={{
						background: colorBgContainer,
						height: '80px',
					}}
					className='border-b-4 '
				>
					{header}
				</div>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default ProfileLayout;
