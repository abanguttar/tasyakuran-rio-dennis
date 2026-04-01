"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <figure className="">
        <Image
          src={"/images/bg-brown.png"}
          alt="bg-brown"
          className="w-full h-full object-end object-cover"
          sizes="(min-width: 768px, 30vw) 50vw"
          fill
        />
      </figure>
      <CoverSection />
      <InvitationCard />
      <SambutanSection />
      <MapsSection />
      <PenutupSection />
    </main>
  );
}

// Cover Section with elegant transition
function CoverSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/rio.jpeg", // Ganti dengan path gambar portrait kedua Anda
    "/images/denis.jpeg", // Ganti dengan path gambar portrait pertama Anda
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-end overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <audio controls autoPlay loop>
        <source src={"/assets/birthday.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentImage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`Birthday portrait ${idx + 1}`}
                fill
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* Elegant Content */}
      <div className="relative z-10 text-center px-4 animate-fadeInUp">
        <div className="mb-6">
          <div className="inline-block">
            <div className="w-16 h-[1px] bg-white/60 mx-auto mb-4" />
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase font-light">
              Save The Date
            </p>
          </div>
        </div>

        <div className="text-center px-4 mb-10 ">
          <h2 className="text-xl md:text-7xl font-serif font-light tracking-wider text-white drop-shadow-lg mb-4">
            Tasyakuran Ulang Tahun
          </h2>

          <h2 className="text-2xl font-semibold tracking-wide text-white/90 drop-shadow">
            Satrio Hadi Wibowo <br /> (19 Tahun)
          </h2>
          <h1 className="text-3xl font-semibold tracking-wide text-white/90 drop-shadow">
            &
          </h1>
          <h2 className="text-2xl font-semibold tracking-wide text-white/90 drop-shadow">
            Dennis Aprillio Pambudi <br />
            (10 Tahun)
          </h2>
          <div className="mt-8 animate-bounce ">
            <p className="text-white/80 text-base">✨ Scroll ke bawah ✨</p>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 animate-float">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60 text-xs tracking-wider uppercase font-serif">
              Scroll
            </p>
            <div className="w-[1px] h-12 bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Sambutan Section - Elegant with 17th theme
function SambutanSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        <div className="space-y-4 text-gray-700 text-lg md:text-xl">
          <p className="leading-relaxed font-serif">
            Assalamu&apos;alaikum warahmatullahi wabarakatuh,
          </p>
          <p className="leading-relaxed font-serif">
            Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
            Tasyakuran Ulang Tahun bersama kami.
          </p>
          <div className="bg-red-50 p-6 rounded-xl my-6">
            <p className="font-medium font-serif italic text-rose-800 text-xl mt-2">
              Satrio Hadi Wibowo <br /> ke-19
            </p>
            <p className="font-medium font-serif italic text-rose-800 text-2xl mt-3">
              &
            </p>
            <p className="font-medium font-serif italic text-rose-800 text-xl  mt-3">
              Dennis Aprillio Pambudi <br /> ke-10
            </p>
          </div>
          <p className="leading-relaxed font-serif">
            Kehadiran dari Bapak/Ibu/Saudara/i merupakan kebahagiaan bagi kami.
          </p>
        </div>
      </div>
    </section>
  );
}

function MapsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-20 bg-white/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:p-12 border border-white/20">
          <div className="mb-8">
            <span className="text-5xl md:text-6xl block mb-4">📍</span>
          </div>

          <div className=" mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-center text-xl font-semibold text-black mb-8">
                Titik Kumpul & Waktu Berangkat
              </h3>
              <article className="text-black font-serif mb-10">
                <p>
                  Hari & Tanggal: <b>Jum'at, 3 April 2026</b>
                </p>
                <p>
                  Pukul: <b>09.00 WIB</b>
                </p>
                <p className="mt-2">
                  Titik Kumpul Pemberangkatan Rumah Tingkat Mamah Iin
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=6282124785110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-underline"
                >
                  <p>Hubungi: 082124785110 (Angga) </p>
                </a>
              </article>

              <h3 className="text-center text-2xl font-semibold text-black mb-8">
                Lokasi Acara
              </h3>
              <div className="space-y-4 text-gray-700 text-lg md:text-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7078748402714!2d106.9013188!3d-6.683064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c9007b89f29d%3A0x77c05ce7537b75ad!2sVilla%20Hamma!5e0!3m2!1sid!2sid!4v1775025905650!5m2!1sid!2sid"
                  width="0"
                  height="0"
                  className="w-full h-100 aspect-4/3"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-10">
                <p className="font-serif text-black text-xl mb-10">
                  Villa Hamma, Desa Sukakarya, Megamendung, Kab. Bogor
                </p>
                <a
                  href="https://www.google.com/maps/place/Villa+Hamma/@-6.683064,106.9013188,17z/data=!3m1!4b1!4m9!3m8!1s0x2e69c9007b89f29d:0x77c05ce7537b75ad!5m2!4m1!1i2!8m2!3d-6.683064!4d106.9013188!16s%2Fg%2F11wpzkrpv3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="___blank"
                  className="text-white text-2xl font-bold  bg-taupe-600 hover:bg-taupe-800 rounded-lg px-4 text-center py-2"
                >
                  Buka Lokasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Penutup Section - Elegant closing
function PenutupSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-20 bg-white/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="mb-8">
            <span className="text-5xl md:text-6xl block mb-4">🎂</span>
          </div>

          <div className=" mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-center text-2xl font-semibold text-black mb-8">
                Penutup
              </h3>
              <div className="space-y-4 text-gray-700 text-lg md:text-xl">
                <p className="leading-relaxed">
                  Terima kasih yang sebesar-besarnya atas kehadiran
                  Bapak/Ibu/Saudara/i.
                </p>
                <p className="leading-relaxed">
                  Semoga Allah SWT senantiasa melimpahkan rahmat, kesehatan, dan
                  kebahagiaan untuk kita semua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvitationCard() {
  return (
    <figure className="relative aspect-square w-full">
      <Image
        src={"/images/invitation.jpeg"}
        className="w-full object-contain"
        sizes="(min-width: 768px, 30vw) 50vw"
        fill
        alt="invitation"
      />
    </figure>
  );
}
