import React from 'react';

const Project = props => (
	<div className="portfolio__pinned--item">
		<div>
			<img src="" alt=""/>
		</div>
		<div>
			<h4>{props.name}</h4>
			<div>
				<div></div>
				<h4>{props.tag}</h4>
			</div>
		</div>
	</div>
)

export default Project
