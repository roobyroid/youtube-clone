import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<nav className="sidebar__nav">
				<div className="sidebar__item">
					<img src={home} alt="" />
					<span>Home</span>
				</div>
				<div className="sidebar__item">
					<img src={game_icon} alt="" />
					<span>Game</span>
				</div>
				<div className="sidebar__item">
					<img src={automobiles} alt="" />
					<span>Automobiles</span>
				</div>
				<div className="sidebar__item">
					<img src={sports} alt="" />
					<span>Sports</span>
				</div>
				<div className="sidebar__item">
					<img src={entertainment} alt="" />
					<span>Entertainment</span>
				</div>
				<div className="sidebar__item">
					<img src={tech} alt="" />
					<span>Technology</span>
				</div>
				<div className="sidebar__item">
					<img src={music} alt="" />
					<span>Music</span>
				</div>
				<div className="sidebar__item">
					<img src={blogs} alt="" />
					<span>Blogs</span>
				</div>
				<div className="sidebar__item">
					<img src={news} alt="" />
					<span>News</span>
				</div>
			</nav>
			<hr />
			<div className="sidebar__list">
				<h3>Subscribed</h3>
				<ul>
					<li className="sidebar__item">
						<img src={jack} alt="" />
						<span>PewDiePie</span>
					</li>
					<li className="sidebar__item">
						<img src={simon} alt="" />
						<span>MrBeast</span>
					</li>
					<li className="sidebar__item">
						<img src={tom} alt="" />
						<span>Justin Beiber</span>
					</li>
					<li className="sidebar__item">
						<img src={megan} alt="" />
						<span>5-Minute Crafts</span>
					</li>
					<li className="sidebar__item">
						<img src={cameron} alt="" />
						<span>Nas Daily</span>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
