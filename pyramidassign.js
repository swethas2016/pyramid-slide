function symbol(){
var brickElem = document.getElementById("brick").value;
return brickElem;
}

var formElem = document.getElementById("draw-form");
var heightElem = document.getElementById("height");

function slide(slidervalue){
    var slideElem = document.getElementById("numberdisplay");
    //console.log(slidervalue);
    slideElem.innerHTML = slidervalue;
}

formElem.oninput = function(event) {
    heightStr = heightElem.value;
    height = parseInt(heightStr);
    var symbolinput = symbol();
    drawPyramid(height, symbolinput);
}
    // brickStr = brickElem.value;
    // drawPyramid(height);


function drawPyramid(height, symbol) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
