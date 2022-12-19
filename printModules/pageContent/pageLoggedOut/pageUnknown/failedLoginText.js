export default function failedText(){
let failText= 
contentDiv.innerHTML = `
<div id="errorMessage">
<h2>Wrong Credentials</h2>
<p>Invalid username or password. <br>
  Try again or create a new account.
</p>
<button id="iGiveUpGiveMeANewAccount">I give up, give me a new account</button>
</div>
`;
return failText
}