"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/1.jpg', alt: 'Lokasi 1' },
    { src: '/2.jpg', alt: 'Lokasi 2' },
    { src: '/3.jpg', alt: 'Lokasi 3' }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen">
      
      {/* Header Section with Image */}
      <header className="relative">
        <Image
          src="/header_stroberi.jpg"
          alt="Header Stroberi"
          layout="responsive"
          width={100}
          height={40}
        />
      </header>

      {/* PETIK STROBERI Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">PETIK STROBERI</h1>
      </div>

      {/* Main Content Section with Red Background */}
      <main className="bg-[#C30202] text-white p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src="/menanam.jpg"
              alt="Menanam Stroberi"
              layout="intrinsic"
              width={400}
              height={300}
            />
          </div>

          {/* Right Side - Text Content */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Stroberi berasal dari bahasa inggris kuno Streawberige yang merupakan gabungan dari streaw atau "straw" dan berige atau "berry". Buah stroberi mempunyai banyak kandungan antioksidan dan vitamin C seperti ellagic acid, phytochemicals, phenolic, dan flavonoid. Usia tanaman stroberi mencapai lima tahun, dalam kurun waktu tersebut tanaman membutuhkan waktu 45 hari pertama atau 1,5 bulan setelah ditanam untuk tumbuh dan siap dipetik.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Pengunjung dapat menikmati pengalaman unik dengan memetik buah stroberi langsung dari kebun yang sudah dikelola oleh petani lokal, khususnya dusun pandan, Desa Wisata Pandanrejo. Petik stroberi ini salah satunya bertujuan untuk menyejahterakan petani lokal.
            </p>
            <p className="text-lg leading-relaxed">
              Pengunjung bisa memetik buah stroberi dengan didampingi oleh pemandu wisata lokal serta diberi wawasan mengenai buah stroberi. Hasil petik stroberi bisa dibawa pulang dengan cara ditimbang terlebih dahulu di lumbung stroberi cafe oleh staff. Pengunjung juga dapat memakan buah stroberi secara langsung dikebun stroberi.
            </p>
          </div>
        </div>

        {/* New Section with Steps and Image on the Right */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          {/* Left Side - Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tahapan untuk Memetik Stroberi di Lumbung</h2>
            <p className="text-lg leading-relaxed mb-4">
              Pertama, pengunjung datang langsung ke lumbung atau bisa reservasi terlebih dahulu melalui contact whatsapp dan instagram. Selanjutnya, pengunjung diharuskan untuk melakukan pendaftaran atau konfirmasi terlebih dahulu untuk yang sudah reservasi. Nantinya pengunjung akan diberi informasi dan arahan untuk menuju ke kebun stroberi oleh pemandu. Nahhh, dan pengunjung siap untuk memetik stroberi (tidak ada batas waktu). Setelah pengunjung puas memetik stroberi, pengunjung dapat kembali ke lumbung stroberi cafe untuk melakukan penimbangan buah dan melakukan administrasi akhir.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Mayoritas petani di Desa Wisata Pandanrejo tepatnya di Dusun Pandan adalah petani stroberi. Melimpahnya kebun stroberi di Dusun Pandan dijadikan potensi wisata alam yaitu, Petik Stroberi.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Petik Stroberi adalah kegiatan wisata dimana wisatawan bisa memetik buah stroberi langsung dari kebun stroberi sepuasnya dengan didampingi pemandu wisata lokal. Kegiatan wisata ini selain hanya memetik stroberi, wisatawan diberi wawasan tentang stroberi. Wisatawan bisa memakan langsung buah stroberi di kebun. Hasil petik stroberi bisa dibawa pulang dengan ditimbang terlebih dahulu.
            </p>
            <p className="text-lg leading-relaxed">
              Kebun stroberi yang digunakan untuk petik adalah kebun milik warga atau petani stroberi di Dusun Pandan yang bertujuan untuk mensejahterkan petani stroberi di Dusun Pandan, Desa Wisata Pandanrejo.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <Image
              src="/stroberi.jpg"
              alt="Stroberi"
              layout="intrinsic"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Section with Carousel and Navigation Buttons */}
        <div className="bg-[#012C3D] p-6 mt-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-6">Lokasi Kebun Stroberi</h2>
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            
            {/* Previous Button */}
            <button
              className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-500"
              onClick={handlePrev}
            >
              &#8249; {/* Left Arrow */}
            </button>

            {/* Current Image */}
            <div className="mx-4">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <p className="mt-2">{images[currentIndex].alt}</p>
            </div>

            {/* Next Button */}
            <button
              className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-500"
              onClick={handleNext}
            >
              &#8250; {/* Right Arrow */}
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
