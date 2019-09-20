import React from 'react'

const Quote = () => {
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
		<div className="about__quote--container">
			<div className="about__quote--text">
				<h1 className="color--white">
					I do not write code professionally,
				</h1>
				<ul className="about__quote--list">
					{renderList}
				</ul>
			</div>
		</div>
	)
}

export default Quote
