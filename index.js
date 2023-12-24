function formSubmit() {
    // Get form data
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Create a new table row
    const table = document.getElementById("user_table");
    const newRow = table.insertRow();
  
    // Create cells and fill them with data
    const fnameCell = newRow.insertCell();
    fnameCell.textContent = fname;
  
    const lnameCell = newRow.insertCell();
    lnameCell.textContent = lname;
  
    const emailCell = newRow.insertCell();
    emailCell.textContent = email;

    const passwordCell = newRow.insertCell();
    passwordCell.textContent = password;
  
    // Clear form inputs
    document.getElementById("registration_form").reset();
  }
  


  function filterTable(event) {
    const filterValue = event.target.value.toLowerCase();
    const table = document.getElementById("user_table");
    const tr = table.querySelectorAll("tbody tr");
  
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].querySelectorAll("td");
      let found = false;
  
      for (let j = 0; j < td.length; j++) {
        const cellText = td[j].textContent.toLowerCase();
        if (cellText.includes(filterValue)) {
          found = true;
          break;
        }
      }
  
      tr[i].style.display = found ? "" : "none";
    }
  }
  