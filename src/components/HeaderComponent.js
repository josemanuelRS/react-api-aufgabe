import React from 'react';
import hero from '../assets/images/hero.png';

export const HeaderComponent = ({ setCurrentPage }) => {
	return (
		<div className="header">
			<div className="content">		
				<p className="mainText">Build Your Brand With #1 Hiring Expert <span>Freelancer</span> World</p>
				
				<p>
					Work with the best freelance talent from around the world on our secure flexible
					and cost-effective platform hiring expert Freelancer world and you can contact
					us if you don't understand about this applicaction for your asking in here
				</p>
				<a href="#contact">
				<button type="button">Contact Us</button>
				</a>
			</div>

			<div>
				<img src={hero} alt="hero"/>
			</div>
		</div>	
	)
}
