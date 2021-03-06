import React from 'react'

const InteractiveText = () => {
	const list = [
		'I bring dreams to reality!',
		'I create products!',
		'I change lives!'
	]

	const renderList = list.map((item, i) => (
		<li key={i}>
			<h1 className="color--white">
				{item}
			</h1>
		</li>
	))

	return (
		<div className="about__quote--list-container">
			<ul className="about__quote--list">
				{renderList}
			</ul>
		</div>
	)
}

export default InteractiveText
