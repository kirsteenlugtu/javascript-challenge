console.log("app.js loaded")

// from data.js
var tableData = data;
console.log(tableData);

// Select button and form
let button = d3.select("#filter-btn");
let form = d3.select("#form");

// Create event handlers for pressing enter key or clicking Filter button
button.on("click", runFilter);
form.on("submit", runFilter);


function runFilter(){

    d3.event.preventDefault();

    // ------ Filter out data ---------------
    let inputElement = d3.select("#datetime");

    let dateIn = inputElement.property("value");

    console.log(dateIn);

    let filteredData = tableData.filter(sighting => sighting.datetime === dateIn);

    console.log(filteredData);


    // ------ Fill in table with selected data ------

    tbody = d3.select("tbody");

    filteredData.forEach(function(sighting){

        console.log(sighting);
        
        // Add a new row for each ufo sighting
        let row = tbody.append("tr");

        // Loop through key-value pairs
        Object.entries(sighting).forEach(function([key, value]) {

            // console.log(`Key ${key} Value ${value}`)

            // add table data element
            let cell = row.append("td");

            // assign each cell value in table data element
            cell.text(value);
        });
    });
};