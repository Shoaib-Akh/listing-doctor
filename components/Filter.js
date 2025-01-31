// components/Filter.js
import { FaCity, FaUserMd } from "react-icons/fa";

const Filter = ({
  cities,
  specialties,
  selectedCity,
  selectedSpecialty,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-2xl backdrop-blur-lg bg-opacity-90 transition-all duration-300">
      
      {/* City Filter */}
      <div className="relative w-full max-w-xs">
        <label className=" text-white text-lg font-semibold mb-2 flex items-center gap-2">
          <FaCity className="text-white" /> City
        </label>
        <div className="relative">
          <select
            className="peer select w-full p-3 pr-10 rounded-lg border border-white/40 bg-white/20 text-gray-600 font-medium placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 hover:bg-white/30 transition-all duration-300 appearance-none cursor-pointer"
            value={selectedCity}
            onChange={(e) => onFilterChange('city', e.target.value)}
          >
            <option value="" className="text-gray-900 font-medium">🌍 All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city} className="text-gray-900 font-medium">
                🏙️ {city}
              </option>
            ))}
          </select>
          {/* Improved Arrow */}
         
        </div>
      </div>

      {/* Specialty Filter */}
      <div className="relative w-full max-w-xs">
        <label className=" text-white text-lg font-semibold mb-2 flex items-center gap-2">
          <FaUserMd className="text-white" /> Specialty
        </label>
        <div className="relative">
          <select
            className="peer select w-full p-3 pr-10 rounded-lg border border-white/40 bg-white/20 text-gray-600 font-medium placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 hover:bg-white/30 transition-all duration-300 appearance-none cursor-pointer"
            value={selectedSpecialty}
            onChange={(e) => onFilterChange('specialty', e.target.value)}
          >
            <option value="" className="text-gray-900 font-medium">🩺 All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty} className="text-gray-900 font-medium">
                🏥 {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
