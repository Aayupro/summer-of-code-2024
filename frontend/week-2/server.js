const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 1234;
const USERS_FILE = path.join(__dirname, "users.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


const getUsers = () => {
    if (!fs.existsSync(USERS_FILE)) return [];
    const usersData = fs.readFileSync(USERS_FILE);
    return JSON.parse(usersData);
};

const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

app.post("/signup", (req, res) => {
    const { email, password } = req.body;
    const users = getUsers();

    if (users.some((user) => user.email === email)) {
        return res.json({ success: false, message: "Email already exists!" });
    }

    users.push({ email, password });
    saveUsers(users);

    res.json({ success: true, message: "Signup successful!" });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const users = getUsers();

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        return res.json({ success: true, message: "Login successful!" });
    }

    res.json({ success: false, message: "Invalid email or password." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
