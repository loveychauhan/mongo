import session from "express-session"
import MongoStore from "connect-mongo"

const setSession =  session({
    secret: 'lovey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/userData'
    })
})

export default setSession