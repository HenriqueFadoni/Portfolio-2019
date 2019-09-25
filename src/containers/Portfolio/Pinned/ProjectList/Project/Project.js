import React, { useState } from 'react';

const Project = props => {
	const [show, setShow] = useState(false);

	const onHover = () => setShow(true)
	const onHoverLeave = () => setShow(false)

	return (
		<div className="portfolio__pinned--item">
			<div
				className="portfolio__pinned--item-img"
				onMouseEnter={onHover}
				onMouseLeave={onHoverLeave}
			>
				{
					show ?
						<div>
							<button>A</button>
						</div>
						: null
				}

				<img src={props.repoLink} alt="Project Image" />
			</div>
			<div className="portfolio__pinned--item-text">
				<h4>{props.name}</h4>
				<div className="portfolio__pinned--item-tag">
					<div className="portfolio__pinned--item-dot">&nbsp;</div>
					<h4>{props.tag}</h4>
				</div>
			</div>
		</div>
	)
}

export default Project
