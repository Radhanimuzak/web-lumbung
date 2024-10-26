"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function PointballDanOutBound() {
  // Define an array of images for the carousel
  const images = ["/paintball.jpg", "/paintball.jpg", "/paintball.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle previous button
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next button
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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

      {/* EDUKASI TANDUR STROBERI Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">PAINTBALL DAN OUTBOUND</h1>
      </div>

      {/* Paintball & Outbound Section with Red Background */}
      <div className="bg-[#C30202] text-white p-6 flex justify-between items-center">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Paintball & Outbound</h2>
          <p className="text-lg">
            Permainan edukasi tim dengan jumlah minimal 10 orang yang bertujuan untuk meningkatkan “ Team Building, Team Work, Komunikasi, Leadership, Konsentrasi, Kreatifitas, Strategi Planning, Analisis, dan Percaya Diri"
          </p>
        </div>
        <div className="w-1/3">
          <Image
            src="/paintball.jpg" // Nama gambar sesuai yang kamu inginkan
            alt="Paintball & Outbound"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* LOKASI PAINTBALL DAN OUTBOUND Section */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">LOKASI PAINTBALL DAN OUTBOUND</h1>
      </div>

      {/* Carousel Section */}
      <div className="bg-[#012C3D] text-center py-6">
        <div className="relative w-1/2 mx-auto flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-white text-black p-2 rounded-full hover:bg-gray-300"
          >
            &lt;
          </button>
          <Image
            src={images[currentImageIndex]}
            alt="Paintball & Outbound Gallery"
            layout="responsive"
            width={100}
            height={60}
          />
          <button
            onClick={handleNext}
            className="absolute right-0 bg-white text-black p-2 rounded-full hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
