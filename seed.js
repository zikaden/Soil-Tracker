const mongoose = require('mongoose')

const User = require('./models/UserModel')


require("dotenv/config");
const mongouri = process.env.MONGODB_URI
mongoose.connect(mongouri)

//SEEDING von user model
const users = [
    {
        username: "Alice1",
        password: "12345"
    },
    {
        username: "Bob12",
        password: "abcde"
    }
]

User.create(users)
    .then(usersFromDB => {
        console.log(`${usersFromDB.length} user got created`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
