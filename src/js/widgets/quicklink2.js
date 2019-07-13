import React from 'react';


const Quicklinkitem = (props) => {
    return (
        <div>
            <div className={(props.lastitem == "yes" ? " lastitem-style " : "") + " quicklink2item-wrapper"}>
                <div>
                    {props.text1}
                </div>
                <div>
                    {props.text2}
                </div>
                <div>
                    <button type="button" className="btn btn-primary quicklink2-button"><i class="fas fa-print"></i>&nbsp;&nbsp;Print Mention Slip</button>
                </div>
            </div>


        </div>


    );
}

const Quicklink2 = (props) => {
    const listItems = props.items.map((item, index, array) =>
        <Quicklinkitem {...item} lastitem={index == array.length - 1 ? "yes" : "no"} />

    );



    return (
        <div className="sidebaritem-wrapper " style={{ border: "1px solid lightgray" }}>
            <div className="sidebarheader">Extension Reminder</div>
            <div className="secondaryheader-items">
                {listItems}
            </div>
            <div className="textright">
                <div className="inline ">VIEW ALL</div>

                <i className="inline fas fa-chevron-right"></i>
            </div>
        </div>


    );
}

export default Quicklink2;