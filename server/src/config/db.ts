import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        await mongoose.connect(mongoURI, {});
        console.log("✅ MongoDB Connected");

    } catch (err) {
        if (err instanceof Error) {
            console.error("❌ Error connecting to MongoDB:", err.message);
        } else {
            console.error("❌ Unknown error:", err);
        }
        process.exit(1);
    }
}