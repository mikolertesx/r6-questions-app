import bcrypt from "bcrypt";
import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
	username: "string",
	password: "string",
});

/**
 * Logins comparing the password, and the salted password.
 * @param  {String} password
 * @returns {Boolean} whether it passed the check or not.
 */
userSchema.methods.login = function (password) {
	return bcrypt.compareSync(password, this.password);
};

/**
 * Creates an user, and hashes the password.
 * @param  {String} username
 * @param  {String} password
 */
userSchema.statics.createUser = async function (username, password) {
	const results = await this.findOne({
		username,
	});

	// If user exists.
	if (results) {
		return {
			error: "User already exists",
		};
	}

	return this.create({
		username,
		password: bcrypt.hashSync(password, 12),
	});
};

const User = mongoose.models.User || Mongoose.model("User", userSchema);

export default User;
