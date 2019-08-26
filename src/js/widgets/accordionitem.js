import React from 'react';
import Viewcount from './viewcount';
import Likecount from './likecount';
import Commentcount from './commentcount';

const Accordionitem = (props) => {
    return (
        <div className="card accordion-style">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button style={{ width: '100%' }} className="btn btn-link " type="button" data-toggle="collapse" data-target={'#' + props.id} aria-expanded="true" aria-controls="collapseOne">
                        <div className="row ">
                            <div className="col-md-1 table-text"><a className="colored-link" href="#">{props.text1}</a></div>
                            <div className="col-md-5 table-text">{props.text2}</div>
                            <div className="col-md-3 table-text">{props.text3}</div>
                            <div className="col-md-3">
                                <i className="fas fa-list-ul secondaryheader-icon"></i>
                            </div>

                        </div>
                    </button>
                </h2>
            </div>

            <div id={props.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body card-style">
                    <div className="card-section">
                        <h1>{props.text2}</h1>
                        <h6>{props.creator}</h6>
                    </div>
                    <div className="card-section">
                        <div className="inline"><img width="100" src={props.image1} /></div>
                        <div className="inline"><img width="100" src={props.image2} /></div>
                    </div>
                    <div className="card-section">{props.textbody}</div>
                    <div className="card-section">{props.tags}</div>
                    <div className="">
                        <Viewcount viewcount={props.viewcount} />
                        <Likecount likecount={props.likecount} />
                        <Commentcount commentcount={props.commentcount} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordionitem;



