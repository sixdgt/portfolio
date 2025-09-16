import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaJava  } from 'react-icons/fa';
import { SiReact, SiDjango, SiMysql } from 'react-icons/si';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // List of projects — you can add all your real ones here
  const projects = [
    {
      name: 'Advanced Java – TU BCA 6th Semester',
      desc: 'Topics & Lab Works on Advanced Java Programming',
      techIcons: [<FaJava className="text-red-600" />, <SiMysql className="text-blue-600" />],
      github: 'https://github.com/sixdgt/AJP-2025-Topics-TU-BCA',
      live: null,
    },
    {
      name: 'JDBC with MVC + Singleton',
      desc: 'Project Employee Management System using JDBC, MVC, and Singleton',
      techIcons: [<FaJava className="text-red-600" />, <SiMysql className="text-blue-600" />],
      github: 'https://github.com/sixdgt/AJP-2025-Topics-TU-BCA/tree/master/ProjectEmployeeManagementSystem',
      live: null,
    },
    {
      name: 'RMI Simple Calculator',
      desc: 'A Simple Calculator app using Java RMI',
      techIcons: [<FaJava className="text-red-600" />],
      github: 'https://github.com/sixdgt/AJP-2025-Topics-TU-BCA/tree/master/RMI%20Calculator%20App',
      live: null,
    },
    {
      name: 'Student Register Book (J2EE & JDBC with MVC)',
      desc: 'Case study on Student Course Registration system',
      techIcons: [<FaJava className="text-red-600" />, <SiMysql className="text-blue-600" />],
      github: 'https://github.com/sixdgt/AJP-2025-Topics-TU-BCA/tree/master/eclipse_project/case_study_one_student_course_registration',
      live: null,
    },
    {
      name: 'Scripting Language Lab Works',
      desc: 'PHP, HTML, JavaScript Projects and Lab Works',
      techIcons: [<SiDjango className="text-green-600" />, <SiReact className="text-cyan-500" />],
      github: 'https://github.com/sixdgt/SL_PHP_SESSION_2024',
      live: null,
    },
    {
      name: 'Web Scraping & Text Classification',
      desc: 'Built a search engine for publications & papers with Logistic Regression',
      techIcons: [<SiReact className="text-cyan-500" />, <SiDjango className="text-green-600" />],
      github: 'https://github.com/sixdgt/IR_STW7071CEM_Assignment',
      live: null,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gradient-to-b from-blue-50"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

              {/* Tech Icons */}
              <div className="flex space-x-2 mb-4">
                {project.techIcons.map((icon, idx) => (
                  <div key={idx} className="text-2xl">
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors"
                >
                  <FaGithub />
                  <span className="text-sm">Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
