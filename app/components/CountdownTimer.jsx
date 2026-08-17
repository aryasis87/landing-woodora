"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlarmClock, Rocket, PartyPopper, CalendarDays } from "lucide-react";

const CountdownTimer = () => {
  // Set target date (3 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const timeUnitAnimation = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const timeUnits = [
    { name: "days", icon: <CalendarDays className="w-6 h-6" /> },
    { name: "hours", icon: <AlarmClock className="w-6 h-6" /> },
    { name: "minutes", icon: <AlarmClock className="w-6 h-6" /> },
    { name: "seconds", icon: <AlarmClock className="w-6 h-6" /> }
  ];

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
            <Rocket className="w-10 h-10 text-brass-w" />
            <PartyPopper className="w-10 h-10 text-brass-w -ml-3" />
          </motion.div>
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-bold text-walnut mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-w to-brass-w">
              Waktu Terbatas!
            </span>{" "}
            Diskon Spesial
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-lg text-grain max-w-2xl mx-auto"
          >
            Daftar sekarang dan dapatkan potongan harga 30% sebelum promo berakhir!
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.name}
              variants={item}
              whileHover="hover"
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-linen rounded-xl shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
                {/* Animated background */}
                <motion.div 
                  className={`absolute inset-0 ${index % 2 === 0 ? 'bg-brass-w/12' : 'bg-brass-w/12'} opacity-30`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="text-3xl font-bold text-walnut z-10">
                  {timeLeft[unit.name].toString().padStart(2, '0')}
                </span>
                <div className="flex items-center mt-2 z-10">
                  {unit.icon}
                  <span className="ml-2 text-xs font-medium text-grain uppercase">
                    {unit.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-brass-w to-brass-w text-linen rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Daftar Sekarang
          </motion.button>
          
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-6 text-sm text-grain flex items-center justify-center"
          >
            <AlarmClock className="w-4 h-4 mr-2" />
            Promo berakhir {targetDate.toLocaleDateString()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;