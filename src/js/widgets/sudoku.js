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
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 0, 1, 0, 1, 0, 1
        ]
    }

    numberSelect(number) {
        this.setState({ selectednumber: number });
    }

    boxOnClick(number) {
        var box = this.state.box;
        var selectednumber = this.state.selectednumber;

        box[number] = selectednumber;

        this.setState({ box });
    }

    render() {
        return (
            <div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[0] == 1 ? false : this.boxOnClick(0); }}>{this.state.mask[0] == 1 ? this.state.solution[0] : this.state.box[0]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[1] == 1 ? false : this.boxOnClick(1); }}>{this.state.mask[1] == 1 ? this.state.solution[1] : this.state.box[1]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[2] == 1 ? false : this.boxOnClick(2); }}>{this.state.mask[2] == 1 ? this.state.solution[2] : this.state.box[2]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[3] == 1 ? false : this.boxOnClick(3); }}>{this.state.mask[3] == 1 ? this.state.solution[3] : this.state.box[3]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[4] == 1 ? false : this.boxOnClick(4); }}>{this.state.mask[4] == 1 ? this.state.solution[4] : this.state.box[4]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[5] == 1 ? false : this.boxOnClick(5); }}>{this.state.mask[5] == 1 ? this.state.solution[5] : this.state.box[5]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[6] == 1 ? false : this.boxOnClick(6); }}>{this.state.mask[6] == 1 ? this.state.solution[6] : this.state.box[6]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[7] == 1 ? false : this.boxOnClick(7); }}>{this.state.mask[7] == 1 ? this.state.solution[7] : this.state.box[7]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[8] == 1 ? false : this.boxOnClick(8); }}>{this.state.mask[8] == 1 ? this.state.solution[8] : this.state.box[8]}</div>
                        </div>
                    </div>

                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[9] == 1 ? false : this.boxOnClick(9); }}>{this.state.mask[9] == 1 ? this.state.solution[9] : this.state.box[9]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[10] == 1 ? false : this.boxOnClick(10); }}>{this.state.mask[10] == 1 ? this.state.solution[10] : this.state.box[10]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[11] == 1 ? false : this.boxOnClick(11); }}>{this.state.mask[11] == 1 ? this.state.solution[11] : this.state.box[11]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[12] == 1 ? false : this.boxOnClick(12); }}>{this.state.mask[12] == 1 ? this.state.solution[12] : this.state.box[12]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[13] == 1 ? false : this.boxOnClick(13); }}>{this.state.mask[13] == 1 ? this.state.solution[13] : this.state.box[13]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[14] == 1 ? false : this.boxOnClick(14); }}>{this.state.mask[14] == 1 ? this.state.solution[14] : this.state.box[14]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[15] == 1 ? false : this.boxOnClick(15); }}>{this.state.mask[15] == 1 ? this.state.solution[15] : this.state.box[15]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[16] == 1 ? false : this.boxOnClick(16); }}>{this.state.mask[16] == 1 ? this.state.solution[16] : this.state.box[16]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[17] == 1 ? false : this.boxOnClick(17); }}>{this.state.mask[17] == 1 ? this.state.solution[17] : this.state.box[17]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[18] == 1 ? false : this.boxOnClick(18); }}>{this.state.mask[18] == 1 ? this.state.solution[18] : this.state.box[18]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[19] == 1 ? false : this.boxOnClick(19); }}>{this.state.mask[19] == 1 ? this.state.solution[19] : this.state.box[19]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[20] == 1 ? false : this.boxOnClick(20); }}>{this.state.mask[20] == 1 ? this.state.solution[20] : this.state.box[20]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[21] == 1 ? false : this.boxOnClick(21); }}>{this.state.mask[21] == 1 ? this.state.solution[21] : this.state.box[21]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[22] == 1 ? false : this.boxOnClick(22); }}>{this.state.mask[22] == 1 ? this.state.solution[22] : this.state.box[22]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[23] == 1 ? false : this.boxOnClick(23); }}>{this.state.mask[23] == 1 ? this.state.solution[23] : this.state.box[23]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[24] == 1 ? false : this.boxOnClick(24); }}>{this.state.mask[24] == 1 ? this.state.solution[24] : this.state.box[24]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[25] == 1 ? false : this.boxOnClick(25); }}>{this.state.mask[25] == 1 ? this.state.solution[25] : this.state.box[25]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[26] == 1 ? false : this.boxOnClick(26); }}>{this.state.mask[26] == 1 ? this.state.solution[26] : this.state.box[26]}</div>
                        </div>
                    </div>
                </div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[27] == 1 ? false : this.boxOnClick(27); }}>{this.state.mask[27] == 1 ? this.state.solution[27] : this.state.box[27]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[28] == 1 ? false : this.boxOnClick(28); }}>{this.state.mask[28] == 1 ? this.state.solution[28] : this.state.box[28]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[29] == 1 ? false : this.boxOnClick(29); }}>{this.state.mask[29] == 1 ? this.state.solution[29] : this.state.box[29]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[30] == 1 ? false : this.boxOnClick(30); }}>{this.state.mask[30] == 1 ? this.state.solution[30] : this.state.box[30]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[31] == 1 ? false : this.boxOnClick(31); }}>{this.state.mask[31] == 1 ? this.state.solution[31] : this.state.box[31]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[32] == 1 ? false : this.boxOnClick(32); }}>{this.state.mask[32] == 1 ? this.state.solution[32] : this.state.box[32]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[33] == 1 ? false : this.boxOnClick(33); }}>{this.state.mask[33] == 1 ? this.state.solution[33] : this.state.box[33]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[34] == 1 ? false : this.boxOnClick(34); }}>{this.state.mask[34] == 1 ? this.state.solution[34] : this.state.box[34]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[35] == 1 ? false : this.boxOnClick(35); }}>{this.state.mask[35] == 1 ? this.state.solution[35] : this.state.box[35]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[36] == 1 ? false : this.boxOnClick(36); }}>{this.state.mask[36] == 1 ? this.state.solution[36] : this.state.box[36]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[37] == 1 ? false : this.boxOnClick(37); }}>{this.state.mask[37] == 1 ? this.state.solution[37] : this.state.box[37]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[38] == 1 ? false : this.boxOnClick(38); }}>{this.state.mask[38] == 1 ? this.state.solution[38] : this.state.box[38]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[39] == 1 ? false : this.boxOnClick(39); }}>{this.state.mask[39] == 1 ? this.state.solution[39] : this.state.box[39]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[40] == 1 ? false : this.boxOnClick(40); }}>{this.state.mask[40] == 1 ? this.state.solution[40] : this.state.box[40]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[41] == 1 ? false : this.boxOnClick(41); }}>{this.state.mask[41] == 1 ? this.state.solution[41] : this.state.box[41]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[42] == 1 ? false : this.boxOnClick(42); }}>{this.state.mask[42] == 1 ? this.state.solution[42] : this.state.box[42]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[43] == 1 ? false : this.boxOnClick(43); }}>{this.state.mask[43] == 1 ? this.state.solution[43] : this.state.box[43]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[44] == 1 ? false : this.boxOnClick(44); }}>{this.state.mask[44] == 1 ? this.state.solution[44] : this.state.box[44]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[45] == 1 ? false : this.boxOnClick(45); }}>{this.state.mask[45] == 1 ? this.state.solution[45] : this.state.box[45]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[46] == 1 ? false : this.boxOnClick(46); }}>{this.state.mask[46] == 1 ? this.state.solution[46] : this.state.box[46]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[47] == 1 ? false : this.boxOnClick(47); }}>{this.state.mask[47] == 1 ? this.state.solution[47] : this.state.box[47]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[48] == 1 ? false : this.boxOnClick(48); }}>{this.state.mask[48] == 1 ? this.state.solution[48] : this.state.box[48]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[49] == 1 ? false : this.boxOnClick(49); }}>{this.state.mask[49] == 1 ? this.state.solution[49] : this.state.box[49]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[50] == 1 ? false : this.boxOnClick(50); }}>{this.state.mask[50] == 1 ? this.state.solution[50] : this.state.box[50]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[51] == 1 ? false : this.boxOnClick(51); }}>{this.state.mask[51] == 1 ? this.state.solution[51] : this.state.box[51]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[52] == 1 ? false : this.boxOnClick(52); }}>{this.state.mask[52] == 1 ? this.state.solution[52] : this.state.box[52]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[53] == 1 ? false : this.boxOnClick(53); }}>{this.state.mask[53] == 1 ? this.state.solution[53] : this.state.box[53]}</div>
                        </div>
                    </div>
                </div>
                <div className="bigbox-row">
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[54] == 1 ? false : this.boxOnClick(54); }}>{this.state.mask[54] == 1 ? this.state.solution[54] : this.state.box[54]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[55] == 1 ? false : this.boxOnClick(55); }}>{this.state.mask[55] == 1 ? this.state.solution[55] : this.state.box[55]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[56] == 1 ? false : this.boxOnClick(56); }}>{this.state.mask[56] == 1 ? this.state.solution[56] : this.state.box[56]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[57] == 1 ? false : this.boxOnClick(57); }}>{this.state.mask[57] == 1 ? this.state.solution[57] : this.state.box[57]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[58] == 1 ? false : this.boxOnClick(58); }}>{this.state.mask[58] == 1 ? this.state.solution[58] : this.state.box[58]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[59] == 1 ? false : this.boxOnClick(59); }}>{this.state.mask[59] == 1 ? this.state.solution[59] : this.state.box[59]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[60] == 1 ? false : this.boxOnClick(60); }}>{this.state.mask[60] == 1 ? this.state.solution[60] : this.state.box[60]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[61] == 1 ? false : this.boxOnClick(61); }}>{this.state.mask[61] == 1 ? this.state.solution[61] : this.state.box[61]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[62] == 1 ? false : this.boxOnClick(62); }}>{this.state.mask[62] == 1 ? this.state.solution[62] : this.state.box[62]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[63] == 1 ? false : this.boxOnClick(63); }}>{this.state.mask[63] == 1 ? this.state.solution[63] : this.state.box[63]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[64] == 1 ? false : this.boxOnClick(64); }}>{this.state.mask[64] == 1 ? this.state.solution[64] : this.state.box[64]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[65] == 1 ? false : this.boxOnClick(65); }}>{this.state.mask[65] == 1 ? this.state.solution[65] : this.state.box[65]}</div></div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[66] == 1 ? false : this.boxOnClick(66); }}>{this.state.mask[66] == 1 ? this.state.solution[66] : this.state.box[66]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[67] == 1 ? false : this.boxOnClick(67); }}>{this.state.mask[67] == 1 ? this.state.solution[67] : this.state.box[67]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[68] == 1 ? false : this.boxOnClick(68); }}>{this.state.mask[68] == 1 ? this.state.solution[68] : this.state.box[68]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[69] == 1 ? false : this.boxOnClick(69); }}>{this.state.mask[69] == 1 ? this.state.solution[69] : this.state.box[69]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[70] == 1 ? false : this.boxOnClick(70); }}>{this.state.mask[70] == 1 ? this.state.solution[70] : this.state.box[70]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[71] == 1 ? false : this.boxOnClick(71); }}>{this.state.mask[71] == 1 ? this.state.solution[71] : this.state.box[71]}</div>
                        </div>
                    </div>
                    <div className="bigbox">
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[72] == 1 ? false : this.boxOnClick(72); }}>{this.state.mask[72] == 1 ? this.state.solution[72] : this.state.box[72]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[73] == 1 ? false : this.boxOnClick(73); }}>{this.state.mask[73] == 1 ? this.state.solution[73] : this.state.box[73]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[74] == 1 ? false : this.boxOnClick(74); }}>{this.state.mask[74] == 1 ? this.state.solution[74] : this.state.box[74]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[75] == 1 ? false : this.boxOnClick(75); }}>{this.state.mask[75] == 1 ? this.state.solution[75] : this.state.box[75]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[76] == 1 ? false : this.boxOnClick(76); }}>{this.state.mask[76] == 1 ? this.state.solution[76] : this.state.box[76]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[77] == 1 ? false : this.boxOnClick(77); }}>{this.state.mask[77] == 1 ? this.state.solution[77] : this.state.box[77]}</div>
                        </div>
                        <div className="box-row">
                            <div className="smallbox" onClick={(e) => { this.state.mask[78] == 1 ? false : this.boxOnClick(78); }}>{this.state.mask[78] == 1 ? this.state.solution[78] : this.state.box[78]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[79] == 1 ? false : this.boxOnClick(79); }}>{this.state.mask[79] == 1 ? this.state.solution[79] : this.state.box[79]}</div>
                            <div className="smallbox" onClick={(e) => { this.state.mask[80] == 1 ? false : this.boxOnClick(80); }}>{this.state.mask[80] == 1 ? this.state.solution[80] : this.state.box[80]}</div>
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