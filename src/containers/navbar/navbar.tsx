import React, { useState } from 'react';
import { Link } from 'gatsby';
import {IoIosSearch, IoIosClose, IoLogoLinkedin} from 'react-icons/io';
import { DrawerProvider } from '../../components/drawer/drawer-context';
import SocialProfile from '../../components/social-profile/social-profile';
import Menu from './menu';
import Drawer from './drawer';
import SearchContainer from '../search/search';
import HeaderWrapper, {
	HeaderTop,
	TopBarWrapper,
	MobileMenu,
	Logo,
	MenuWrapper,
	NavSearchButton,
	NavSearchWrapper,
	SearchCloseButton,
	NavSearchFromWrapper,
	SocialProfileWrapper,
} from './navbar.style';
import logoImage from '../../images/logo.svg';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

type NavbarProps = {
	className?: string;
};

const MenuItems = [
	{
		label: 'Home',
		url: '/',
	},
	{
		label: 'About',
		url: '/about',
	},
	{
		label: 'Contact',
		url: '/contact',
	},
	{
		label: 'Download App',
		url: 'https://www.vehicle24x7.com/',
	},
];

const SocialLinks = [
	{
		icon: <IoLogoFacebook />,
		url: 'https://www.facebook.com/vehicle24x7/',
		tooltip: 'Vehicle 24x7 on Facebook',
	},
	{
		icon: <IoLogoInstagram />,
		url: 'https://www.instagram.com/vehicle24x7/',
		tooltip: 'Vehicle 24x7 on Instagram',
	},
	{
		icon: <IoLogoTwitter />,
		url: 'https://twitter.com/Vehicle24x7',
		tooltip: 'Vehicle 24x7 on Twitter',
	},
	{
		icon: <IoLogoLinkedin />,
		url: 'https://www.linkedin.com/company/vehicle24x7/',
		tooltip: 'Vehicle 24x7 on Linkedin',
	},
];

const Navbar: React.FunctionComponent<NavbarProps> = ({
	className,
	...props
}) => {
	const [state, setState] = useState({
		toggle: false,
		search: '',
	});

	const toggleHandle = () => {
		setState({
			...state,
			toggle: !state.toggle,
		});
	};

	// Add all classs to an array
	const addAllClasses = ['header'];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<HeaderWrapper className={addAllClasses.join(' ')} {...props}>
			<HeaderTop>
				<TopBarWrapper>
					<MobileMenu>
						<DrawerProvider>
							<Drawer items={MenuItems} logo={logoImage} />
						</DrawerProvider>
					</MobileMenu>

					<Logo>
						<Link to='/'>
							<img src={logoImage} alt='logo' />
						</Link>
					</Logo>

					<MenuWrapper>
						<Menu items={MenuItems} />
					</MenuWrapper>

					<NavSearchButton
						type='button'
						aria-label='search'
						onClick={toggleHandle}
					>
						<IoIosSearch size='23px' />
					</NavSearchButton>

					<SocialProfileWrapper>
						<SocialProfile items={SocialLinks} />
					</SocialProfileWrapper>
				</TopBarWrapper>
				<NavSearchWrapper className={state.toggle === true ? 'expand' : ''}>
					<NavSearchFromWrapper>
						<SearchContainer />
						<SearchCloseButton
							type='submit'
							aria-label='close'
							onClick={toggleHandle}
						>
							<IoIosClose />
						</SearchCloseButton>
					</NavSearchFromWrapper>
				</NavSearchWrapper>
			</HeaderTop>
		</HeaderWrapper>
	);
};

export default Navbar;
