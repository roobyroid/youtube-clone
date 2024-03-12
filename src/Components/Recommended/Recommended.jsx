import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { valueConverter } from '../../utils';
import {Link} from 'react-router-dom';

const API = import.meta.env.VITE_API_KEY;
const Recommended = ({ categoryId }) => {
	const [apiData, setApiData] = useState([]);

	const fetchVideoData = async () => {
		const videoDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=45&key=${API}`;

		await fetch(videoDataUrl)
			.then((res) => res.json())
			.then((data) => setApiData(data.items));
	};

	useEffect(() => {
		fetchVideoData();
	}, [categoryId]);

	return (
		<div className="recommended">
			{apiData.map((item) => {
				return (
					<Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="recommended__item" key={item.id}>
						<img src={item.snippet.thumbnails.high.url} alt="" />
						<div className="recommended__item-info">
							<h4>{item.snippet.title}</h4>
							<p>{item.snippet.channelTitle}</p>
							<p>{valueConverter(item.statistics.viewCount)} views</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Recommended;
