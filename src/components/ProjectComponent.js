import React from 'react';
import project1 from '../assets/images/project-01.png';
import project2 from '../assets/images/project-02.png';
import project3 from '../assets/images/project-03.png';
import project4 from '../assets/images/project-04.png';

const projects = [
	{ src: project1, alt: 'Project 1'},	
	{ src: project2, alt: 'Project 2'},
	{ src: project3, alt: 'Project 3'},
	{ src: project4, alt: 'Project 4'}
];

export const ProjectComponent = () => {
	return (
		<div className="projects">
			<p className="secondaryText">Our Projects</p>
			<p>We have been providing great flooring for service</p>
			<p>problem solutions and finished the task</p>
			<div className="project-gallery">
				{projects.map((project, index) => (
					<div key={index} className="project-item">
						<img src={project.src} alt={project.alt} />
					</div>
				))}
			</div>
		</div>

	)

	
}