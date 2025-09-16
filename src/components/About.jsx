import { motion } from "framer-motion";
import profilePic from "../assets/images/sandesh.jpg";

export default function About() {
  const skills = ["Python", "Java", "PHP", "JavaScript", "React", "Django", "SQL"];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Faculty Lecturer at <strong>DAV College, TU</strong> | <strong>DAV International College, FWU</strong> | <strong>NIT, IGNOU</strong>.
            Specializing in TU BCA, FWU CSIT, and IGNOU BCS/BCA courses including Java, PHP, DBMS, and more.
          </p>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={profilePic} alt="Sandesh Tamang" className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-indigo-500" />
        </motion.div>
      </div>
    </section>
  );
}
