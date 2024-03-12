import moment from 'moment';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { valueConverter } from '../../utils';
import './Feed.css';

const API = import.meta.env.VITE_API_KEY;

const Feed = ({ categoryId }) => {
	const [data, setData] = useState([]);
	const fetchVideos = async () => {
		const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API}`;

		await fetch(videoListUrl)
			.then((res) => res.json())
			.then((data) => setData(data.items));
	};

	useEffect(() => {
		fetchVideos();
	}, [categoryId]);

	return (
		<div className="feed">
			{data.map((item) => (
				<Link
					to={`/video/${item.snippet.categoryId}/${item.id}`}
					className="card"
					key={item.id}
				>
					<img src={item.snippet.thumbnails.medium.url} alt="" />
					<h2>{item.snippet.title}</h2>
					<h3>{item.snippet.channelTitle}</h3>
					<p>
						{valueConverter(item.statistics.viewCount)} views &bull;{' '}
						{moment(item.snippet.publishedAt).fromNow()}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Feed;
