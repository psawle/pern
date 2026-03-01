// import express from "express";
// import userRouter from "./route/userRoute.js";
// import requestLogger from "./middleware/resquestMiddleware.js";

// const app = express();
// app.use(express.json({ limit: "20kb" })); // limit is used for limit the  request body size to secure our server from crashing
// app.use(express.urlencoded({ extended: true })); // extended:true is used for parsing the urlencoded data with the querystring library and it allows us to parse nested objects in the request body
// app.use(requestLogger())
// //Health route
// app.all("/", (req, res) => {
//   res.send("Working fine health is good");
// });

// app.use("/api/v1/users",userRouter)

// export default app;

import express from "express";
import userRouter from "./routes/userRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
app.use(express.json({limit : "20kb"})); // limit is used for limiti the request body size to secure our server from crashing
app.use(express.urlencoded({extended :true})); // extended:true is used for parsing the urlsncoded data with the querystring library and it allows us to parse nested objects in the request body
// app.use(resquestLogger())

app.all("/",(req,res) => {
    res.send("working fine health is good");
})

app.use("/api/v1/users",userRouter)
app.use("/api/v1/blog",blogRouter);

export default app;