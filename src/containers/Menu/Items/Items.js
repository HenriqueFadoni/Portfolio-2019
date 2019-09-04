import React from 'react';
import { NavLink } from 'react-router-dom';

import Item from './Item/Item';

const Items = props => {
    const listItems = props.routes.map((route, index) => {
        let render = null;

        if (route.title !== 'RESUME') {
            render = (
                <NavLink
                    to={route.to}
                    className="menu__item--link"
                >
                    {route.title}
                </NavLink>
            );
        } else {
            render = (
                <a
                    className="menu__item--link"
                    target="_blank"
                    href={route.to}
                    rel="noopener noreferrer"
                >
                    {route.title}
                </a>
            );
        }

        return (
            <li className="menu__item" key={index}>
                {render}
            </li>
        );
    });

    return <Item isButtonAct={props.isButtonAct} listItems={listItems} />
};

export default Items;