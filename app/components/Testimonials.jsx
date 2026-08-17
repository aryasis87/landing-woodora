"use client"
import { motion } from "framer-motion";
import { Star, Quote, Smile, Heart, Rocket } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Orang Tua",
      avatar: "/images/pp1.png",
      content: "Anak saya jadi lebih percaya diri setelah ikut kursus ini. Metode belajarnya menyenangkan!",
      rating: 5,
      color: "bg-brass-w/12",
      icon: <Smile className="w-6 h-6 text-brass-w" />
    },
    {
      id: 2,
      name: "Ani Wijaya",
      role: "Guru SD",
      avatar: "/images/pp2.png",
      content: "Siswa-siswa saya sangat antusias dengan program kreatif ini. Materinya sangat interaktif!",
      rating: 4,
      color: "bg-brass-w/12",
      icon: <Heart className="w-6 h-6 text-brass-w" />
    },
    {
      id: 3,
      name: "Rudi Hartono",
      role: "Founder Startup",
      avatar: "/images/pp3.png",
      content: "Tim kami mendapatkan banyak inspirasi dari komunitas kreatif ini. Sangat recommended!",
      rating: 5,
      color: "bg-brass-w/12",
      icon: <Rocket className="w-6 h-6 text-brass-w" />
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hoverCard = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brass-w/10 to-linen overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute left-20 top-1/4 w-32 h-32 rounded-full bg-brass-w/20"
      />
      
      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="hidden lg:block absolute right-20 bottom-1/4 w-40 h-40 rounded-full bg-brass-w/20"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-linen rounded-full shadow-lg mb-6">
            <Quote className="w-10 h-10 text-brass-w" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-walnut mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-w to-brass-w">
              Kata Mereka
            </span>{" "}
            Tentang Kami
          </h2>
          <p className="text-lg text-grain max-w-2xl mx-auto">
            Lihat apa yang dikatakan peserta, orang tua, dan partner tentang pengalaman mereka!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover="hover"
              className="relative"
            >
              <motion.div 
                className={`p-6 rounded-3xl shadow-lg ${testimonial.color} bg-linen relative overflow-hidden`}
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 opacity-10 text-grain" />
                
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-brass-w text-brass-w' : 'text-grain'}`}
                    />
                  ))}
                </div>
                
                {/* Testimonial content */}
                <p className="text-walnut italic mb-6 relative z-10">"{testimonial.content}"</p>
                
                {/* Testimonial author */}
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <motion.div 
                      className={`absolute -bottom-1 -right-1 p-1 rounded-full ${testimonial.color} border-2 border-white`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonial.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-walnut">{testimonial.name}</h4>
                    <p className="text-sm text-grain">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated floating avatars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 space-x-4"
        >
          {[
            "/images/pp4.png",
            "/images/pp5.png",
            "/images/pp6.png",
            "/images/pp1.png",
            "/images/pp2.png"
          ].map((avatar, index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, index % 2 === 0 ? 5 : -5, 0]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3
              }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden"
            >
              <img 
                src={avatar} 
                alt={`Happy member ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-brass-w to-brass-w text-linen font-bold shadow-lg"
          >
            +25
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-brass-w to-brass-w text-linen rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Bergabung Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;