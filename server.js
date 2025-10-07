// import express from "express"
// import cors from 'cors'
// import   dotenv from "dotenv";
// import {  connectDB} from "./config/mongodb.js"
// import connectCloudinary from "./config/cloudinary.js"
// import userRouter from "./routes/userRoute.js"
// import doctorRouter from "./routes/doctorRoute.js"
// import adminRouter from "./routes/adminRoute.js"

// // app config
// const app = express()
// const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()
// dotenv.config();

// // middlewares
// app.use(express.json())
// app.use(cors())

// // api endpoints
// app.use("/api/user", userRouter)
// app.use("/api/admin", adminRouter)
// app.use("/api/doctor", doctorRouter)

// app.get("/", (req, res) => {
//   res.send("API Working")
// });

// app.listen(port, () => console.log(`Server started on PORT:${port}`))

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

dotenv.config();

// app config
const app = express();

// connect DB & Cloudinary
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors({
  origin: [
    "https://frontend-eta-navy.vercel.app",  "https://localhost:5173",
  ],
 
  credentials: true
}));

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ Only run locally
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server started on PORT:${port}`));
}

// ✅ Export app for Vercel
export default app;