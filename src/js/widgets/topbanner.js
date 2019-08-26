import React from 'react';

import Dropdown from './dropdown';

import {sortby_data } from '../data';

class Topbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Print Cause List'
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        var new_text = this.state.text.substring(0, this.state.text.length - 1);
        this.setState({text: new_text});
    }
    render() {
        return (
            <div className="row">
                {/*<input onKeyUp={(e)=>{var newvalue = e.target.value; this.props.m.setState({toptext: newvalue})}} />*/}
                <div className="info col-sm-9 col-md-9 col-lg-9">
                    <div>Good Morning Khaled</div>
                    <div>Today is Tuesday, 09 July,2019</div>
                    <div>Here is your cause list today.</div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <div className="textright">
                        <button type="button" class="btn btn-info" onClick={this.onClick}><i class="fas fa-print"></i>{this.state.text}</button>
                    </div>
                    <div className="textright">
                        <Dropdown  {...sortby_data} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Topbanner;