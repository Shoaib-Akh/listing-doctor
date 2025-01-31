// app/doctors/[id]/page.jsx

import dbConnect from "../../../../utils/dbConnect.mjs";
import Doctor from "../../../../models/Doctor.mjs";

const DoctorDetails = async ({ params }) => {
  const { id } = params;

  await dbConnect();

  let doctor;
  try {
    doctor = await Doctor.findById(id).lean();
  } catch (error) {
    console.error("Error fetching doctor:", error);
    doctor = null;
  }

  if (!doctor) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {doctor.photo && (
          <div className="flex justify-center items-center p-4">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="card-body text-gray-600">
          <h2 className="card-title">{doctor.name}</h2>
          <p>
            <strong>Specialty:</strong> {doctor.specialty}
          </p>
          <p>
            <strong>City:</strong> {doctor.city}
          </p>
          {doctor.officeLocation && (
            <p>
              <strong>Office Location:</strong> {doctor.officeLocation}
            </p>
          )}
          {doctor.contactInfo && (
            <>
              <p>
                <strong>Phone:</strong> {doctor.contactInfo.phone}
              </p>
              <p>
                <strong>Email:</strong> {doctor.contactInfo.email}
              </p>
            </>
          )}
          {doctor.description && <p>{doctor.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
