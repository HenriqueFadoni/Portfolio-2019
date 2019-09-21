import React from 'react'

const Steps = () => {
	const list = [
		{
			number: '01.',
			title: 'Research',
			message: `
				In-depth analysis of the client's needs and requirements. 
				Leading to extensive learning about the subject matter until 
				becoming ultimately familiar with the topic. Plan and determine 
				the best approach to the specific task proposed by the customer.
			`
		},
		{
			number: '02.',
			title: 'Design',
			message: `
				Designing, in a nutshell, comprise not only from determining the 
				superficial appearance of a product. But also by involving market 
				research, technical research, design of a concept, and prototype mockup. 
				It is worth saying designing is a cross-functional process which co-depend 
				in other areas.
			`
		},
		{
			number: '03.',
			title: 'Develop',
			message: `
				All the data collected during the research and design phases, including 
				materials and methods, are then manipulated for the production of specific 
				profitable products for the customer.
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
