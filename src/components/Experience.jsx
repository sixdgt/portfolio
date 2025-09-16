import { motion } from "framer-motion";

const experiences = [
  {
    title: "Faculty Lecturer – Full Time (June 2021 – Present)",
    company: "DAV COLLEGE, TU | DAV INTERNATIONAL COLLEGE, FWU | NIT, IGNOU",
    desc: "Teaching OOP in Java, Advanced Java, PHP, DBMS, and Web Technologies."
  },
  {
    title: "Data Analyst (July 2021 – June 2024)",
    company: "MINDRISERS CONSORTIUM PVT. LTD.",
    desc: "Data collection, analysis, visualization with Matplotlib & Seaborn, dashboards with Google Data Studio."
  },
  {
    title: "Software Developer (March 2020 – June 2021)",
    company: "MINDRISERS CONSORTIUM PVT. LTD.",
    desc: "Architecting systems, automation testing, CI/CD, and project delivery."
  },
  {
    title: "Software Developer Intern (April 2019 – February 2020)",
    company: "TUMMY TRUCK PVT. LTD.",
    desc: "Learning new technologies, fixing bugs, and mini projects development."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12 ">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-6"
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border-l-4 border-blue-600 bg-white shadow rounded"
          >
            <h3 className="font-bold">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <p>{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
