import React from 'react';




class Tictactoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            box1: "",
            box2: "",
            box3: "",
            box4: "",
            box5: "",
            box6: "",
            box7: "",
            box8: "",
            box9: "",
        }

    }
    reset() {
        var box1, box2, box3, box4, box5, box5, box6, box7, box8, box9;
        box1 = box2 = box3 = box4 = box5 = box5 = box6 = box7 = box8 = box9 = "";
        var counter = 0;
        this.setState((state) => {
            return Object.assign({}, state, { box1, box2, box3, box4, box5, box6, box7, box8, box9, counter });
        });
    }

    victory() {
        if (this.state.box1 != '' && this.state.box1 == this.state.box2 && this.state.box1 == this.state.box3) {
            return true;
        }
        if (this.state.box4 != '' && this.state.box4 == this.state.box5 && this.state.box4 == this.state.box6) {
            return true;
        }
        if (this.state.box7 != '' && this.state.box7 == this.state.box8 && this.state.box7 == this.state.box9) {
            return true;
        }
        if (this.state.box1 != '' && this.state.box1 == this.state.box4 && this.state.box1 == this.state.box7) {
            return true;
        }
        if (this.state.box2 != '' && this.state.box2 == this.state.box5 && this.state.box2 == this.state.box8) {
            return true;
        }
        if (this.state.box3 != '' && this.state.box3 == this.state.box6 && this.state.box3 == this.state.box9) {
            return true;
        }
        if (this.state.box1 != '' && this.state.box1 == this.state.box5 && this.state.box1 == this.state.box9) {
            return true;
        }
        if (this.state.box3 != '' && this.state.box3 == this.state.box5 && this.state.box3 == this.state.box7) {
            return true;
        }
        return false;
    }
    boxOnClick(number) {
        var box1 = this.state.box1, box2 = this.state.box2, box3 = this.state.box3,
            box4 = this.state.box4, box5 = this.state.box5, box6 = this.state.box6,
            box7 = this.state.box7, box8 = this.state.box8, box9 = this.state.box9;
        var counter = this.state.counter;
        var increment = false;
        var xoro = "X";

        if (counter % 2 == 1) {
            xoro = "O";
        }


        if (number == 1) {
            if (box1 == '') {
                increment = true;
                box1 = xoro;
            }

        } else if (number == 2) {
            if (box2 == '') {
                increment = true;
                box2 = xoro;
            }

        }
        else if (number == 3) {
            if (box3 == '') {
                increment = true;
                box3 = xoro;
            }

        }
        else if (number == 4) {
            if (box4 == '') {
                increment = true;
                box4 = xoro;
            }

        }
        else if (number == 5) {
            if (box5 == '') {
                increment = true;
                box5 = xoro;
            }

        }
        else if (number == 6) {
            if (box6 == '') {
                increment = true;
                box6 = xoro;
            }

        }
        else if (number == 7) {
            if (box7 == '') {
                increment = true;
                box7 = xoro;
            }

        }
        else if (number == 8) {
            if (box8 == '') {
                increment = true;
                box8 = xoro;
            }

        }
        else if (number == 9) {
            if (box9 == '') {
                increment = true;
                box9 = xoro;
            }

        }
        if (increment) {
            counter++;
        }

        this.setState((state) => {
            return Object.assign({}, state, { box1, box2, box3, box4, box5, box6, box7, box8, box9, counter });
        }, () => {
            if (this.victory()) {
                alert("victory")
                this.reset();
            }
        });
    }



    render() {
        return (
            <div>
                <div className="box-row">
                    <div className="box" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box1}</div>
                    <div className="box" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box2}</div>
                    <div className="box" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box3}</div>
                </div>
                <div className="box-row">
                    <div className="box" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box4}</div>
                    <div className="box" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box5}</div>
                    <div className="box" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box6}</div>
                </div>
                <div className="box-row">
                    <div className="box" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box7}</div>
                    <div className="box" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box8}</div>
                    <div className="box" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box9}</div>
                </div>
            </div>
        )
    }
}


export default Tictactoe;