import React from 'react';
import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css';

const Home = ({ sidebar }) => {
	return (
		<>
			<Sidebar sidebar={sidebar} />
			<div className={sidebar ? 'container' : 'container container--large'}>
				<Feed />
			</div>
		</>
	);
};

export default Home;
