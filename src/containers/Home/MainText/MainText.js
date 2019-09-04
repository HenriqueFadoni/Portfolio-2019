import React from 'react';

import Name from './Name/Name';
import Title from './Title/Title';
import SubTitle from './Subtitle/SubTitle';

const Text = () => (
    <div className="home__text--container">
        <Name />
        <Title />
        {/* <SubTitle /> */}
    </div>
)

export default Text;