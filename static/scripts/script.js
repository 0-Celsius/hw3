/*
    Filename: script.js
    Desc:
        JS to handle creating the multiplcation table
*/



// variables for generating everything
const colMinSelect = document.getElementById("colMin");
const colMaxSelect = document.getElementById("colMax");
const rowMinSelect = document.getElementById("rowMin");
const rowMaxSelect = document.getElementById("rowMax");
const form = document.getElementById("tableForm");
const tableContainer = document.getElementById("tableContainer");

// Populate dropdowns from -50 to 50
for (let i = -50; i <= 50; i++) {
    [colMinSelect, colMaxSelect, rowMinSelect, rowMaxSelect].forEach(select => {const option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option.cloneNode(true));
    });
}

// Default values
colMinSelect.value = -50;
colMaxSelect.value = 0;
rowMinSelect.value = -50;
rowMaxSelect.value = 0;

// Form Error handler
form.addEventListener("submit", (e) => {
    e.preventDefault(); // allows me to generate the values; doesnt force refresh the page bc of the submit
    const colMin = parseInt(colMinSelect.value);
    const colMax = parseInt(colMaxSelect.value);
    const rowMin = parseInt(rowMinSelect.value);
    const rowMax = parseInt(rowMaxSelect.value);
    // debugging
    console.log("---Debugging---");
    console.log("Col min: ", colMin);
    console.log("Col max: ", colMax);
    console.log("row min: ", rowMin);
    console.log("row max: ", rowMax);

    // ERROR checking if min is bigger than max
    if (colMin > colMax || rowMin > rowMax) {
    alert("Min values must be less than or equal to Max values.");
    return;
    }

    generateTable(colMin, colMax, rowMin, rowMax);
});

// --------------------------------
//            Functions 
// --------------------------------
function generateTable(colMin, colMax, rowMin, rowMax) {
    let html = "<table class='table table-bordered table-striped text-center'>";
    html += "<thead><tr><th id=\"space\"> </th>";
    
    // generates the columns
    for (let col = colMin; col <= colMax; col++) {
    html += `<th>${col}</th>`;
    }
    html += "</tr></thead><tbody>";


    // generates the rows
    for (let row = rowMin; row <= rowMax; row++) {
        html += `<tr><th>${row}</th>`;
        // generates each cell
        for (let col = colMin; col <= colMax; col++) {
            html += `<td>${row * col}</td>`;
        }
        html += "</tr>";
    }
    html += "</tbody></table>";
    tableContainer.innerHTML = html;
}