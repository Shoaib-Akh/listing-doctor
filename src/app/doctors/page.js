"use client";
import { useState, useEffect } from "react";
import DoctorCard from "../../../components/DoctorCard";
import Filter from "../../../components/Filter";
import axios from "axios";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [cities, setCities] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [filters, setFilters] = useState({ city: "", specialty: "" });
  const [loading, setLoading] = useState(true);

  // Fetch doctors when filters change
  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/doctors", { params: filters });

      console.log("API Response:", res);
      if (res.status === 200) {
        setDoctors(res.data);

        // Extract unique cities & specialties for dropdowns
        const uniqueCities = [...new Set(res.data.map((doc) => doc.city))];
        const uniqueSpecialties = [...new Set(res.data.map((doc) => doc.specialty))];

        // Set dropdown values only if they are not already set
        if (cities.length === 0) setCities(uniqueCities);
        if (specialties.length === 0) setSpecialties(uniqueSpecialties);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle dropdown change and update filters
  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">
        Find Your Doctor
      </h1>

      {/* Filter Component */}
      <Filter
        cities={cities}
        specialties={specialties}
        selectedCity={filters.city}
        selectedSpecialty={filters.specialty}
        onFilterChange={handleFilterChange}
      />

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : doctors.length > 0 ? (
        // Doctor Cards Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 text-xl mt-10">No doctors found.</p>
      )}
    </div>
  );
};

export default DoctorsPage;
