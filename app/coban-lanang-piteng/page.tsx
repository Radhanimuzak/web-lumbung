"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function CobanLanangDanPiteng() {
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // List of images and titles
  const images = [
    { src: "/CobanLanang.jpg", title: "LOKASI 1", alt: "Coban Lanang Waterfall" },
    { src: "/CobanPiteng.jpg", title: "LOKASI 2", alt: "Coban Piteng Waterfall" },
    { src: "/CobanLanang.jpg", title: "LOKASI 3", alt: "Coban Lanang Waterfall" },
  ];

  // Handler functions to navigate images
  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
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

      {/* EDUKASI TANDUR STROBERI Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">COBAN LANANG DAN COBAN PITENG</h1>
      </div>

      {/* Coban Lanang Section with Image and Text */}
      <section className="flex items-center bg-[#C30202] p-6">
        <div className="w-1/3">
          <Image
            src="/CobanLanang.jpg"
            alt="Coban Lanang Waterfall"
            layout="responsive"
            width={100}
            height={80}
            className="rounded"
          />
        </div>
        <div className="w-2/3 pl-6 text-white">
          <h2 className="text-3xl font-bold mb-2">Coban Lanang</h2>
          <p className="text-lg">
            Coban Lanang adalah air terjun di Pujon, Malang, yang menawarkan suasana alami dengan air jernih dan pepohonan hijau. Lokasinya mudah diakses dan cocok untuk bersantai.
          </p>
        </div>
      </section>

      {/* Coban Piteng Section with Image on Right and Text on Left */}
      <section className="flex items-center bg-[#012C3D] p-6">
        <div className="w-2/3 pr-6 text-white">
          <h2 className="text-3xl font-bold mb-2">Coban Piteng</h2>
          <p className="text-lg">
            Coban Piteng adalah air terjun yang terletak di Desa Pandesari, Pujon, Malang. Dikelilingi oleh hutan yang asri, air terjun ini memiliki pemandangan alami yang indah dan suasana tenang, menjadikannya tempat yang cocok untuk bersantai dan menikmati alam.
          </p>
        </div>
        <div className="w-1/3">
          <Image
            src="/CobanPiteng.jpg"
            alt="Coban Piteng Waterfall"
            layout="responsive"
            width={100}
            height={80}
            className="rounded"
          />
        </div>
      </section>

      {/* Carousel Section at the Bottom */}
      <section className="bg-[#C30202] text-center py-8">
        <h2 className="text-white text-3xl font-bold mb-4">LOKASI COBAN PITENG & LANANG</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 ml-4 p-2 bg-white rounded-full text-[#C30202] font-bold"
          >
            {"<"}
          </button>

          <div className="flex flex-col items-center mx-4">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              width={200}
              height={250}
              className="rounded-lg"
            />
            <p className="text-white font-bold mt-2">{images[currentImage].title}</p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 mr-4 p-2 bg-white rounded-full text-[#C30202] font-bold"
          >
            {">"}
          </button>
        </div>
      </section>

    </div>
  );
}
