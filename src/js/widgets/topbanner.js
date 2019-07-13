import React from 'react';

import Dropdown from './dropdown';

import {sortby_data } from '../data';

const Topbanner = () => {    
   
    return (
        <div className="row">
            <div className="info col-sm-9 col-md-9 col-lg-9">
                <div>Good Morning Khaled</div>
                <div>Today is Tuesday, 09 July,2019</div>
                <div>Here is your cause list today.</div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
                <div className="textright">
                    <button type="button" class="btn btn-info"><i class="fas fa-print"></i>&nbsp;&nbsp;Print Cause List</button>
                </div>
                <div className="textright">
                    <Dropdown  {...sortby_data} />
                </div>
            </div>
        </div>

    );
}

export default Topbanner;