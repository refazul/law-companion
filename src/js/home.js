import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Navbar from 'navbar';
import Dropdown from 'dropdown';
import Causelist from 'causelist';
import Quicklink from 'quicklink';
import Quicklink2 from 'quicklink2';
import Quicklink3 from 'quicklink3';
import Footer from 'footer';
import Topbanner from 'topbanner';

import { navbar_data, sidebar1_data, sidebar2_data, sidebar3_data, footer_data } from './data';

var causelist_data = {};

$.ajax({
    url: 'http://localhost:3000/api/v1/causes/all',
    success: function(data) {
        main(data);
    }
});

function main(data) {
    causelist_data.items = [];
    causelist_data.items.push({
        'case_sl': 'ITEM NO',
        'case_number': 'CASE NO',
        'case_parties': 'PARTIES',
        'court_name': 'COURT NO',
        'case_heading': 'HEADING',
        'type': 'causelistheaderitem',
    });

    causelist_data.items = causelist_data.items.concat(data.causes);

    console.log(causelist_data, data.causes);

    ReactDOM.render(
        <div>
            <div className="header">
                <Navbar {...navbar_data} />
            </div>
            <div className="container">
    
                <div className="row">
                    <div className="mainbar-wrapper">
                        <Topbanner />
                        <div className="center causelist-wrapper">
                            <Causelist {...causelist_data} />
                        </div>
    
                    </div>
                    <div className="sidebar-wrapper">
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
            </div>
        </div>,
    
        document.getElementById('home')
    );
}

