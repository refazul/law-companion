import React from 'react';



const Causelistitem = (props) => {
    return (
        <div className="row causelist-wrapper">
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_itemno}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_caseno}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_parties}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_courtno}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_heading}</div>
            <div className="col-sm-2 col-md-2 col-lg-2">{props.causelist_who}
            </div>
        </div>

    );
}

const Causelist = (props) => {
    const listItems = props.items.map((item) =>
        <Causelistitem {...item} />
    );
    return (
        <div className="">

            {listItems}


        </div>
    );
}

export default Causelist;