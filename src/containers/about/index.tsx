import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../components/gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoLinkedin,
} from 'react-icons/io';
import {
	AboutWrapper,
	AboutImage,
	AboutPageTitle,
	AboutDetails,
	SocialProfiles,
} from './style';

const SocialLinks = [
	{
		icon: <IoLogoFacebook />,
		url: 'https://www.facebook.com/vehicle24x7/',
		tooltip: 'Facebook',
	},
	{
		icon: <IoLogoInstagram />,
		url: 'https://www.instagram.com/vehicle24x7/',
		tooltip: 'Instagram',
	},
	{
		icon: <IoLogoTwitter />,
		url: 'https://www.tumblr.com/blog/vehicle24x7',
		tooltip: 'Twitter',
	},
	{
		icon: <IoLogoLinkedin />,
		url: 'https://www.linkedin.com/company/vehicle24x7',
		tooltip: 'Linked In',
	},
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			avatar: file(absolutePath: { regex: "/about.jpg/" }) {
				childImageSharp {
					gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
				}
			}
			site {
				siteMetadata {
					author
					about
				}
			}
		}
	`);

	return (
		<AboutWrapper>
			<AboutPageTitle>
				<h2>About Vehicle 24x7</h2>
				<p>
					Keep track of fuel consumption (Refueling) is the most important part of your vehicle in terms of financial records. It will help you to calculate the monthly expenses and work as a Mileage Calculator of your vehicle. Vehicle 24x7 is a fuel management app for you.
				</p>
			</AboutPageTitle>

			<AboutImage>
				<GatsbyImage src={data.avatar.childImageSharp.gatsbyImageData} alt='author' />
			</AboutImage>

			<AboutDetails>
				<h2><b>Save money on your vehicle ✌🚗💰</b></h2><br />We help you to maintain fuel consumption, refueling,Mileage Calculator, fuel costs, services, maintenance and other expenses.<br /><br /><h2><b>🚚 RTO vehicle information app</b></h2><br />With Vehicle 24x7 app you can find rto information from vehicle number.<br /><br /><h2><b>🏍 driving licence check india</b></h2><br />Vehicle 24x7 also provide feature of driving licence check using driving licence number.<br /><br /><h2><b>🚗 Refueling (fuel manager | fuel log)</b></h2><br />Keep track of fuel consumption (Refueling) is the most important part of your vehicle in terms of financial records. It will help you to calculate the monthly expenses and work as a Mileage Calculator of your vehicle. Vehicle 24x7 is a fuel management app for you.<br /><br /><h2><b>🚗 Services</b></h2><br />If you have a vehicle then you may know about the benefits of on-time services of your vehicle, if you do regular maintenance and services of your vehicle then your vehicle performs better and consume less fuel and save your money. But due to our busy schedule, we miss or forgot our vehicle's service which causes critical damage to our vehicle or heavy fuel consumption. But vehicle 24x7 will remind you of the next service of your vehicles.<br /><br /><h2><b>🚀 expense tracker/expense manager</b></h2><br />We provide you the solution for vehicle expenses. You can record the extra expenses of your vehicle. Vehicle 24x7 is a complete vehicle expense tracker. You can track complete car expenses.<br /><br /><h2><b>⛽ Daily fuel price update (fuel costs)</b></h2><br />Check daily updated petrol price, diesel price, CNG price, LPG price, AutoGas price any time. fuel price India petrol diesel CNG is updated daily basis and you can check the city wisely. currently, we offer daily fuel prices in India, but we are expanding vehicle 24x7 to cover more big countries for daily fuel price updates.<br /><br /><h2><b>🚙 Manage vehicle</b></h2><br />Manage your multiple vehicles in one place.<br /><br /><h2><b>🧾 Manage record</b></h2><br />Now it's time to manage fuel consumption records digitally. Leave your old methods to manage fuel consumption (note down in a diary, send to someone on WhatsApp, etc.) And use a new digital way to manage records and calculate mileage automatically. Maintain fuel consumption, accident record, services record and other expense records in 1 place. You can get a list of your previously added record anytime.<br /><br /><h2><b>🎯 mileage calculator/mileage tracker</b></h2><br />Track mileage of your vehicle anytime. Mileage will be calculated based on your fuel record. To better track, your vehicle's mileage regularly adds fuel records in the Vehicle 24x7 app.<br /><br /><h2><b>💰 Cost calculator (fuel costs)</b></h2><br />We will also show you current month's spends (including fuel cost, accident cost, services cost and other expenses cost) and compare it with previous month's spends and notify you whether your vehicle is working properly or not.<br /><br /><h2><b>⛽ petrol pumps nearby</b></h2><br />You can also find nearby petrol pump, gas stations, diesel pump in Vehicle 24x7 app.<br /><br /><h2><b>💭Related Queries:</b></h2><br />bike mileage calculator<br />car mileage calculator<br />car mileage calculator india<br />fuel consumption calculator<br />fuel consumption monitoring<br />fuel consumption tracker<br />mileage calculator app

				<SocialProfiles>
					<SocialProfile items={SocialLinks} />
				</SocialProfiles>
			</AboutDetails>
		</AboutWrapper>
	);
};

export default About;
