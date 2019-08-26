import React from 'react';
import Accordionitem from './accordionitem';

const Accordion = (props) => {
    const accordion_items = props.items.map((item) =>
        <Accordionitem {...item}/>
    );
    return (
        <div className="accordion" id="accordionExample">
            {accordion_items}
        </div>
    );
}

export default Accordion;



