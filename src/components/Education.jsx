import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const educationList = [
    {
      degree: "M.Sc. (Hons) Data Science and Computational Intelligence",
      institute: "Coventry University",
      year: "2022–2024",
    },
    {
      degree: "B.Sc. (Hons) Business Computing & Information System",
      institute: "University of UClan",
      year: "2015–2018",
    },
    {
      degree: "+2 Science",
      institute: "Bishnu Memorial HSS",
      year: "2012–2014",
    },
    {
      degree: "SLC",
      institute: "Navodaya Vidhya Mandir HSS",
      year: "2011",
    },
  ];

  return (
    <section id="education" ref={ref} className="max-w-6xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Education
      </motion.h2>

      <div className="relative border-l-2 border-indigo-500 ml-4">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-10 ml-6 relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow"></span>

            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institute}</p>
            <span className="text-sm text-gray-400">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
