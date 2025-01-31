// app/api/doctors/[id]/route.js
import dbConnect from '../../../../../utils/dbConnect.mjs';
import Doctor from '../../../../../models/Doctor.mjs';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return NextResponse.json(
        { success: false, message: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: doctor }, { status: 200 });
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while fetching the doctor.' },
      { status: 500 }
    );
  }
}
