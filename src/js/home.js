import React from 'react';


import Navbar from 'navbar';
import Dropdown from 'dropdown';
import Causelist from 'causelist';
import Quicklink from 'quicklink';
import Quicklink2 from 'quicklink2';
import Quicklink3 from 'quicklink3';
import Footer from 'footer';
import Topbanner from 'topbanner';
import Tictactoe from 'tictactoe';
import Sudoku from 'sudoku';


import { navbar_data, sidebar1_data, causelist_data, sidebar2_data, sidebar3_data, footer_data } from './data';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toptext: 'X'
        }
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Navbar {...navbar_data} xyz={this.state.toptext} />
                </div>
                {/*<Tictactoe/>*/}
                
                <div className="container"> 
                    <div className="row">
                        <div className="mainbar-wrapper">
                            <Topbanner m={this}/>
                            {/*<Sudoku/>*/}
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
                
            </div>
        )
    }
}


export default Home;