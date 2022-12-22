import addUser from './createNewUser/addUser.js';
import userClass from './userClass.js'

export default async function initUsers() {
    let users = [];
    if (!localStorage.getItem("users")) {
        //users = [new userClass('janne', 'test'), new userClass('mulle', 'meck'), new userClass('sherlock', 'holmes')];
        //save an empty user list to local storage, as addUser needs it.
        localStorage.setItem("users", JSON.stringify(users));

        let mockUsers = [{ username: 'janne', password: 'test' },
        { username: 'mulle', password: 'meck' },
        { username: 'sherlock', password: 'holmes' },];

        for (let user in mockUsers) {
            await addUser(mockUsers[user].username, mockUsers[user].password);
        }
    };
    return users;
}
console.log(userClass);