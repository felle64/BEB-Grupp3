

export default function initUsers() {
    let users = [];
    if (!localStorage.getItem("users")) {
        users = [{ username: "janne", password: "test" }, { username: "oscar", password: "1234" }, { username: "kalle", password: "asdf" }];
        localStorage.setItem("users", JSON.stringify(users));
    };
    return users;
}