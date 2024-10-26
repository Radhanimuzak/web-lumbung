"use client";
import { useState } from "react";
import Image from "next/image";

export default function RaftingDanTubing() {
  // State to handle location and image
  const [currentLocation, setCurrentLocation] = useState(1);

  // Data for different locations (image and text for each location)
  const locations = [
    {
      id: 1,
      src: "/rafting.jpg", // Image for Lokasi 1
      alt: "Rafting Lokasi 1",
      description: "LOKASI 1",
    },
    {
      id: 2,
      src: "/rafting.jpg", // Image for Lokasi 2
      alt: "Rafting Lokasi 2",
      description: "LOKASI 2",
    },
    {
      id: 3,
      src: "/rafting.jpg", // Image for Lokasi 3
      alt: "Rafting Lokasi 3",
      description: "LOKASI 3",
    },
  ];

  // Function to handle going to the previous image
  const handlePrevious = () => {
    setCurrentLocation((prev) => (prev === 1 ? locations.length : prev - 1));
  };

  // Function to handle going to the next image
  const handleNext = () => {
    setCurrentLocation((prev) => (prev === locations.length ? 1 : prev + 1));
  };

  const current = locations.find((loc) => loc.id === currentLocation);

  return (
    <div className="min-h-screen">
      {/* Header Section with Image */}
      <header className="relative">
        <Image
          src="/header_stroberi.jpg" // Gambar yang sudah kamu namakan
          alt="Edukasi Tandur Stroberi"
          layout="responsive"
          width={100}
          height={40}
        />
      </header>

      {/* Rafting & Tubing Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">RAFTING & TUBING</h1>
      </div>

      {/* Rafting & Tubing Section with Red Background */}
      <div className="bg-[#C30202] flex items-center justify-center py-10 px-6">
        <div className="max-w-6xl flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Rafting & Tubing</h2>
            <p className="text-lg">
              Memadukan unsur petualangan, edukasi, olahraga dan rekreasi
              dengan mengarungi aliran Sungai Brantas menggunakan perahu
              karet atau boat.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-6 md:mt-0">
            <Image
              src="/rafting.jpg" // Image renamed to "rafting_tubing.jpg"
              alt="Rafting and Tubing"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">RAFTING & TUBING</h1>
      </div>
      
      {/* Slider Section with Red Background */}
      <div className="bg-[#C30202] flex flex-col items-center py-10 px-6">
        {/* Buttons for Slider Navigation */}
        <div className="flex justify-between w-full max-w-3xl mb-4">
          <button
            onClick={handlePrevious}
            className="bg-[#012C3D] text-white py-2 px-4 rounded-full font-bold"
          >
            {"<"} Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#012C3D] text-white py-2 px-4 rounded-full font-bold"
          >
            Next {">"}
          </button>
        </div>

        {/* Display the Current Image and Description */}
        <div className="max-w-6xl flex flex-col md:flex-row items-center">
          <Image
            src={current.src} // Change image based on current location
            alt={current.alt}
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div className="text-center mt-4">
            <h2 className="text-white text-2xl font-bold">{current.description}</h2>
          </div>
        </div>
      </div>


    </div>
  );
}
