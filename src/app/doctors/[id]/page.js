
import dbConnect from "../../../../utils/dbConnect.mjs";
import Doctor from "../../../../models/Doctor.mjs";
import Link from "next/link";
const DoctorDetails = async ({ params }) => {
  const { id } = await params

  let doctor;
  try {
    doctor = await Doctor.findById(id).lean();
  } catch (error) {
    console.error("Error fetching doctor:", error);
    doctor = null;
  }
  // await dbConnect();

  if (!doctor) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
       <div className="container mx-auto p-4">
        {/* <p className="text-red-500">Doctor not found.</p> */}
       
       <Link href="/doctors">
       <button
        
          className="mt-4 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md hover:from-blue-600 hover:to-indigo-700 transition-transform transform hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back
        </button>
       </Link>
    

       
      </div>
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
