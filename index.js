// code to check form validation
function formValidation(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(fname==""){
      alert("Please enter user name");
    }
    else if(lname==""){
      alert("Please enter last name");
    }
    else if(email==""){
      alert("Please enter user email");
    }
    else if(!email.includes("@gmail.com")){
      alert("Please enter correct email e.g: abc@gmail.com");
    }
    else if(password==""){
      alert("Please enter your password");
    }
    else{
      formSubmit();
    }
}

function formSubmit() {
  
    // Get values from data
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a new table row
    let table = `<tr id="table_row">
                   <td>${fname}</td>
                   <td>${lname}</td>
                   <td><a>${email}</a></td>
                   <td>${password}</td>
                   <td><button>Delete</button></td>
                   </tr>`
        let tab = document.getElementById("tbl").innerHTML += table;
        
       //delete table row
       let index, mytable = document.getElementById("user_table");
        for(let i=1; i<mytable.rows.length; i++){
          mytable.rows[i].cells[4].onclick = function(){
            index = this.parentElement.rowIndex;
            mytable.deleteRow(index);
            console.log(index);
          }
        }
        
    // Clear form inputs
    document.getElementById("registration_form").reset();
  }
 