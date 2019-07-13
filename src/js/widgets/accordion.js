import React from 'react';

const Accordionitem = (props) => {
    return (<div>

        <div className="card accordion-style">

            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button style={{ width: '100%' }} className="btn btn-link " type="button" data-toggle="collapse" data-target={'#' + props.id} aria-expanded="true" aria-controls="collapseOne">
                        <div className="">
                            <div className=""><a className="colored-link" href="#">{props.accrodionheader}</a></div>
                        </div>
                    </button>
                </h2>
            </div>

            <div id={props.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body card-style">
                    <div className="card-section">
                        <h4>{props.text1}</h4>
                        <h5>{props.text2}</h5>
                        <h4>{props.text3}</h4>
                        <h5>{props.text4}</h5>
                        
                    </div>
                    <div className="card-section">
                        
                    </div>
                    <div className="card-section">{props.textbody}</div>
                    

                </div>
            </div>
        </div>
    </div>
    );
}

const Accordion = (props) => {
    const accordion_items = props.items.map((item) =>
        <Accordionitem {...item} />
    );
    return (
        <div className="accordion-wrapper" id="accordionExample">
            <div className="infotext-wrapper">
                <div>{props.infotext1}</div>
                <div>{props.infotext2}</div>
            </div>
            {accordion_items}
        </div>
    );
}

export default Accordion;



