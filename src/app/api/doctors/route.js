// app/api/doctors/route.js
import dbConnect from '../../../../utils/dbConnect.mjs';
import Doctor from '../../../../models/Doctor.mjs';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const specialty = searchParams.get('specialty');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');

    const query = {};

    // Apply filters based on city, specialty, and search terms
    if (city) query.city = city;
    if (specialty) query.specialty = specialty;

    // Search functionality: filter by name or other attributes
    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') }, // Case-insensitive search in name
        // Other searchable fields can be added here
        // { bio: new RegExp(search, 'i') },
      ];
    }

    let doctorsQuery = Doctor.find(query);

    // Sorting
    if (sort === 'name') {
      doctorsQuery = doctorsQuery.sort({ name: 1 });
    }

    // Execute the query and return the result
    const doctors = await doctorsQuery.exec();

    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred' },
      { status: 400 }
    );
  }
}
