"use client"
import { motion } from "framer-motion";
import { Sparkles, Users, Rocket, Palette, BookOpen, Code } from "lucide-react";

const ValueProposition = () => {
  const valueCards = [
    {
      title: "Belajar Seru",
      description: "Metode pembelajaran interaktif yang membuat belajar terasa seperti bermain",
      icon: <Sparkles className="w-10 h-10 text-brass-w" />,
      color: "bg-brass-w/12",
      animation: {
        y: [0, -10, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Komunitas Kreatif",
      description: "Bergabung dengan jaringan kreator muda dari seluruh Indonesia",
      icon: <Users className="w-10 h-10 text-brass-w" />,
      color: "bg-brass-w/12",
      animation: {
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: "Proyek Nyata",
      description: "Hasilkan karya nyata yang bisa dibanggakan dan ditunjukkan",
      icon: <Rocket className="w-10 h-10 text-brass-w" />,
      color: "bg-brass-w/12",
      animation: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  ];

  const features = [
    {
      icon: <Palette className="w-6 h-6 text-brass-w" />,
      text: "Aktivitas seni & kerajinan"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-brass-w" />,
      text: "Materi pembelajaran interaktif"
    },
    {
      icon: <Code className="w-6 h-6 text-brass-w" />,
      text: "Pengenalan teknologi kreatif"
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

  return (
    <section className="py-16 bg-gradient-to-br from-brass-w to-brass-w overflow-hidden relative">
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

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={item}
            className="inline-flex items-center justify-center p-4 bg-linen rounded-full shadow-lg mb-6"
          >
            <Sparkles className="w-10 h-10 text-brass-w" />
          </motion.div>
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-bold text-walnut mb-4 px-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-w to-brass-w">
              Kenapa Memilih
            </span>{" "}
            Kami?
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-lg text-grain max-w-2xl mx-auto px-4"
          >
            Kami menawarkan pengalaman belajar yang unik dan menyenangkan untuk mengembangkan kreativitas
          </motion.p>
        </motion.div>

        {/* Value cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4"
        >
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              <motion.div 
                animate={card.animation}
                className={`p-8 rounded-3xl shadow-lg ${card.color} bg-linen relative overflow-hidden h-full`}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${card.color.replace('100', '200')} opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
                  <div className="mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-walnut mb-3">{card.title}</h3>
                  <p className="text-grain">{card.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-linen rounded-3xl shadow-lg p-8 max-w-4xl mx-4 sm:mx-auto relative overflow-hidden"
        >
          <motion.h3 
            variants={item}
            className="text-2xl font-bold text-center text-walnut mb-8"
          >
            Apa saja yang akan kamu dapatkan?
          </motion.h3>
          
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-full bg-brass-w/12 mr-4">
                  {feature.icon}
                </div>
                <p className="text-walnut">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated decorative elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full border-8 border-dashed border-brass-w/30 opacity-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;