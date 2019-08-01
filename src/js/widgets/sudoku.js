import React from 'react';




class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box : [],
            selectednumber: "",
        }
    }

    numberSelect(number) {
        this.setState({selectednumber: number});
    }

    boxOnClick(number) {
        var box = this.state.box;
        var selectednumber = this.state.selectednumber;

        box[number] = selectednumber;

        this.setState({box});
    }

    render() {
        return (
            <div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(0) }}>{this.state.box[0]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(1) }}>{this.state.box[1]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(2) }}>{this.state.box[2]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(3) }}>{this.state.box[3]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(4) }}>{this.state.box[4]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(5) }}>{this.state.box[5]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(6) }}>{this.state.box[6]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(7) }}>{this.state.box[7]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(8) }}>{this.state.box[8]}</div>
                        </div>
                    </div>
                    
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(9) }}>{this.state.box[9]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(10) }}>{this.state.box[10]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(11) }}>{this.state.box[11]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(12) }}>{this.state.box[12]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(13) }}>{this.state.box[13]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(14) }}>{this.state.box[14]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(15) }}>{this.state.box[15]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(16) }}>{this.state.box[16]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(17) }}>{this.state.box[17]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(18) }}>{this.state.box[18]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(19) }}>{this.state.box[19]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(20) }}>{this.state.box[20]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(21) }}>{this.state.box[21]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(22) }}>{this.state.box[22]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(23) }}>{this.state.box[23]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(24) }}>{this.state.box[24]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(25) }}>{this.state.box[25]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(26) }}>{this.state.box[26]}</div>
                        </div>
                    </div>
                </div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(27) }}>{this.state.box[27]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(28) }}>{this.state.box[28]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(29) }}>{this.state.box[29]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(30) }}>{this.state.box[30]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(31) }}>{this.state.box[31]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(32) }}>{this.state.box[32]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(33) }}>{this.state.box[33]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(34) }}>{this.state.box[34]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(35) }}>{this.state.box[35]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(36) }}>{this.state.box[36]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(37) }}>{this.state.box[37]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(38) }}>{this.state.box[38]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(39) }}>{this.state.box[39]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(40) }}>{this.state.box[40]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(41) }}>{this.state.box[41]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(42) }}>{this.state.box[42]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(43) }}>{this.state.box[43]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(44) }}>{this.state.box[44]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(45) }}>{this.state.box[45]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(46) }}>{this.state.box[46]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(47) }}>{this.state.box[47]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(48) }}>{this.state.box[48]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(49) }}>{this.state.box[49]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(50) }}>{this.state.box[50]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(51) }}>{this.state.box[51]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(52) }}>{this.state.box[52]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(53) }}>{this.state.box[53]}</div>
                        </div>
                    </div>
                </div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(54) }}>{this.state.box[54]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(55) }}>{this.state.box[55]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(56) }}>{this.state.box[56]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(57) }}>{this.state.box[57]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(58) }}>{this.state.box[58]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(59) }}>{this.state.box[59]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(60) }}>{this.state.box[60]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(61) }}>{this.state.box[61]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(62) }}>{this.state.box[62]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(63) }}>{this.state.box[63]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(64) }}>{this.state.box[64]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(65) }}>{this.state.box[65]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(66) }}>{this.state.box[66]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(67) }}>{this.state.box[67]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(68) }}>{this.state.box[68]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(69) }}>{this.state.box[69]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(70) }}>{this.state.box[70]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(71) }}>{this.state.box[71]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(72) }}>{this.state.box[72]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(73) }}>{this.state.box[73]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(74) }}>{this.state.box[74]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(75) }}>{this.state.box[75]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(76) }}>{this.state.box[76]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(77) }}>{this.state.box[77]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(78) }}>{this.state.box[78]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(79) }}>{this.state.box[79]}</div>
                            <div className="smallbox" onClick={(e) => { this.boxOnClick(80) }}>{this.state.box[80]}</div>
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