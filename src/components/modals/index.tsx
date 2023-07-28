import { Col, InputNumber, Row, Slider, Select, Modal, Button } from 'antd';
import { useState } from 'react';
import type { SliderMarks } from 'antd/es/slider';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

export type ModalType = 'add-storage' | 'add-free-months' | 'manage-subscription';
const Modals = ({ open, onClose, title, type }: { open: boolean; onClose: Function; title: string; type?: ModalType }) => {
	const [inputValue, setInputValue] = useState(1);
	const isMobile = useMediaQuery({ minWidth: 767 });

	const onChange = (newValue: number) => {
		setInputValue(newValue);
	};

	// const marks: SliderMarks = {
	// 	0: '0°C',
	// 	26: '26°C',
	// 	37: '37°C',
	// 	100: {
	// 		style: {
	// 			color: '#f50',
	// 		},
	// 		label: <strong>100°C</strong>,
	// 	},
	// };
	return (
		<>
			<Modal
				title={title}
				centered
				open={open}
				onOk={() => onClose(false)}
				onCancel={() => onClose(false)}
				footer={[
					<Button key='back' onClick={() => onClose(false)} style={{ marginTop: '10px' }}>
						cancel
					</Button>,
					<Button key='submit' type='primary' onClick={() => onClose(false)} className='bg-[#6576ff]' style={{ marginTop: '10px' }}>
						Submit
					</Button>,
				]}
			>
				{type === 'add-storage' && (
					<Col>
						<Col>
							<label>Enter the Amount of storage you want to add</label>
						</Col>
						<Col>
							<InputNumber min={1} max={100} value={inputValue} onChange={onChange} addonAfter={'TB'} />
						</Col>
					</Col>
				)}
				{type === 'add-free-months' && (
					<Col>
						<Col>
							<label>Enter the Free Months</label>
						</Col>
						<Col>
							<InputNumber min={1} max={100} value={inputValue} onChange={onChange} addonAfter={'Month'} />
						</Col>
					</Col>
				)}
				{type === 'manage-subscription' && (
					<Select
						showSearch
						style={{ width: 200 }}
						placeholder='Search to Select'
						optionFilterProp='children'
						filterOption={(input, option) => (option?.label ?? '').includes(input)}
						filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
						options={[
							{
								value: '1',
								label: 'Student',
							},
							{
								value: '2',
								label: 'Pro',
							},
							{
								value: '3',
								label: 'Premium',
							},
							{
								value: '4',
								label: 'Enterprise',
							},
						]}
					/>
				)}
			</Modal>
		</>
	);
};

export default Modals;
