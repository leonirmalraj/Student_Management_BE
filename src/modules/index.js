import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
// mongoose.connect(`mongodb + srv://leonirmalraj:rXkXY2w8ksKt2kAp@cluster0.zfllqot.mongodb.net/test`)

export default mongoose