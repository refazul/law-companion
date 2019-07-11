import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from 'navbar';
import Dropdown from 'dropdown';
import Causelist from 'causelist';

import { navbar_data, sortby_data, causelist_data } from './data';

ReactDOM.render(
    <div className="container">
        <div className="header">
            <Navbar {...navbar_data} />
        </div>
        <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-9">
                <div className="row">
                    <div className="info col-sm-9 col-md-9 col-lg-9">
                        <div>Good Morning Khaled</div>
                        <div>Today is Tuesday, 09 July,2019</div>
                        <div>Here is your cause list today.</div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div>
                            <button type="button" class="btn btn-info"><i class="fas fa-print"></i>&nbsp;&nbsp;Print Cause List</button>
                        </div>
                        <div className="">
                            <Dropdown  {...sortby_data} />
                        </div>
                    </div>
                </div>
                <div className="center causelist-wrapper">
                    <Causelist {...causelist_data} />
                </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3"></div>

        </div>
    </div>,

    document.getElementById('home')
);