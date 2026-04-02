import Image from "next/image";

import { useState, useEffect, useRef } from "react";
export default function CoverSection() {
  const audioRef = useRef<HTMLAudioElement>(null);

  function handlePlayAudio() {
    console.log("played");
    // @ts-ignore
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Audio berhasil diputar");
        })
        .catch((error: Error) => {
          console.log("Autoplay diblokir:", error);
          // Fallback: tambahkan user interaction
        });
    }
  }
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
    <section
      onClick={handlePlayAudio}
      className=" relative h-screen flex flex-col items-center justify-end overflow-hidden"
    >
      <audio id="audio" hidden controls autoPlay ref={audioRef}>
        <source src="assets/birthday-jamrud.mp3" type="audio/mp3" />
      </audio>
      {/* Background Images with Smooth Transition */}
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
