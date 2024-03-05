import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = () => {
	return (
		<nav class="navbar flex">
			<div className="navbar__left flex">
				<img className="navbar__menu-icon" src={menu_icon} alt="" />
				<img className="navbar__logo" src={logo} alt="" />
			</div>

			<div className="navbar__middle flex">
        <div className="navbar__search flex">
          <input className="navbar__search-input" type="text" placeholder="Search" />
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