import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import icons from react-icons
import { FaPython, FaJava, FaJsSquare, FaPhp, FaDatabase, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiLaravel, SiTailwindcss, SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiAdobephotoshop } from 'react-icons/si';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Skill list
  const skills = [
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
    { name: 'Django', icon: <SiDjango className="text-green-700" /> },
    { name: 'Laravel', icon: <SiLaravel className="text-red-600" /> },
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'MySQL', icon: <FaDatabase className="text-blue-800" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-700" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Pandas', icon: <SiPandas className="text-black" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-400" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" /> },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
