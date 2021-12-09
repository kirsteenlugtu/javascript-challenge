console.log("app.js loaded")

// from data.js
var ufoData = data;
console.log(ufoData);

// Select button and form
let button = d3.select("#filter-btn");
let form = d3.select("#form");

// Create event handlers for pressing enter key or clicking Filter button
button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter(){

    d3.event.preventDefault();

    // ------ Filter out data ---------------

    let filterObject = {};

    // filter by date
    let inputElement = d3.select("#datetime");
    let dateIn = inputElement.property("value");

    if (dateIn !== "") {
        filterObject.datetime = dateIn;
    }
    // console.log(dateIn);
    // let filteredData = ufoData.filter(sighting => sighting.datetime === dateIn);

    // filter by city
    let cityInputElement = d3.select("#city");
    let cityIn = cityInputElement.property("value");
    console.log(cityIn);

    if (cityIn !== "") { 
       filterObject.city = cityIn;
       
    }
    
    // // filter by state
    let stateInputElement = d3.select("#state");
    let stateIn = stateInputElement.property("value");
    if (stateIn !== "") {
        filterObject.state = stateIn;
    }

    // // filter by country
    let countryInputElement = d3.select("#country");
    let countryIn = countryInputElement.property("value");
    if (countryIn !== "") {
        filterObject.country = countryIn;
    }

    // // filter by shape
    let shapeInputElement = d3.select("#shape");
    let shapeIn = shapeInputElement.property("value");
    if (shapeIn !== "") {
        filterObject.shape = shapeIn;
    }
   
    console.log("showing filter object");
    console.log(filterObject);


    let filteredData = ufoData;


    Object.entries(filterObject).forEach(([key, value]) => {
        filteredData = filteredData.filter(o => o[key] === value);

    });
    console.log(filteredData);

    // ------ Fill in table with selected data ------
    buildTable(filteredData);
    
};

// build table function
function buildTable(data) {
    tbody = d3.select("tbody");
    tbody.html("");

    data.forEach(function(sighting){
        
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
}

buildTable(ufoData);
