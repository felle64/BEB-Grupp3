import addUser from './createNewUser/addUser.js';

export default async function initUsers() {
    let users = [];
    if (!localStorage.getItem("users")) {
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
