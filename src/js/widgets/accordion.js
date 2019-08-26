import React from 'react';
import Dropdown from 'dropdown';

import { accordion_dropdown1_data, accordion_dropdown2_data } from '../data';
const Accordionitem = (props) => {
    return (
        <div className="card accordion-style">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button style={{ width: '100%' }} className="btn btn-link " type="button" data-toggle="collapse" data-target={'#' + props.id} aria-expanded="true" aria-controls="collapseOne">
                        <div className="row ">
                            <div className="col-sm-2 col-md-2 col-lg-2 table-text"><a className="colored-link" href="#">{props.item_number}</a></div>
                            <div className="col-sm-2 col-md-2 col-lg-2 table-text">{props.case_number}</div>
                            <div className="col-sm-2 col-md-2 col-lg-2 table-text">{props.parties}</div>
                            <div className="col-sm-2 col-md-2 col-lg-2 table-text">{props.court_number}</div>
                            <div className="col-sm-2 col-md-2 col-lg-2 table-text">{props.heading}</div>
                            <div className="col-sm-2 col-md-2 col-lg-2 table-text">{props.for}</div>
                        </div>
                    </button>
                </h2>
            </div>

            <div id={props.id} className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body card-style row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="margin_bottom_ten">
                            Add order of the Hon'ble Court:
                        </div>
                        <div className="margin_bottom_twenty">
                            <Dropdown {...accordion_dropdown1_data} />
                        </div>
                        <div className="margin_bottom_ten">
                            Add duration:
                        </div>
                        <div className="margin_bottom_twenty">
                            <Dropdown {...accordion_dropdown2_data} />
                        </div>
                        <div className="margin_bottom_twenty margin_top_ten">
                            <button type="button" className="btn btn-info">PRINT EXTENSION LIST</button>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div>
                            Judges of the Hon'ble Court:
                        </div>
                        <div>
                            <input type="text" class="form-control" placeholder="Mr. Justice Md. Rezaul Haque" aria-label="Mr. Justice Md. Rezaul Haque" aria-describedby="basic-addon2"></input>
                        </div>
                        <div>&</div>
                        <div>
                            <input type="text" class="form-control" placeholder="Mr. Justice Zafa Ahmed" aria-label="Mr. Justice Md. Rezaul Haque" aria-describedby="basic-addon2"></input>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div>Add Note:</div>
                        <div>
                            <input type="text" class="form-control" placeholder="eg. Compliance must be submitted within 3 months..." aria-label="Mr. Justice Md. Rezaul Haque" aria-describedby="basic-addon2"></input>
                        </div>
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
        <div className="accordion" id="accordionExample">
            {accordion_items}
        </div>
    );
}

export default Accordion;



