import { FaCity, FaUserMd, FaSearch } from "react-icons/fa";

const Filter = ({
  cities,
  specialties,
  selectedCity,
  selectedSpecialty,
  onFilterChange,
  search,
}) => {
  // const searchIcon=<FaSearch className="text-gray-600" />

  return (
    <div className="w-full  flex gap-6 flex-col  max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl shadow-xl backdrop-blur-md bg-opacity-80" style={{height:250,gap:20,backgroundColor:"rgba(67, 186, 127, 0.1);"}}>
      {/* Responsive Grid Layout */}
      
        
        {/* Search Input */}
        <div className="relative w-full ">
          <label className="text-gray-600 text-lg font-semibold mb-2 flex items-center gap-2">
           
          </label>
          <input
            type="text"
            value={search}
            placeholder={`Search doctors...`}
            className="w-full p-4 rounded-full border border-transparent bg-white/20 text-gray-600 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 ease-in-out"
            onChange={(e) => onFilterChange("search", e.target.value)}
          />
        </div>

        {/* City Filter */}
        <div className="relative w-full">
          {/* <label className="text-gray-600 text-lg font-semibold mb-2 flex items-center gap-2">
            <FaCity className="text-gray-600" /> City
          </label> */}
          <select
            className="w-full p-4 mt-2 rounded-full border border-transparent bg-white/20 text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 ease-in-out"
            value={selectedCity}
            onChange={(e) => onFilterChange("city", e.target.value)}
          >
            {/* <option value="" className="text-black font-medium">
              All Cities
            </option> */}
            {cities.map((city) => (
              <option key={city} value={city} className="text-black font-medium">
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Specialty Filter */}
        <div className="relative">
          {/* <label className="text-gray-600 text-lg font-semibold mb-2 flex items-center gap-2">
            <FaUserMd className="text-gray-600" /> Specialty
          </label> */}
          <select
            className="w-full p-4 rounded-full   border border-transparent bg-white/20 text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 ease-in-out"
            value={selectedSpecialty}
            onChange={(e) => onFilterChange("specialty", e.target.value)}
          >
            <option value="" className="text-black font-medium">
              All Specialties
            </option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty} className="text-black font-medium">
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>
   
  );
};

export default Filter;
