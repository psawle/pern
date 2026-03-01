
import app from "./app.js";
import connectDB from "./db/db.js";

connectDB().then(() => {
    app.listen(3000,() => {
        console.log("Port listening")
    })
}).catch(() => {
    console.log("internal server error")
})
