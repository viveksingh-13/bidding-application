const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "bidding",
    })
    .then((connection) =>
      console.log(`Database is connected to ${connection.connections[0].name}`)
    )
    .catch((error) => console.error("Connection error:", error));
};

module.exports = { connectDB };
