const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './config/config.env') });
const User = require('./models/User');

const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Mongoose connected');
  } 
  catch (error) {
    console.error('❌ Error connecting to DB', error);
  }
};

const CreateUser = async () => {
  try {
    const testUser = new User({
      name: 'Test3 User',
      email: 'testuser@exam33ple.com',
      password: '333333',
    });

    await testUser.save();
    console.log('✅ Test user saved');
  } 
  catch (error) {
    console.error('❌ Error creating User:', error);
  }
  const allUsers = await User.find();
  console.log(allUsers);
};

const FindUser = async () => {
    try {
      const foundUser = await User.findOne({ email: 'testuser@example.com' });
      console.log('Found user:', foundUser);
    }
    catch (error) {
      console.error('❌ Error finding User:', error);
    }
};

const LoginUser = async () => {
    try {  
      const loginUser = await User.findByCredentials('testuser@example.com', 'password123');
      console.log('Login user via credentials:', loginUser);
    }
    catch (error) {
      console.error('❌ Error logging in User:', error);
    }
};

const DeleteUser = async () => {
    try {
      await User.deleteOne({ email: 'testuser@example.com' });
      console.log('✅ Test user deleted');
    } 
    catch (error) {
      console.error('❌ Error deleting User:', error);
    }
};

const CloseDBConnection = async () => {
  try {
    mongoose.connection.close();
    console.log('✅ Connection closed');
  }
  catch (error) {
    console.error('❌ Error closing connection:', error);
  }
};

const TestDB = async() => {
  // await ConnectToDB();
  // await CreateUser();
  // await FindUser();
  // await LoginUser();
  // await DeleteUser();
  // await CloseDBConnection();
  await ConnectToDB();
  await CreateUser();
  await CloseDBConnection();
};

module.exports = TestDB;

// Allow standalone execution
if (require.main === module) {
  TestDB();
}