import './App.css';


export function User() {

  return (
    <>
        <h2>User Profile</h2>
        Name: <input type = "text" id = "username"/><br></br>
        Email: <input type = "text" id = "email"/><br></br>
        Age: <input type = "text" id = "age"/><br></br>
        Gender: <input type = "text" id = "gender"/><br></br>
        Description: <input type = "text" id = "desc"/><br></br>

        <input type = "submit" value = "Edit profile"/>
    </>
);
}