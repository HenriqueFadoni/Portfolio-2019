import React, { useState } from 'react';

import Button from './Button/Button';
import Background from './Background/Background';
import Items from './Items/Items';

const Menu = () => {
    const [isButtonAct, setButtonAct] = useState(false);
    const [routes, setRoutes] = useState([
        { to: "/", title: "HOME" },
        { to: "/about", title: "ABOUT" },
        { to: "/portfolio", title: "PORTFOLIO" },
        { to: "/https://drive.google.com/file/d/1QDj5qjCMVyWiGUe63Jp9K4I6lXv4A97j/view?usp=sharing", title: "RESUME" },
        { to: "/contacts", title: "CONTACTS" }
    ]);

    const clickHandler = () => setButtonAct(!isButtonAct);

    return (
        <>
            <div className="menu__container">
                <Button
                    isButtonAct={isButtonAct}
                    clickHandler={clickHandler}
                />

                <Background isButtonAct={isButtonAct} />

                <Items 
                    isButtonAct={isButtonAct} 
                    routes={routes} 
                />
            </div>
        </>
    );
}

export default Menu;