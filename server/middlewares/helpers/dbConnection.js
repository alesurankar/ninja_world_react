const mongoose = require("mongoose");
const Fawn = require("fawn");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected");

        // Initialize Fawn (transaction helper)
        Fawn.init(mongoose, process.env.TRANS_COLL);

    } catch (error) {
        console.error("MongoDB connection failed. Retrying in 5 seconds...");
        console.error(error.message);

        setTimeout(connectDatabase, 5000);
    }
};

module.exports = connectDatabase;
