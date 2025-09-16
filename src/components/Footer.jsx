import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <FaEnvelope />, link: "mailto:c4crypt@gmail.com" },
    { icon: <FaGithub />, link: "https://github.com/sixdgt" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/codesandesh/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/codesandes" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@codesandesh" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/codesandes/" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@codesandesh" },
  ];

  return (
    <footer className="bg-indigo-700 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Sandesh Tamang</p>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-200"
              whileHover={{ scale: 1.2, color: "#FBBF24" }} // hover pop & color change
              transition={{ type: "spring", stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
