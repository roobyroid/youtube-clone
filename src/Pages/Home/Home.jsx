import React, {useState} from 'react';
import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css';

const Home = ({ sidebar }) => {
	const [categoryId, setCategoryId] = useState(0);

	return (
		<>
			<Sidebar sidebar={sidebar} categoryId={categoryId} setCategoryId={setCategoryId} />
			<div className={sidebar ? 'container' : 'container container--large'}>
				<Feed categoryId={categoryId} />
			</div>
		</>
	);
};

export default Home;
