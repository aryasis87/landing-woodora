"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardEdit, 
  Cake, 
  Sparkles, 
  Clock,
  ChevronDown,
  HelpCircle,
  BookOpenText,
  Users,
  Palette,
  Code2,
  Leaf
} from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Bagaimana cara memesan furnitur custom?",
      answer: "Klik 'Pesan Sekarang', kirim ukuran ruangan dan contoh gaya yang Anda suka, lalu tim kami menyiapkan sketsa dan penawaran harga.",
      icon: <ClipboardEdit className="w-6 h-6 text-brass-w" />
    },
    {
      question: "Kayu apa saja yang digunakan?",
      answer: "Kami memakai jati, mahoni, dan walnut dari pemasok berizin, dengan finishing yang aman untuk dipakai di dalam rumah.",
      icon: <Cake className="w-6 h-6 text-brass-w" />
    },
    {
      question: "Apa yang membuat Woodora berbeda?",
      answer: "Setiap furnitur dikerjakan pengrajin dan bisa disesuaikan dengan ukuran ruangan Anda, bukan ukuran pabrik.",
      icon: <Sparkles className="w-6 h-6 text-brass-w" />
    },
    {
      question: "Berapa lama proses pembuatan dan pengiriman?",
      answer: "Produk siap stok dikirim dalam 3–7 hari. Furnitur custom selesai dalam 3–5 minggu, sudah termasuk perakitan di rumah.",
      icon: <Clock className="w-6 h-6 text-brass-w" />
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const answerVariants = {
    open: { 
      opacity: 1, 
      height: "auto",
      marginTop: "0.5rem",
      transition: { 
        duration: 0.3,
        ease: [0.16, 0.77, 0.47, 0.97] 
      } 
    },
    closed: { 
      opacity: 0, 
      height: 0,
      marginTop: "0",
      transition: { 
        duration: 0.2,
        ease: [0.16, 0.77, 0.47, 0.97]
      } 
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brass-w/10 to-linen relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute left-20 top-1/4 w-24 h-24 rounded-full bg-brass-w/20"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden lg:block absolute right-20 bottom-1/4 w-32 h-32 rounded-full bg-brass-w/20"
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div variants={item} className="flex justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-brass-w" />
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-walnut mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-w to-brass-w">
              Pertanyaan
            </span>{" "}
            yang Sering Ditanyakan
          </motion.h2>
          <motion.p variants={item} className="text-lg text-grain max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan-pertanyaan umum seputar produk dan layanan kami.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="mb-4 overflow-hidden"
            >
              <motion.div
                initial={false}
                onClick={() => toggleFAQ(index)}
                className={`p-6 rounded-xl cursor-pointer flex items-start ${activeIndex === index ? 'bg-linen shadow-lg border border-brass-w/30' : 'bg-linen/90 hover:bg-linen shadow-md border border-white'}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="mr-4 mt-1">{faq.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-walnut text-left">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      className="text-grain ml-4"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={answerVariants}
                        className="pt-3 text-grain text-left flex items-start"
                      >
                        <span className="block w-1.5 h-1.5 rounded-full bg-brass-w mt-2 mr-3 flex-shrink-0"></span>
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-grain mb-6">Masih ada pertanyaan lain?</p>
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-brass-w to-brass-w text-linen rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Hubungi Tim Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;