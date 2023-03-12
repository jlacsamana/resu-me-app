import './App.css';


export function User() {

  function editProfile() {
    document.getElementById("username").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("age").disabled = false;
    document.getElementById("gender").disabled = false;
    document.getElementById("desc").readOnly = false;
    document.getElementById("saveButton").disabled = false;
  }

  function saveProfile() {
    document.getElementById("username").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("age").disabled = true;
    document.getElementById("gender").disabled = true;
    document.getElementById("desc").readOnly = true;
    document.getElementById("saveButton").disabled = true;
    document.getElementById("saveButton").setAttribute("disabled", "disabled")
  }

  return (
    <>
        <h2>User Profile</h2>
        Name: <input type = "text" id = "username" disabled = "true" /><br></br>
        Email: <input type = "text" id = "email" disabled = "true"/><br></br>
        Age: <input type = "text" id = "age" disabled = "true"/><br></br>
        Gender: <input type = "text" id = "gender" disabled = "true"/><br></br>
        Description: <textarea type = "text" id = "desc" rows = "5" cols = "33" readOnly = "true"/><br></br>
        <button onClick ={editProfile}> Edit profile </button>
        <button onClick ={saveProfile} id = "saveButton" class="button" disabled="disabled"> Save </button>
    </>
  );


}