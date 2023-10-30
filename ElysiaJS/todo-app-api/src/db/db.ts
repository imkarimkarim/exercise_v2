import mongoose from 'mongoose';

const connection = process.env.MONGODB_URI ?? 'mongodb://localhost:27017';

mongoose.connect(connection).then(() => console.log('Connected to DataBase Successfully!'));
export default mongoose;
