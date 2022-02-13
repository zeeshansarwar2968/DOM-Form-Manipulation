let selectedRow = null;

// Logic to initialize the printing of input data in the table
function onFormSubmit() {
  
  var formData = readFormData();

  if (selectedRow == null) insertNewRecord(formData);

  resetForm();
}

//code block for checkbox input functionality logic
var checkData = "";
function checkboxData() {
    var markedCheckbox = document.getElementsByName('food');
    for (var checkbox of markedCheckbox) {
      if (checkbox.checked){
            checkData = checkData + checkbox.value + ", ";
      }  
    }
    return checkData;
  }

//code block for radio input functionality logic
  function radioData() {
    var markedRadio = document.getElementsByName('gender');
    for (var radio of markedRadio) {
      if (radio.checked){
          return radio.value;
      }else{
          return "Not specified";
      }
        
    }
  }
//

//code block to read the provide data and store it
function readFormData() {
  checkboxData()
  //create an empty object
  const formData = {};
  formData["firstName"] = document.getElementById("first-name").value;
  formData["lastName"] = document.getElementById("last-name").value;
  formData["address"] = document.getElementById("address").value;
  formData["pinCode"] = document.getElementById("pincode").value;
  formData["gender"] = radioData();
  formData["food"] = checkData;
  formData["state"] = document.getElementById("state").value;
  formData["country"] = document.getElementById("country").value;
  return formData;
}

//code block to insert rows into the table with the provided data
function insertNewRecord(data) {
  let table = document
    .getElementById("dataList")
    .getElementsByTagName("tbody")[0];

  //insert rows into the table with the provided data
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.pinCode;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.food;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.state;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.country;
;
}

//code block to reset the checkboxes
function checkboxReset() {
    let markedCheckbox = document.getElementsByName('food');
    for (var checkbox of markedCheckbox) {
        checkbox.checked = false;   
    }
}

//code block for reset functionality
function resetForm() {
  checkboxReset()
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value= "";
  document.getElementById("pincode").value= "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("state").value= "";
  document.getElementById("country").value= "";
  checkData = "";
  selectedRow = null;
}


// Code block to limit selection of items of food
var checks = document.querySelectorAll(".check");
var max = 2;
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}