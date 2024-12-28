import mongoose from "mongoose";

const connectDB = async () => {
    
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URL}todo`
        )
        console.log ('MONGODB CONNECTED')
    } catch (error) {
        console.log ('MONOGBD CONNECTION FAILED' , error)
        process.exit(1)
    }
}

export default connectDB