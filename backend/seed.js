import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './models/User.js';
import {config} from 'dotenv';

config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const password = await bcrypt.hash('123456', 10);

  await User.deleteMany({});
  await User.insertMany([
    {
      email: 'admin@logistics.co',
      password,
      role: 'Admin',
      customerId: 'LogisticsCo'
    },
    {
      email: 'admin@retail.gmbh',
      password,
      role: 'Admin',
      customerId: 'RetailGmbH'
    }
  ]);

  console.log(" Seed complete.");
  process.exit();
};

seed();
