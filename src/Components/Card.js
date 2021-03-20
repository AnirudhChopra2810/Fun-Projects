import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import config from '../config';
import './styles.css';
import axios from 'axios';

const { API_KEY } = config;

const Cards = (props) => {
	const [open, setOpen] = React.useState(false);
	const [description, setDescription] = useState('');
	console.log(props.key);

	const getDescription = () => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoId}&key=${API_KEY}`;
		axios
			.get(url)
			.then((response) => {
				setDescription(response.data.items[0].snippet.description);
			})
			.catch((error) => console.log(error));
	};

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
					<i
						className="info circle icon "
						onClick={getDescription}
					></i>
					<div className="description">Description</div>
				</div>
			}
		>
			<Header icon>
				<Icon name="archive" />
				Description
			</Header>

			<iframe
				className="frame mx-2"
				width="420"
				height="220"
				frameBorder="0"
				style={{ position: 'relative', left: '150px' }}
				src={`https://www.youtube.com/embed/${props.videoId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<Modal.Content>{description}</Modal.Content>
			<Modal.Actions>
				<Button
					basic
					color="red"
					inverted
					onClick={() => setOpen(false)}
				>
					<Icon name="remove" /> close
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default Cards;
