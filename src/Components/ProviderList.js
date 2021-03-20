import { React, useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import config from '../config';
import netflixImage from '../assets/netflix2.png';
import primeImage from '../assets/prime2.svg.png';
import Cards from './Card';

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
	const [isMouseHovering, setMouseHovering] = useState(-1);
	const [thumbNailList, setThumbnailList] = useState([]);
	const [Description, setDescription] = useState('');

	useEffect(() => {
		const maxResult = 10;
		const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=Trailer&channelId=${channelId}&key=${apiKey}`;
		axios
			.get(url)
			.then((response) => {
				let data = response.data;
				console.log(data);
				const link = data.items.map((obj) => obj);
				console.log(link);
				const thumbnail = data.items.map(
					(obj) => obj.snippet.thumbnails.default.url
				);
				setThumbnailList(thumbnail);
				setContentList(link);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleMouseEnter = (id, videoId) => {
		const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
		axios
			.get(url)
			.then((response) => {
				setDescription(response.data.items[0].snippet.description);
			})
			.catch((error) => console.log(error));
		setMouseHovering(id);
	};

	return (
		<div>
			<div>
				<img src={getImgByChannel(channelId)} className="title"></img>
			</div>
			<div className="Container">
				<div className="display">
					{contentList.map((link, id) => {
						console.log(Description);
						return (
							<div>
								<div>
									<img
										key={id}
										height="150px"
										className="image mx-2"
										src={link.snippet.thumbnails.high.url}
										onClick={() => {
											console.log(link.id.videoId);
											handleMouseEnter(
												id,
												link.id.videoId
											);
										}}
									></img>
								</div>

								{isMouseHovering === id && (
									<div>
										<Cards description={Description} />
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

{
	/* <iframe
key={id}
className="frame mx-2"
width="200"
height="120"
frameBorder="0"
src={link}
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe> */
}

export default ProviderList;
