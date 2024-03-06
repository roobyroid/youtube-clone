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

const Sidebar = ({ sidebar, categoryId, setCategoryId }) => {
	return (
		<aside className={sidebar ? 'sidebar' : 'sidebar sidebar--sm'}>
			<nav className="sidebar__nav">
				<button
					className={`sidebar__item ${categoryId === 0 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(0)}
				>
					<img src={home} alt="" />
					<span>Home</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 20 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(20)}
				>
					<img src={game_icon} alt="" />
					<span>Game</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 2 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(2)}
				>
					<img src={automobiles} alt="" />
					<span>Automobiles</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 17 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(17)}
				>
					<img src={sports} alt="" />
					<span>Sports</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 24 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(24)}
				>
					<img src={entertainment} alt="" />
					<span>Entertainment</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 28 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(28)}
				>
					<img src={tech} alt="" />
					<span>Technology</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 10 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(10)}
				>
					<img src={music} alt="" />
					<span>Music</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 22 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(22)}
				>
					<img src={blogs} alt="" />
					<span>Blogs</span>
				</button>
				<button
					className={`sidebar__item ${categoryId === 25 ? 'active' : ''}`}
					type="button"
					onClick={() => setCategoryId(25)}
				>
					<img src={news} alt="" />
					<span>News</span>
				</button>
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
