const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    process.env.TZ = "Asia/Jakarta"; 

    const conn = await mongoose.connect(
      "mongodb+srv://mevn-store:6R6M1bktghFc4xqv@mevn-store.gfsrlin.mongodb.net/tillJannah?retryWrites=true&w=majority&appName=mevn-store",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected`.cyan.underline.bold);

    // Inisialisasi model Surat
    const Surat = require("../models/suratModel");
    await new Surat();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
