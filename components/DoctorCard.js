import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl text-gray-600">
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
        <p>{doctor.specialty}</p>
        <p>{doctor.city}</p>
        <div className="card-actions justify-end">
          <Link href={`/doctors/${doctor._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
