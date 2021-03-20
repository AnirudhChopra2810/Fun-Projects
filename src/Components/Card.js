import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import './styles.css';

const Cards = (props) => {
	const [open, setOpen] = React.useState(false);
	console.log(props.children);
	return (
		<Modal
			style={{
				position: 'absolute',
				top: '100px',
				left: '400px'
			}}
			basic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
			trigger={
				<div>
					<i className="info circle icon "></i>
					<div className="description">Description</div>
				</div>
			}
		>
			<Header icon>
				<Icon name="archive" />
				Description
			</Header>
			<Modal.Content>{props.description}</Modal.Content>
			<Modal.Actions>
				<Button
					basic
					color="red"
					inverted
					onClick={() => setOpen(false)}
				>
					<Icon name="remove" /> No
				</Button>
				<Button color="green" inverted onClick={() => setOpen(false)}>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default Cards;
