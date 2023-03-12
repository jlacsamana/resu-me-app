import PageWrapper from '../components/PageWrapper';
import '../User.css';

export function User() {
  function editProfile() {
    if (document.getElementById("username").disabled) {
      document.getElementById("username").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("age").disabled = false;
      document.getElementById("gender").disabled = false;
      document.getElementById("desc").readOnly = false;
      document.getElementById("button").value = "Save";
    } else {
      document.getElementById("username").disabled = true;
      document.getElementById("email").disabled = true;
      document.getElementById("age").disabled = true;
      document.getElementById("gender").disabled = true;
      document.getElementById("desc").readOnly = true;
      document.getElementById("button").value = "Edit profile";
      saveInputs();
    }

  }

  function saveInputs() {
    var usernameInput = document.getElementById("username").value;
    var ageInput = document.getElementById("age").value;
    if (usernameInput === "") {
      alert("Name cannot be empty.");
    }
    if (ageInput < 0 || ageInput > 100) {
      alert("Please enter a valid number between 1 and 100 (inclusive)")
    }

  }
  return (
    <PageWrapper>
      <body>
        <div class="User">
          <h2>User Profile</h2>
          <div>
            <div class="container">

              <div class="text"><p class="accntItem">Name (*):</p> <input type="text" id="username" disabled="true" /></div>
              <div class="text"><p class="accntItem">Email:</p> <input type="text" id="email" disabled="true" /></div>
              <div class="text"><p class="accntItem">Age (*):</p> <input type="text" id="age" disabled="true" /> </div>
              <div class="text"><p class="accntItem">Gender (*):</p> <input type="text" id="gender" disabled="true" /></div>
              <div class="text"><p class="accntItem">Description:</p> <textarea type="text" id="desc" rows="5" cols="33" readOnly="true" /></div>
              <input onClick={editProfile} id="button" type="button" value="Edit profile" /><br></br>
            </div>


          </div>
        </div>

      </body>
    </PageWrapper >
  );


}