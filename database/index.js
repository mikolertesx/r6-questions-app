// TODO Add database support
import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", function () {
	console.error("Connection failed.\n");
});
db.once("open", function () {
	console.log("Database successfully opened");
});
