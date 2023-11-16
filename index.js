import expess from 'express';
import dotenv from "dotenv";
import bodyparser from 'body-parser';
import userRouter from './routers/userRouter.js'
import dbconnection from './services/dbconnection.js';
import productRouter from './routers/productsRouter.js';
import fileUpload from 'express-fileupload';
import {v2 as cloudinary} from 'cloudinary';
// import cloudinaryRoutes from './routers/cloudinaryRoute.js'
import cors from 'cors'
dotenv.config();
const app=expess();
app.use(expess.json());
app.use(bodyparser.json());
app.use(fileUpload({
    useTempFiles: true
}))
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders:["content-Type","Authorization"]

}))
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_SECRET,
//   });
// app.use("/api/cloudinary", cloudinaryRoutes);
app.use('/api',userRouter)
app.use('/api',productRouter)
app.listen(process.env.PORT,()=>{
    console.log(`server is running somthly on port number ${process.env.PORT}`)
})
