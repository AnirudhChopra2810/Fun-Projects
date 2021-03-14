import { React, useState } from 'react';
import ProviderList from './ProviderList';
import config from '../config';

const { YT_CHANNEL_IDS, API_KEY } = config;

const App = () => {
	return (
		<div>
			<ProviderList channelId={YT_CHANNEL_IDS.NETFLIX} apiKey={API_KEY} />
			<ProviderList
				channelId={YT_CHANNEL_IDS.AMAZON_PRIME}
				apiKey={API_KEY}
			/>
		</div>
	);
};

export default App;
