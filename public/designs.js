
// Declare Variables
const c = document.getElementById('pixelCanvas');
let pickHeight = $("#inputHeight");
let pickWidth = $("#inputWidth");


//On Submit Button Click
$('#submitButton').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//Whenever the button is clicked, makeGrid is called
function makeGrid() {

    c.innerHTML = '';
    let height = pickHeight.val();
    let width = pickWidth.val();

    //Uses the selected color when a color is picked
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    // When an event is clicked, its color changes
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let k = 0; k < width; k++) {
            let cell = row.insertCell(k);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}

