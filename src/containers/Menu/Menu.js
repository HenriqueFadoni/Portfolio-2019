import React, { useState } from 'react';

import Button from './Button/Button';
import Background from './Background/Background';

const Menu = () => {
    const [isButtonAct, setButtonAct] = useState(false);

    const clickHandler = () => setButtonAct(!isButtonAct);

    return (
        <>
            <div className="menu__container">
                <Button
                    isButtonAct={isButtonAct}
                    clickHandler={clickHandler}
                />

                <Background isButtonAct={isButtonAct} />


            </div>
        </>
    );
}

export default Menu;