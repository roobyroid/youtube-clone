import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
const PlayVideo = () => {
	return (
		<div className="play-video">
      <video className="play-video__content" src={video1} controls autoPlay muted></video>
			<h3>Lorem ipsum</h3>
			<div className="play-video__info">
				<p>15k views &bull; 2 days ago</p>
				<div>
					<span>
						<img src={like} alt="" /> 125
					</span>
					<span>
						<img src={dislike} alt="" /> 25
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
				<img src={jack} alt="" />
        <div className='play-video__publisher-info'>
					<p>Jack Johnson</p>
					<span>15k subscribers</span>
				</div>
        <button className='play-video__publisher-btn'>Subscribe</button>
			</div>

			<div className="play-video__description">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
					dolor sit amet consectetur adipisicing elit.
				</p>
				<hr />
				<h4>15 comments</h4>
				<div className="play-video__comment">
					<img src={user_profile} alt="" />
					<div>
						<h3>
							Jack Nicholson <span>2 days ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="play-video__comment-action">
							<img src={like} alt="" />
							<span>244</span>
							<img src={dislike} alt="" />
						</div>
					</div>
				</div>
				<div className="play-video__comment">
					<img src={user_profile} alt="" />
					<div>
						<h3>
							Jack Nicholson <span>2 days ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="play-video__comment-action">
							<img src={like} alt="" />
							<span>244</span>
							<img src={dislike} alt="" />
						</div>
					</div>
				</div>
				<div className="play-video__comment">
					<img src={user_profile} alt="" />
					<div>
						<h3>
							Jack Nicholson <span>2 days ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="play-video__comment-action">
							<img src={like} alt="" />
							<span>244</span>
							<img src={dislike} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayVideo;
