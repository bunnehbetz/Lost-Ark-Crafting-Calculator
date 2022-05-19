//Initializing variable
let gold = 0;

//Add Button Clicked
// - Pulls gold value and adds to total while displaying to table
// - Pulls item data, calculate value, adds to total while displaying to table
function addClicked() {
    if (document.getElementById("gold").value > 0) {
        gold += parseInt(document.getElementById("gold").value);
        document.getElementById("displayTable").innerHTML += "<tr><td></td><td></td><td></td><td></td><td>" + document.getElementById("gold").value; + "</td></tr>";
        document.getElementById("gold").value = 0
    }
    if (document.getElementById("cost").value > 0) {
        gold += parseInt(document.getElementById("mNeeded").value) / parseInt(document.getElementById("bundle").value) * parseInt(document.getElementById("cost").value);
        document.getElementById("displayTable").innerHTML += "<tr><td>" + document.getElementById("name").value + "</td><td>" + document.getElementById("cost").value + "</td><td>" + document.getElementById("bundle").value + "</td><td>" + document.getElementById("mNeeded").value + "</td><td></td></tr>";
        document.getElementById("name").value = ""
        document.getElementById("cost").value = 0
        document.getElementById("bundle").value = 0
        document.getElementById("mNeeded").value = 0
    }
    document.getElementById("tGold").innerHTML = "Total Gold: " + gold;
}

//Reset Button Clicked
// - Document reloads
function resetClicked() {
    location.reload();
}