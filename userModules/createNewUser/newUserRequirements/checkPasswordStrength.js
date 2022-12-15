export default function checkPasswordStrength(password) {

    let specialCharsCount = 0;
    const specialChars = [
        "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
    ];

    specialChars.forEach((value, index) => {
        const specialChar = specialChars[index];
        if (password.includes(specialChar)) {
            specialCharsCount++;
        }
    });
    if ((password.length >= 6 && specialCharsCount >= 2)) {
        errorBoxNewPassword.innerHTML = "";
        return true;
    }
    else {
        const ErrorMessageNewPasswordStrength = "Password not strong enough, try again! <br> Password needs to be at least 6 characters long and include at least 2 <br> unique special characters from the following list: @ $ % * ^ < > ? ! ( ) [ ] { } '"
        errorBoxNewPassword.innerHTML = ErrorMessageNewPasswordStrength;
        return false;
    }
};