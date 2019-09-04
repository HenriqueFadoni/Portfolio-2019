import React from 'react';

const Item = props => (
    <nav
        className={
            props.isButtonAct ?
                'menu__nav--container--active' :
                'menu__nav--container'
        }
    >
        <ul
            className={
                props.isButtonAct ?
                    'menu__list--active' :
                    'menu__list'
            }
        >
            {props.listItems}
        </ul>
    </nav>
);

export default Item;