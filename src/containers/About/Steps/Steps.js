import React from 'react'

const Steps = () => {
	const list = [
		{
			number: '01.',
			title: 'Research',
			message: `
			Understand the client’s subject matter completely and build on the knowledge related to it, 
			becoming intimately familiar with the subject matter. Determine methods to address the 
			specific customer’s needs and requirements.
			`
		},
		{
			number: '02.',
			title: 'Design',
			message: `
			Misleadingly thought of as the superficial appearance of a product, design actually encompasses
			 a lot more. It is a cross functional process that includes market research, technical research,
			 design of a concept, and prototype mockup.
			`
		},
		{
			number: '03.',
			title: 'Develop',
			message: `
			Findings from the research and design phases are utilized for the production of specific products
			 including materials, systems, and methods. Engineer utilizing the research and designs to produce
			 commercial products for the customer.
			`
		}
	]

	const renderList = list.map((item, i) => (
		<div 
			key={i}
			className="about-steps__item"
		>
			<div className="about-steps__item--title">
				<span>{item.number}</span>
				<h3>{item.title}</h3>
			</div>
			<div className="about-steps__item--paragraph">
				<p>{item.message}</p>
			</div>
		</div>
	))

	return (
		<div className="about-steps__container">
			{renderList}
		</div>
	)
}

export default Steps
