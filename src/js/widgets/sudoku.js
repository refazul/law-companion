import React from 'react';

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        var solution = this.generateSolution();
        var mask = this.getMask();
        this.state = {
            solution: solution,
            box: [],
            mask: mask,
            selectednumber: "",
        }
    }

    generateSolution() {
        return [
            4, 3, 5, 2, 6, 9, 7, 8, 1,
            6, 8, 2, 5, 7, 1, 4, 9, 3,
            1, 9, 7, 8, 3, 4, 5, 6, 2,
            8, 2, 6, 1, 9, 5, 3, 4, 7,
            3, 7, 4, 6, 8, 2, 9, 1, 5,
            9, 5, 1, 7, 4, 3, 6, 2, 8,
            5, 1, 9, 3, 2, 6, 8, 7, 4,
            2, 4, 8, 9, 5, 7, 1, 3, 6,
            7, 6, 3, 4, 1, 8, 2, 5, 9
        ]
    }
    getMask() {
        return [
            0, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
        ]
    }

    isVictory() {
        for (var i = 0; i < 81; i++) {
            if (this.state.mask[i] == 1) {
                continue;
            }
            if (this.state.mask[i] == 0 && this.state.box[i] == this.state.solution[i]) {
                // Good
            } else {
                return false;
            }
        }
        return true;
    }

    numberSelect(number) {
        this.setState({ selectednumber: number });
    }

    boxOnClick(index) {
        var box = this.state.box;
        var mask = this.state.mask;
        var selectednumber = this.state.selectednumber;

        if (mask[index] == 0) {
            // 0 means mutable
            box[index] = selectednumber;
        }

        if (this.isVictory()) {
            alert('victor');
        }

        this.setState({ box });
    }

    getNumber(index) {
        return this.state.mask[index] == 1 ? this.state.solution[index] : this.state.box[index];
    }
    getClass(index) {
        var row = Math.floor(index / 9);
        var c = "smallbox ";
        if (index % 9 == 0) {
            c += " clear ";
        }
        if (index % 3 == 2) {
            c += " b_right ";
        } else if (index % 3 == 0) {
            c += " b_left ";
        }

        if (row % 3 == 2) {
            c += " b_bottom ";
        } else if (row % 3 == 0) {
            c += " b_top ";
        }
        if (this.state.mask[index] == 1) {
            c += " solutionbox ";
        } else {
            if (!(this.state.box[index] > 0)) {

            }
            else if (this.state.solution[index] == this.state.box[index]) {
                c += " correct ";
            } else {
                c += " incorrect ";
            }
        }
        
        return c;
    }

    render() {
        return (
            <div>
                <div className="sudoku">
                    {
                        this.state.solution.map((item, index) => {
                            return <div className={this.getClass(index)} onClick={(e) => { this.boxOnClick(index); }}>{this.getNumber(index)}</div>
                        })
                    }

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