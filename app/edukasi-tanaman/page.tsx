"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function EdukasiTandurStroberi() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/lokasi-edukasi1.jpg", alt: "Lokasi Edukasi 1" },
    { src: "/lokasi-edukasi2.jpg", alt: "Lokasi Edukasi 2" },
    { src: "/lokasi-edukasi3.jpg", alt: "Lokasi Edukasi 3" },
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
          src="/header_stroberi.jpg" // Gambar yang sudah kamu namakan
          alt="Edukasi Tandur Stroberi"
          layout="responsive"
          width={100}
          height={40}
        />
      </header>

      {/* EDUKASI TANDUR STROBERI Section with Blue Background */}
      <div className="bg-[#012C3D] text-center py-6">
        <h1 className="text-white text-5xl font-bold">EDUKASI TANDUR STROBERI</h1>
      </div>

      {/* Content Section with Text */}
      <div className="bg-[#012C3D] text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <Image
              src="/edukasi1.jpg" // Gambar yang sudah kamu beri nama
              alt="Proses Pembibitan Stroberi"
              layout="responsive"
              width={100}
              height={75}
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Proses Pembibitan</h2>
            <p>
              Pembibitan dilakukan menggunakan Teknik sulur. Teknik ini dilakukan
              dengan cara mengambil bibit tanaman stroberi untuk ditanam di polybag
              kecil dahulu. Setelah itu butuh waktu 15-20 hari agar dapat dipindahkan
              ke media tanam yang lebih besar, bisa menggunakan polibek yang lebih besar
              atau bisa langsung ditanam di bedengan.
            </p>
            <h3 className="text-2xl font-semibold mt-6">Proses Penanaman</h3>
            <p>Ada 2 teknik yang bisa diterapkan untuk menanam stroberi yaitu:</p>
            <ol className="list-decimal pl-5 mt-4">
              <li>
                <strong>Menggunakan polybag:</strong> Teknik ini paling sering digunakan
                dikarenakan memiliki beberapa keunggulan yaitu buah tidak mudah rusak,
                dikarenakan buah menggantung dan terlihat lebih rapi. Media tanam yang
                digunakan adalah tanah tanpa campuran bahan lain. Polibek berukuran besar
                biasanya berisi 4 tanaman. Usahakan tanaman tidak terlalu dipinggir ataupun
                ketengah, dan membentuk sudut persegi. Setelah tanam selesai, jangan lupa
                memberikan alas seperti daun pinus atau jerami untuk menjaga kelembapan.
              </li>
              <li className="mt-4">
                <strong>Menggunakan bedengan:</strong> Teknik ini menyiapkan bedengan dengan
                media tanah, bisa dicampur dengan pupuk organik. Jarak antar tanaman sekitar
                10-15 cm. Untuk mengurangi pertumbuhan gulma, bedengan dapat ditutup dengan
                plastik mulsa. Lubangi setiap jarak tanaman stroberi agar memudahkan proses
                pemupukan.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Perawatan Section */}
      <div className="bg-[#012C3D] text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <Image
              src="/edukasi2.jpg" // Gambar yang sudah kamu beri nama
              alt="Perawatan dan Panen Stroberi"
              layout="responsive"
              width={100}
              height={75}
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Perawatan dan Panen</h2>
            <p>
              Setelah proses tanam selesai, tanaman harus dirawat agar bisa berbuah maksimal, 
              perawatan tersebut meliputi:
            </p>
            <ol className="list-decimal pl-5 mt-4">
              <li>
                <strong>Penyiraman:</strong> Biasanya dilakukan 2 hari sekali, sebaiknya dilakukan 
                pada sore hari agar tanaman tidak mudah stress dan kelembaban bisa bertahan lebih lama.
              </li>
              <li className="mt-4">
                <strong>Pemupukan:</strong> Dilakukan 10 hari sekali sampai stroberi memasuki masa panen. 
                Setelah memasuki masa panen, pemupukan dapat dikurangi menjadi 2 minggu sekali. 
                Pemupukan bisa menggunakan pupuk kering atau dicairkan terlebih dahulu.
              </li>
              <li className="mt-4">
                <strong>Penyemprotan Pestisida:</strong> Biasanya dilakukan 2 minggu sekali, namun jika 
                tanaman terkena penyakit, intensitas penyemprotan bisa ditingkatkan menjadi 1 minggu sekali. 
                Penting juga untuk membuang sulur dan daun tua, serta membersihkan gulma. Penggunaan green house 
                dapat membantu mencegah kerusakan buah akibat hujan.
              </li>
            </ol>
            <h3 className="text-2xl font-semibold mt-6">Panen</h3>
            <p>
              Stroberi dapat dipanen setelah masa tanam 2-3 bulan, dalam seminggu stroberi bisa dipanen 
              sebanyak 2-3 kali.
            </p>
            <h3 className="text-2xl font-semibold mt-6">Pasca Panen</h3>
            <p>
              Hasil panen biasanya dijual kepada tengkulak atau diolah menjadi berbagai produk seperti 
              selai, es krim, keripik, jus stroberi, atau produk kecantikan.
            </p>
          </div>
        </div>
      </div>

      {/* Image Carousel Section (Moved to the bottom) */}
      <div className="bg-[#012C3D] text-white p-8">
        <div className="relative flex justify-center items-center">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-[#012C3D] p-2 rounded-full"
          >
            &lt;
          </button>

          {/* Image Display */}
          <div className="w-full md:w-1/2">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              layout="responsive"
              width={100}
              height={75}
            />
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#012C3D] p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>

    </div>
  );
}
