import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white pt-24">
      
      {/* Profile Image */}
      <motion.img
        src="/images/sandesh.jpg"
        alt="Sandesh Tamang"
        onLoad={() => setLoaded(true)}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={loaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        whileTap={{ scale: 0.97 }}
      />

      {/* Name */}
      <motion.h1 className="text-4xl md:text-5xl font-bold mt-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Sandesh Tamang
      </motion.h1>

      {/* Title & Bio */}
      <motion.div className="mt-3 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-lg md:text-xl text-gray-600">
          MSc Data Science & Computational Intelligence | Aspiring Data Scientist
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Faculty Lecturer at <strong>DAV College, TU</strong> | <strong>DAV International College, FWU</strong> | <strong>NIT, IGNOU</strong>.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        
        <motion.a
          href="/SandeshTamangCV.pdf"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div className="mt-6 flex space-x-5 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        {[ 
          { icon: FaEnvelope, link: "mailto:c4crypt@gmail.com", hover: "text-blue-600" },
          { icon: FaGithub, link: "https://github.com/sixdgt", hover: "text-gray-900" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/codesandesh/", hover: "text-blue-700" },
          { icon: FaFacebook, link: "https://www.facebook.com/codesandes", hover: "text-blue-600" },
          { icon: FaYoutube, link: "https://www.youtube.com/@codesandesh", hover: "text-red-600" },
          { icon: FaInstagram, link: "https://www.instagram.com/codesandes/", hover: "text-pink-500" },
          { icon: FaTiktok, link: "https://www.tiktok.com/@codesandesh", hover: "text-black" },
        ].map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 transition-colors ${social.hover}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
