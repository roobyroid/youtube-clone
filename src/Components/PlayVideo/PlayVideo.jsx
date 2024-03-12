import React, { useEffect, useState } from 'react';
import { valueConverter } from '../../utils';
import moment from 'moment';
import {useParams} from 'react-router-dom';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

const API = import.meta.env.VITE_API_KEY;
const PlayVideo = () => {
	const { videoId } = useParams();
	const [apiData, setApiData] = useState(null);
	const [chanelData, setChanelData] = useState(null);
	const [commentsData, setCommentsData] = useState([]);

	const fetchVideoData = async () => {
		const videoDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API}`;

		await fetch(videoDataUrl)
			.then((res) => res.json())
			.then((data) => setApiData(data.items[0]));
	};

	const fetchOtherData = async () => {
		const chanelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API}`;
		const commentsDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API}`;

		await fetch(chanelDataUrl)
			.then((res) => res.json())
			.then((data) => setChanelData(data.items[0]));

		await fetch(commentsDataUrl)
			.then((res) => res.json())
			.then((data) => setCommentsData(data.items));
	};

	useEffect(() => {
		fetchVideoData();
	}, [videoId]);

	useEffect(() => {
		fetchOtherData();
	}, [apiData]);

	return (
		<div className="play-video">
			<iframe
				className="play-video__content"
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<h3>{apiData ? apiData.snippet.title : 'Title not found'}</h3>
			<div className="play-video__info">
				<p>
					{apiData ? valueConverter(apiData.statistics.viewCount) : '25k'}{' '}
					views &bull;{' '}
					{apiData
						? moment(apiData.snippet.publishedAt).fromNow()
						: '2 days ago'}
				</p>
				<div>
					<span>
						<img src={like} alt="" />{' '}
						{apiData ? valueConverter(apiData.statistics.likeCount) : '25k'}
					</span>
					<span>
						<img src={dislike} alt="" />
					</span>
					<span>
						<img src={share} alt="" /> Share
					</span>
					<span>
						<img src={save} alt="" /> Save
					</span>
				</div>
			</div>
			<hr />

			<div className="play-video__publisher">
				<img
					src={apiData ? apiData.snippet.thumbnails.default.url : jack}
					alt=""
				/>
				<div className="play-video__publisher-info">
					<p>{apiData ? apiData.snippet.channelTitle : 'Channel not found'}</p>
					<span>
						{chanelData
							? valueConverter(chanelData.statistics.subscriberCount)
							: '0'}{' '}
						subscribers
					</span>
				</div>
				<button className="play-video__publisher-btn">Subscribe</button>
			</div>

			<div className="play-video__description">
				{apiData
					? apiData.snippet.description.slice(0, 200)
					: 'Description not found'}
				<hr />
				<h4>
					{apiData ? valueConverter(apiData.statistics.commentCount) : '0'}{' '}
					comments
				</h4>
				{commentsData.map((comment) => (
					<div className="play-video__comment" key={comment.id}>
						<img
							src={
								comment.snippet.topLevelComment.snippet.authorProfileImageUrl
									? comment.snippet.topLevelComment.snippet
											.authorProfileImageUrl
									: user_profile
							}
							alt=""
						/>
						<div>
							<h3>
								{comment.snippet.topLevelComment.snippet.authorDisplayName}{' '}
								<span>
									{moment(
										comment.snippet.topLevelComment.snippet.publishedAt
									).fromNow()}
								</span>
							</h3>
							<p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
							<div className="play-video__comment-action">
								<img src={like} alt="" />
								<span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
								<img src={dislike} alt="" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlayVideo;
