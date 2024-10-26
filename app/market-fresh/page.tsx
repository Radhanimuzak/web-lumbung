"use client";
import Image from "next/image";

export default function MarketFresh() {
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

      {/* MARKET FRESH Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">MARKET FRESH</h1>
      </div>

      {/* Stroberi Fresh Section */}
      <div className="bg-[#C30202] flex items-center justify-center py-10 px-6">
        <div className="max-w-6xl flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="mt-6 md:mt-0">
            <Image
              src="/stroberi2.jpg" // Ganti dengan lokasi file gambarmu yang sudah di-upload
              alt="Stroberi Fresh"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-white max-w-lg md:ml-8">
            <h2 className="text-3xl font-bold mb-4">Stroberi Fresh</h2>
            <p className="text-lg">
              Lumbung Stroberi menampung dan memasarkan stroberi hasil panen petani di Dusun Pandan. Buah stroberi segar dijual
              atau dijadikan buah tangan oleh wisatawan yang berkunjung ke Lumbung Stroberi.
            </p>
          </div>
        </div>
      </div>

      {/* Lorem Section */}
      <div className="bg-[#012C3D] flex items-center justify-center py-10 px-6">
        <div className="max-w-6xl flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-4">LOREM</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula semper dolor, et luctus mi volutpat ut. Suspendisse potenti.
              Ut accumsan magna nec lacus efficitur, et fermentum nisi scelerisque. Cras suscipit lacus ac ipsum lacinia, non feugiat sem vehicula. 
              Integer at justo eu arcu vulputate tincidunt. Aliquam erat volutpat. Sed tempor risus sit amet quam fermentum, nec malesuada odio feugiat. 
              Vivamus non orci nibh.
            </p>

            {/* Button Section */}
            <div className="mt-6">
              <button className="bg-[#C30202] text-white py-2 px-6 rounded-full font-bold">
                EXPLORE MORE 
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-6 md:mt-0">
            <Image
              src="/stroberi2.jpg" // Ganti dengan lokasi file gambarmu
              alt="Stroberi in Basket"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* New Section with Uploaded Image */}
      <div className="bg-[#C30202] flex items-center justify-center py-10 px-6">
        <div className="max-w-6xl flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="mt-6 md:mt-0">
            <Image
              src="/stroberi2.jpg" // Image uploaded and renamed to "stroberi3.jpg"
              alt="Fresh Strawberries"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-white max-w-lg md:ml-8">
            <h2 className="text-3xl font-bold mb-4">LOREM</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula semper dolor, et luctus mi volutpat ut. Suspendisse potenti.
              Ut accumsan magna nec lacus efficitur, et fermentum nisi scelerisque. Cras suscipit lacus ac ipsum lacinia, non feugiat sem vehicula. 
              Integer at justo eu arcu vulputate tincidunt. Aliquam erat volutpat. Sed tempor risus sit amet quam fermentum, nec malesuada odio feugiat. 
              Vivamus non orci nibh.
            </p>

            {/* Button Section */}
            <div className="mt-6">
              <button className="bg-[#012C3D] text-white py-2 px-6 rounded-full font-bold">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
