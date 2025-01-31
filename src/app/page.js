import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-6 text-center backdrop-blur-lg bg-opacity-90 transform hover:scale-105 transition-all duration-500">
        
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-8 drop-shadow-lg p-2">
          Welcome to Doctor Listing
        </h1>
        <p className="text-gray-800 text-2xl mb-10 font-medium leading-relaxed">
          Connect with top medical professionals effortlessly. Explore specialists, read reviews, and schedule appointments with ease.
        </p>
        
        <div className="flex justify-center space-x-6">
          <Link href="/doctors">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
              Browse Doctors
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
