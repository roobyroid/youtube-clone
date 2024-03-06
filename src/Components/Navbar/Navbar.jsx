import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = ({ setSidebar }) => {
	return (
		<nav className="navbar flex">
			<div className="navbar__left flex">
				<button
					className="navbar__menu-toggle"
					type="button"
					onClick={() => setSidebar((prev) => !prev)}
				>
					<img src={menu_icon} alt="" />
				</button>
				<img className="navbar__logo" src={logo} alt="" />
			</div>

			<div className="navbar__middle flex">
				<div className="navbar__search flex">
					<input
						className="navbar__search-input"
						type="text"
						placeholder="Search"
					/>
					<img className="navbar__search-icon" src={search_icon} alt="" />
				</div>
			</div>

			<div className="navbar__right flex">
				<img src={upload_icon} alt="" />
				<img src={more_icon} alt="" />
				<img src={notification_icon} alt="" />
				<img className="navbar__profile" src={profile_icon} alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
