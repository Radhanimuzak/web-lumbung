"use client";
import Image from "next/image";
import { useState } from "react";

export default function LumbungCafe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const menuItems = [
    {
      id: 1,
      title: "LOREM",
      imageSrc: "/stroberi2.jpg", // Replace with your image path
    },
    {
      id: 2,
      title: "LOREM",
      imageSrc: "/stroberi2.jpg", // Replace with your image path
    },
    {
      id: 3,
      title: "LOREM",
      imageSrc: "/stroberi2.jpg", // Replace with your image path
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="min-h-screen">
      {/* Header Section with Image */}
      <header className="relative">
        <Image
          src="/header_stroberi.jpg"
          alt="Edukasi Tandur Stroberi"
          layout="responsive"
          width={100}
          height={40}
        />
      </header>

      {/* LUMBUNG CAFE Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">LUMBUNG CAFE</h1>
      </div>

      {/* Lumbung Stroberi Cafe Section */}
      <div className="bg-[#C30202] flex items-center justify-center py-10 px-6">
        <div className="max-w-6xl flex flex-col md:flex-row items-center">
          <div className="text-white max-w-lg md:mr-8">
            <h2 className="text-3xl font-bold mb-4">Lumbung Stroberi Cafe</h2>
            <p className="text-lg">
              Lumbung Stroberi Cafe menyajikan berbagai macam olahan yang berbahan dasar stroberi atau bukan stroberi.
              Pengunjung bisa menikmati sajian dari Lumbung Stroberi Cafe dengan suasana cafe yang berada di tengah kebun
              stroberi dan panorama atau pemandangan alam yang indah.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Image
              src="/stroberi2.jpg"
              alt="Lumbung Stroberi Cafe"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* MENU FAVORIT Section */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">MENU FAVORIT</h1>
      </div>

      {/* Carousel Section */}
      <div className="relative bg-[#012C3D] flex items-center justify-center py-10 px-6">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#9664; {/* Left arrow symbol */}
        </button>

        <div className="flex justify-center space-x-4">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-lg overflow-hidden bg-[#C30202] ${
                index === currentIndex ? "block" : "hidden"
              }`}
              style={{ width: "300px", height: "400px" }}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <button className="bg-[#012C3D] text-white py-2 px-4 mt-4 rounded-md">
                  LIHAT DETAIL
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#9654; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
}
