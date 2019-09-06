import React, { useState } from 'react';

// Components
import HamburgerBtn from './HamburgerBtn/HamburgerBtn';
import Background from './Background/Background';
import Content from './Content/Content';

const Menu = () => {
    const [isButtonAct, setButtonAct] = useState(false);

    const clickHandler = () => setButtonAct(!isButtonAct);

    return (
        <div className="menu__container">
            <HamburgerBtn
                isButtonAct={isButtonAct}
                clickHandler={clickHandler}
            />
            <Content isButtonAct={isButtonAct} />
            <Background isButtonAct={isButtonAct} />
        </div>
    );
}

export default Menu;