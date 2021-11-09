const express = require("express")
const app = express()

// panggil router member
const member = require("./routers/member")
app.use("/member", member)

const paket = require("./routers/paket")
app.use("/paket", paket)

const users = require("./routers/users")
app.use("/users", users)

const transaksi = require("./routers/transaksi")
app.use("/transaksi", transaksi)

const {login} = require("./routers/login")
app.use("/api/auth", login)

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})