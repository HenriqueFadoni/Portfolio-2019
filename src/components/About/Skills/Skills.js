import React from 'react'

import SkillTitle from './SkillTitle/SkillTitle'
import DevMessage from './DevMessage/DevMessage'
import Subjects from './Subjects/Subjects'

const Skills = () => (
	<section className="about-skills__container">
		<SkillTitle />
		<DevMessage />
		<Subjects />
	</section>
)

export default Skills
