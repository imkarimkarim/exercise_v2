import mongoose, { Schema, model } from 'mongoose';

const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017';

mongoose.connect(connection);

mongoose.connection
	.on('open', () => console.log('mongoose is connected'))
	.on('close', () => console.log('mongoose is disconnected'))
	.on('error', (error) => console.log(error));

// create a schema
const userSchema = new Schema(
	{
		name: String,
		age: Number,
	},
	{
		timestamps: true,
	}
);

// create a model
const User = model('User', userSchema);

const tmpUser = new User({
	name: 'karim',
	age: 23,
});

tmpUser.save().then((res) => {
	console.log('res', res);
	User.find({}).then((val) => {
		console.log(val);
	});
});

export default mongoose;
