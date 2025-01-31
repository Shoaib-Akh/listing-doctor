import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  city: { type: String, required: true },
  photo: { type: String, required: false },
  description: { type: String, required: false },
  officeLocation: { type: String, required: false },
  contactInfo: {
    phone: { type: String },
    email: { type: String },
  },
});

export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);
