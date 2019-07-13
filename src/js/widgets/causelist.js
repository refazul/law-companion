import React from 'react';



const Causelistitem = (props) => {
    if(props.type =='causelistheaderitem'){
        <div className="causelistheaderitem-style"></div>
    }
    else if(props.type =='evenitem'){
        <div className="evenitem-style"></div>
    }
    else if(props.type =='unevenitem'){
        <div className="unevenitem-style"></div>
    }

    return (
        <div className={"causelistitem-wrapper displaytable" + (props.evenitem == "yes" ? " evenitem-style " : "" ) + (props.evenitem == "no" ? " unevenitem-style " : "" ) + (props.headeritem == "yes" ? " causelistheaderitem-style " : "" )}>
            <div className="causelistcolumn tablecell verticalmiddle">{props.causelist_itemno}</div>
            <div className="causelistcolumn tablecell verticalmiddle">{props.causelist_caseno}</div>
            <div className="causelistcolumn tablecell verticalmiddle">{props.causelist_parties}</div>
            <div className="causelistcolumn tablecell verticalmiddle">{props.causelist_courtno}</div>
            <div className="causelistcolumn tablecell verticalmiddle">{props.causelist_heading}</div>
            <div className="causelistcolumn tablecell verticalmiddle">{props.causelist_who}</div>
            
        </div>

    );
}

const Causelist = (props) => {
    const listItems = props.items.map((item, index, array) =>
    
        <Causelistitem {...item} headeritem={index == 0 ? "yes" : "no"} evenitem={index %2 == 0 ? "yes" : "no"} />
    );
    return (
        <div className="">

            {listItems}


        </div>
    );
}

export default Causelist;