import { React, useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import config from '../config';
import netflixImage from '../assets/netflix.png';
import primeImage from '../assets/prime.jpg';
import Card from 'react-bootstrap/Card';

const { YT_CHANNEL_IDS } = config;

function getImgByChannel(channelId) {
	if (channelId == YT_CHANNEL_IDS.NETFLIX) {
		return netflixImage;
	} else if (channelId == YT_CHANNEL_IDS.AMAZON_PRIME) {
		return primeImage;
	}
	return null;
}

const ProviderList = ({ apiKey, channelId }) => {
	const [contentList, setContentList] = useState([]);

	useEffect(() => {
		const maxResult = 10;
		const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResult}&q=Trailer&channelId=${channelId}&key=${apiKey}`;
		axios
			.get(url)
			.then((response) => {
				let data = response.data;
				const link = data.items.map(
					(obj) => 'https://www.youtube.com/embed/' + obj.id.videoId
				);
				setContentList(link);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<div>
				<img src={getImgByChannel(channelId)} className="title"></img>
			</div>
			<div className="Container">
				<div className="display">
					{contentList.map((link, id) => {
						return (
							<Card
								className="Card mx-2"
								key={id}
								style={{ width: '415px', height: '200px' }}
							>
								<Card.Body>
									<iframe
										key={id}
										className="frame"
										width="200"
										height="120"
										frameBorder="0"
										src={link}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</Card.Body>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProviderList;
