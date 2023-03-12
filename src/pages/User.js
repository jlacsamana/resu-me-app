import PageWrapper from '../components/PageWrapper';

export function User() {
  const UserOuterStyle = {
    backgroundColor: '#E6F4F6',
    textAlign: "center",
    alignItems: "center",
  }
  const UserInnerStyle = {
    justifyContent : "center"
  }
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
      <body class = "user">
        <div style = {UserOuterStyle}>
        <h2>User Profile</h2>
          <div style = {UserInnerStyle}>
            <div class = "text">
            Name (*):
            Email:
            Age (*):
            Gender (*):
            Description:
            </div>
            <div class = "boxes">
            <input type = "text" id = "username" disabled = "true" /><br></br>
            <input type = "text" id = "email" disabled = "true"/><br></br>
            <input type = "text" id = "age" disabled = "true"/><br></br>
            <button class="btn" id="btn"></button>
            <textarea type = "text" id = "desc" rows = "5" cols = "33" readOnly = "true"/><br></br>
            </div>
            Name (*): <input type = "text" id = "username" disabled = "true" /><br></br>
            Email: <input type = "text" id = "email" disabled = "true"/><br></br>
            Age (*): <input type = "text" id = "age" disabled = "true"/><br></br>
            Gender (*): <button class="btn" id="btn">
            Select
            <i class="bx bx-chevron-down" id="arrow"></i>
            </button>
            <div class="dropdown" id="dropdown">
            <a href="#male">
              Male
            </a>
            <a href="#female">
              Female
            </a>
            <a href="#other">
              Other
            </a>
          </div>
          <br></br>
        Description:<br></br> <textarea type = "text" id = "desc" rows = "5" cols = "33" readOnly = "true"/><br></br>
        <input onClick ={editProfile} id = "button" type = "button" value = "Edit profile"/><br></br>
        </div>
          </div>
        
      </body>
    </PageWrapper>
  );

  
}