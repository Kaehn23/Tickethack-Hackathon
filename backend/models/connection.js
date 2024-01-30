const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:nvVEXUVLBYDjeStX@tugce.t5dgoyw.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));
