import React from 'react';
import ReactDOM from 'react-dom';




ReactDOM.render(
    <div>
        <input id="text_holder" />
        <input id="clickMe" type="button" value="clickme" />

        <div id="inputs_holder" className="">
        </div>
    </div>
    , document.getElementById('tasks'));



function createDiv(id, className) {
    var div = document.createElement("div");
    div.id = id;
    div.className = className;
    return div;
}

function appendDiv() {

    var input_value = document.getElementById("text_holder").value;
    var input_numbers = input_value.match(/\d+/g);



    if (input_value == "") {

    } else {
        var x = createDiv("input_id", "input_class");
        x.textContent = input_numbers;
        document.getElementById("inputs_holder").appendChild(x);
        document.getElementById("text_holder").value = "";
    }



}

document.getElementById("clickMe").onclick = appendDiv;

