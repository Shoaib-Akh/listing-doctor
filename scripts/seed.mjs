const doctors = [
  {
    name: 'Dr. Jane Doe',
    specialty: 'Cardiology',
    city: 'New York',
    photo: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1470&auto=format&fit=crop',
    description: 'Experienced cardiologist with over 10 years in the field, specializing in preventive heart care and advanced cardiac procedures.',
    officeLocation: '123 Health St, New York, NY',
    contactInfo: {
      phone: '123-456-7890',
      email: 'jane.doe@example.com',
    },
  },
  {
    name: 'Dr. John Smith',
    specialty: 'Orthopedics',
    city: 'Los Angeles',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop',
    description: 'Specialist in neurological disorders with a focus on research and innovative treatment methodologies.',
    officeLocation: '456 Wellness Blvd, Los Angeles, CA',
    contactInfo: {
      phone: '987-654-3210',
      email: 'john.smith@example.com',
    },
  },
  {
    name: 'Dr. Emily Johnson',
    specialty: 'Dermatology',
    city: 'New York',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1528&auto=format&fit=crop',
    description: 'Dedicated dermatologist specializing in cosmetic and clinical dermatology, committed to enhancing skin health.',
    officeLocation: '789 Beauty Ave, New York, IL',
    contactInfo: {
      phone: '555-123-4567',
      email: 'emily.johnson@example.com',
    },
  },
  {
    name: 'Dr. Michael Brown',
    specialty: 'Cardiology',
    city: 'Los Angeles',
    photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1374&auto=format&fit=crop',
    description: 'Compassionate pediatrician with a focus on child health, growth, and preventive care for young patients.',
    officeLocation: '101 KidCare St, Los Angeles, TX',
    contactInfo: {
      phone: '777-888-9999',
      email: 'michael.brown@example.com',
    },
  },
  {
    name: 'Dr. Sophia Martinez',
    specialty: 'Neurology',
    city: 'San Francisco',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experienced ophthalmologist treating eye conditions and specializing in vision correction procedures.',
    officeLocation: '321 Vision Way, San Francisco, CA',
    contactInfo: {
      phone: '888-555-1234',
      email: 'sophia.martinez@example.com',
    },
  },
  {
    name: 'Dr. Daniel White',
    specialty: 'Neurology',
    city: 'San Francisco',
    photo: 'https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Leading orthopedic surgeon with expertise in sports injuries and joint replacement surgeries.',
    officeLocation: '567 BoneCare Rd, San Francisco, FL',
    contactInfo: {
      phone: '444-222-1111',
      email: 'daniel.white@example.com',
    },
  },

  {
    name: 'Dr. William Green',
    specialty: 'Orthopedics',
    city: 'Denver',
    photo: 'https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Board-certified psychiatrist with expertise in mental health, therapy, and medication management.',
    officeLocation: '234 MindCare Ave, Denver, CO',
    contactInfo: {
      phone: '555-987-6543',
      email: 'william.green@example.com',
    },
  },

];

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Doctor from '../models/Doctor.mjs';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({
  path: (__dirname, '.env.local')
});
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

async function seed() {
  try {
    await Doctor.deleteMany({});
    console.log('Deleted existing doctors');

    // Assuming you have an array of doctor objects
    await Doctor.insertMany(doctors);
    console.log('Inserted sample doctors');
  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
