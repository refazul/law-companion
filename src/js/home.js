import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from 'navbar';
import Dropdown from 'dropdown';
import Causelist from 'causelist';
import Quicklink from 'quicklink';
import Quicklink2 from 'quicklink2';
import Quicklink3 from 'quicklink3';
import Footer from 'footer';
import Topbanner from 'topbanner';

import { navbar_data, causelist_data, sidebar1_data, sidebar2_data, sidebar3_data, footer_data } from './data';

ReactDOM.render(
    <div className="container">
        <div className="header">
            <Navbar {...navbar_data} />
        </div>
        <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-9">
                <Topbanner/>
                <div className="center causelist-wrapper">
                    <Causelist {...causelist_data} />
                </div>

            </div>
            <div className="col-sm-3 col-md-3 col-lg-3 sidebar-wrapper">
                <div>
                    <Quicklink {...sidebar1_data} />

                    <Quicklink2 {...sidebar2_data} />

                    <Quicklink3 {...sidebar3_data} />
                </div>
            </div>

        </div>
        <div>
            <div className="floatright">
                <button type="button" class="btn btn-info floatright"><i class="fas fa-print"></i>&nbsp;&nbsp;Print Case List</button>
            </div>
            <div>Total 9 cases found</div>
            <div>Cause list generated</div>

        </div>
        <div className="footer-wrapper">
            <Footer {...footer_data} />
        </div>
    </div>,

    document.getElementById('home')
);