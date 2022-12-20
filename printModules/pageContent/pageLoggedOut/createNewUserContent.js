export default function createNewUserContent() {
    let createNewUser = `
<h2>Create Account</h2>

<form id="createNewUserForm">
    <div class="inputField">
        <label for="newUserName">Username:</label><br>
        <input type="text" name="newUserName" id="newUserName" required/>
    </div>
    <br>
    <div class="inputField">
        <label for="newUserPassword">Password:</label><br>
        <input type="password" name="newUserPassword" id="newUserPassword" required/>
    </div>
    <br>
    <button type="submit" id="createNewAccountBtn">Create New Account</button>
    <button id="closeCreateUserForm">Close</button>
    
</form>
<div id="errorBox">
<div id="errorBoxUsernameExists"></div>
<div id="errorBoxNewUsernameLength"></div> 
<div id="errorBoxNewPassword"></div> 
</div>
      `;
      return createNewUser
}