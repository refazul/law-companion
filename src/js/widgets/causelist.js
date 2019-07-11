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
        <div className={"row causelistitem-wrapper " + (props.evenitem == "yes" ? " evenitem-style " : "" ) + (props.evenitem == "no" ? " unevenitem-style " : "" ) + (props.headeritem == "yes" ? " causelistheaderitem-style " : "" )}>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_itemno}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_caseno}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_parties}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_courtno}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_heading}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_who}</div>
            
        </div>

    );
}

const Causelist = (props) => {
    const listItems = props.items.map((item, index, array) =>
    
        <Causelistitem {...item} headeritem={index == array.length == 0 ? "yes" : "no"} evenitem={index == array.length%2 == 0 ? "yes" : "no"}/>
    );
    return (
        <div className="">

            {listItems}


        </div>
    );
}

export default Causelist;