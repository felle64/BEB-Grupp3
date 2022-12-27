import getUserObjectFromUserUUID from "./getUserObjectFromUserUUID.js";
export default function updateUsers (userUpdate){
    let users = JSON.parse(localStorage.getItem('users'))
    let foundUser = users.find(user => {
        return user.uuid === userUpdate.uuid;
    })
    let i = users.indexOf(foundUser);
    users[i]=userUpdate
    localStorage.setItem('users', JSON.stringify(users))
}