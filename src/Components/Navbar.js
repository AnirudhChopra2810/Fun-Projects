import React from 'react';
import { Icon, Menu, Responsive } from 'semantic-ui-react';

const Navbar = () => {
	return (
		<Menu style={{ backgroundColor: '#403f3d' }}>
			<Icon
				name="video"
				style={{
					position: 'relative',
					left: '620px',
					top: '5px',
					height: '40px'
				}}
			/>
			<h1 style={{ position: 'relative', left: '510px' }}>
				Know your shows
			</h1>
		</Menu>
	);
};

export default Navbar;
