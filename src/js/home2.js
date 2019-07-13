import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from 'navbar';

import Causelist from 'causelist';
import Footer from 'footer';
import Accordion from 'accordion';
import Topbanner from 'topbanner';

import { navbar_data, causelist_data, footer_data, accordion_data } from './data';

ReactDOM.render(
    <div className="container">
        <div className="header">
            <Navbar {...navbar_data} />
        </div>
        <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-9">
                <Topbanner />
                <div className="center causelist-wrapper">
                    <Causelist {...causelist_data} />
                </div>
                <div>
                    <div className="inline">
                        <div>Total 9 cases found</div>
                        <div>Cause list generated</div>
                    </div>
                    <div className="inline floatright">
                        <button type="button" class="btn btn-info"><i class="fas fa-print"></i>&nbsp;&nbsp;Print Case List</button>
                    </div>
                </div>

            </div>
            <div className="col-sm-3 col-md-3 col-lg-3 sidebar2-wrapper">
                <Accordion {...accordion_data} />
                <div className="sidebarnav-wrapper">
                    <div className="sidebarnavitem">Contact</div>
                    <div className="sidebarnavitem">Sercvices</div>
                    <div className="sidebarnavitem">Sercvice Fee</div>
                    <div className="sidebarnavitem">Disclaimer</div>
                </div>
            </div>

        </div>

        <div className="footer-wrapper">
            <Footer {...footer_data} />
        </div>
    </div>,

    document.getElementById('home2')
);