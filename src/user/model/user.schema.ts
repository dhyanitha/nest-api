import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
	name: String,
	role: String
});

export const UserModelName = 'User';