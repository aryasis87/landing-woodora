"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Head from 'next/head';

const Hero = () => {
  const constraintsRef = useRef(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Daftar produk furniture
  const products = [
    {
      name: "Sofa Minimalis",
      image: "/images/sofa.jpg",
      color: "bg-brass-w/12",
    },
    {
      name: "Meja Kayu Solid",
      image: "/images/bg3.jpg",
      color: "bg-brass-w/12",
    },
    {
      name: "Rak Buku Elegan",
      image: "/images/bg4.jpg",
      color: "bg-brass-w/12",
    },
  ];

  // Avatar diambil dari berkas lokal di public/images
  const avatars = [
    "/images/pp2.png",
    "/images/pp5.png",
    "/images/pp6.png"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-linen-2 to-linen py-16 md:py-24 px-4 max-w-screen">
      <Head>
        <link rel="preload" href="/images/sofa.jpg" as="image" />
      </Head>
      
      {/* Brand Logo/Title */}
      <div className="absolute top-6 left-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {/* You can replace this with your actual logo image */}
          <div className="w-8 h-8 bg-gradient-to-r from-brass-w to-brass-w rounded-full flex items-center justify-center">
            <span className="text-linen font-bold text-sm">W</span>
          </div>
          <span className="text-xl font-bold text-walnut">Woodora</span>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -10, 0],
            y: [0, 5, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute blur-xl top-10 left-10 w-24 h-24 rounded-full bg-brass-w/12 opacity-20"
        />
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute blur-xl bottom-20 right-20 w-32 h-32 rounded-full bg-brass-w/12 opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          {/* Text content */}
          <motion.div variants={item} className="lg:w-1/2">
            <motion.h1
              style={{ willChange: 'transform' }}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-walnut mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-w to-brass-w">
                Furnitur Berkualitas
              </span>{" "}
              untuk Rumah Impian
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-walnut mb-8">
              Temukan koleksi furniture eksklusif yang akan mengubah rumah Anda menjadi ruang hidup yang indah dan nyaman.
            </motion.p>
            
            {/* Product highlights */}
            <motion.div variants={item} className="mb-8">
              <h3 className="font-semibold text-walnut mb-3">Koleksi Kami:</h3>
              <div className="flex flex-wrap gap-3">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`px-4 py-2 rounded-full ${product.color} shadow-sm flex items-center`}
                  >
                    <span className="text-sm font-medium text-walnut">
                      {product.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                aria-label="Lihat Katalog Lengkap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-brass-w to-brass-w text-linen rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Lihat Katalog Lengkap
              </motion.button>
              <motion.button
                aria-label="Konsultasi Desain Gratis"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-linen text-brass-w border-2 border-brass-w/30 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Konsultasi Desain Gratis
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Product showcase */}
          <motion.div
            ref={constraintsRef}
            variants={item}
            className="lg:w-1/2 relative mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main product showcase */}
              <motion.div
                drag
                dragConstraints={constraintsRef}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 bg-linen p-6 rounded-2xl shadow-xl border border-walnut/12"
              >
                <div className="aspect-auto mb-4 overflow-hidden rounded-lg relative h-full">
                  <Image
                    src="/images/sofa.jpg"
                    alt="Sofa Minimalis Luxurious"
                    width={600}
                    height={400}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl text-walnut">Paket Ruang Tamu Lengkap</h3>
                    <p className="text-walnut">Untuk ruang 3x4 meter</p>
                  </div>
                  <div className="bg-brass-w/12 px-3 py-1 rounded-full">
                    <span className="font-bold text-brass-w">Terlaris!</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {avatars.map((avatar, index) => (
                        <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white">
                          <Image
                            src={avatar}
                            alt={`Pelanggan ${index + 1}`}
                            width={32}
                            height={32}
                            className="object-cover rounded-full"
                            sizes="32px"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-grain">+120 pembeli</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-grain line-through">Rp 4.999.000</p>
                    <p className="font-bold text-lg text-brass-w">Rp 2.999.000</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating product cards */}
              <motion.div
                drag
                dragConstraints={constraintsRef}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-8 -left-8 w-24 h-32 bg-linen rounded-lg shadow-md p-2 border border-walnut/12 z-20 overflow-hidden"
                style={{ willChange: 'transform' }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-full h-16 rounded-md mb-1 overflow-hidden">
                  <Image
                    src="/images/bg3.jpg"
                    alt="Meja Makan Kayu"
                    width={96}
                    height={64}
                    loading="lazy"
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <p className="text-xs font-medium text-walnut truncate">Meja Makan</p>
                <div className="flex items-center mt-1">
                  <svg className="w-3 h-3 text-brass-w" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-grain ml-1">4.9</span>
                </div>
              </motion.div>
              
              <motion.div
                drag
                dragConstraints={constraintsRef}
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-34 -right-4 w-28 h-36 bg-linen rounded-lg shadow-md p-2 border border-walnut/12 z-20 overflow-hidden"
                style={{ willChange: 'transform' }}
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="relative w-full h-20 rounded-md mb-1 overflow-hidden">
                  <Image
                    src="/images/bg4.jpg"
                    alt="Kursi Tamu Elegan"
                    width={112}
                    height={80}
                    loading="lazy"
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <p className="text-xs font-medium text-walnut truncate">Kursi Tamu</p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-brass-w" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-grain ml-1">4.8</span>
                  </div>
                  <span className="text-xs px-1 bg-brass-w/12 text-brass-w rounded">Baru!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        style={{ willChange: 'transform' }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full border-8 border-dashed border-brass-w/30 opacity-50"
      />
    </section>
  );
};

export default Hero;