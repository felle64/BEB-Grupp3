
import userClass from './userClass.js'
export default function initUsers() {
    let users = [];
    if (!localStorage.getItem("users")) {
        users = [new userClass('janne', 'test'), new userClass('mulle', 'meck'), new userClass('sherlock', 'holmes')];
        localStorage.setItem("users", JSON.stringify(users));
    };
    return users;
}
console.log(userClass);