import React from 'react';




class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            
            box1: "", box2: "", box3: "", box4: "", box5: "", box6: "", box7: "", box8: "", box9: "",
            box10: "", box11: "", box12: "", box13: "", box14: "", box15: "", box16: "", box17: "", box18: "",
            box19: "", box20: "", box21: "", box22: "", box23: "", box24: "", box25: "", box26: "", box27: "",
            selectednumber: "",
        }

    }

    numberSelect(number) {

        var numberbox1 = this.state.numberbox1, numberbox2 = this.state.numberbox2, numberbox3 = this.state.numberbox3,
            numberbox4 = this.state.numberbox4, numberbox5 = this.state.numberbox5, numberbox6 = this.state.numberbox6,
            numberbox7 = this.state.numberbox7, numberbox8 = this.state.numberbox8, numberbox9 = this.state.numberbox9,
            selectednumber;

        selectednumber = this.state.selectednumber;

        if (number == 1) {
            selectednumber = "1";
        }
        else if (number == 2) {
            selectednumber = "2";
        }
        else if (number == 3) {
            selectednumber = "3";
        }
        else if (number == 4) {
            selectednumber = "4";
        }
        else if (number == 5) {
            selectednumber = "5";
        }
        else if (number == 6) {
            selectednumber = "6";
        }
        else if (number == 7) {
            selectednumber = "7";
        }
        else if (number == 8) {
            selectednumber = "8";
        }
        else if (number == 9) {
            selectednumber = "9";
            console.log("9")
        }
        this.setState((state) => {
            return Object.assign({}, state, {
                numberbox1, numberbox2, numberbox3, numberbox4, numberbox5, numberbox6, numberbox7, numberbox8, numberbox9,
                selectednumber,
            });
        }, () => {

        });
    }

    boxOnClick(number) {
        var box1 = this.state.box1, box2 = this.state.box2, box3 = this.state.box3, box4 = this.state.box4, box5 = this.state.box5, box6 = this.state.box6, box7 = this.state.box7, box8 = this.state.box8, box9 = this.state.box9,
            box10 = this.state.box10, box11 = this.state.box11, box12 = this.state.box12, box13 = this.state.box13, box14 = this.state.box14, box15 = this.state.box15, box16 = this.state.box16, box17 = this.state.box17, box18 = this.state.box18,
            box19 = this.state.box19, box20 = this.state.box20, box21 = this.state.box21, box22 = this.state.box22, box23 = this.state.box23, box24 = this.state.box24, box25 = this.state.box25, box26 = this.state.box26, box27 = this.state.box27;

        
        var xoro;

        xoro = this.numberSelect.selectednumber;




        this.setState((state) => {
            return Object.assign({}, state, {
                box1, box2, box3, box4, box5, box6, box7, box8, box9,
                box10, box11, box12, box13, box14, box15, box16, box17, box18,
                box19, box20, box21, box22, box23, box24, box25, box26, box27,
            });
        }, () => {

        });



    }






    render() {
        return (
            <div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                </div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                </div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="number-row">
                        <div className="numberbox" onClick={(e) => { this.numberSelect(1) }}>1</div>
                        <div className="numberbox" onClick={(e) => { this.numberSelect(2) }}>2</div>
                        <div className="numberbox" onClick={(e) => { this.numberSelect(3) }}>3</div>
                    </div>
                    <div className="number-row">
                        <div className="numberbox" onClick={(e) => { this.numberSelect(4) }}>4</div>
                        <div className="numberbox" onClick={(e) => { this.numberSelect(5) }}>5</div>
                        <div className="numberbox" onClick={(e) => { this.numberSelect(6) }}>6</div>
                    </div>
                    <div className="number-row">
                        <div className="numberbox" onClick={(e) => { this.numberSelect(7) }}>7</div>
                        <div className="numberbox" onClick={(e) => { this.numberSelect(8) }}>8</div>
                        <div className="numberbox" onClick={(e) => { this.numberSelect(9) }}>9</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sudoku;