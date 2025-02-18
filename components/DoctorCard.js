import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewDetails = async () => {
    setIsLoading(true);

    // Simulate an asynchronous action with setTimeout
    setTimeout(() => {
      console.log("Simulated fetch complete");
      setIsLoading(false);
    }, 2000);
  };

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
          <Link href={`/doctors/${doctor._id}`} passHref>
            <div className="flex flex-row center gap-5" onClick={handleViewDetails} disabled={isLoading}>
              {isLoading  && <span className="loading loading-spinner loading-md text-primary"></span> }
              <FaArrowRight className="text-gray-600" />    Book Appointment

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
