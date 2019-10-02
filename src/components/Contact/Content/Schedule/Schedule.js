import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Schedule = () => {
	const [isHover, setIsHover] = useState(false)
	const calendar = useRef(null)

	const onHoverHandler = () => setIsHover(!isHover)

	const clickHandle = () => calendar.current.click()

	return (
		<div
			className="contact__content--schedule"
			onMouseOver={onHoverHandler}
			onMouseOut={onHoverHandler}
			onClick={clickHandle}
		>
			<a
				className={isHover ? null : 'calendar-bounce'}
				href="https://calendly.com/henriquefadoni"
				target="_blank"
				rel="noopener noreferrer"
				ref={calendar}
			>
				<FontAwesomeIcon
					color="white"
					size="10x"
					icon={faCalendarAlt}
				/>
			</a>
			<h1>Schedule an Interview Now!</h1>
		</div>
	)
}

export default Schedule
