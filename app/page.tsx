export default function Home() {
  const skills = {
    Languages: ["Python", "C", "SQL", "HTML", "CSS", "JavaScript"],
    Frameworks: ["Django", "Flask", "Next.js", "Tailwind CSS"],
    Databases: ["MySQL", "SQLite"],
    "Testing & QA": [
      "Manual Testing",
      "Regression Testing",
      "Test Case Design",
      "Bug Tracking (Jira)",
      "STLC / SDLC",
    ],
    Tools: ["Git", "GitHub", "Jira", "Pandas", "OpenCV", "GCP"],
    "Learning Now": ["Selenium", "Postman", "REST APIs"],
  };

  const experiences = [
    {
      role: "International Research Intern",
      company: "MASCOR, FH Aachen University of Applied Sciences",
      location: "Aachen, Germany",
      period: "Sep 2025",
      points: [
        "Selected for an international knowledge exchange program focused on Python, robotics, neural networks, and reinforcement learning.",
        "Worked on simulation-based learning and software-oriented experimentation.",
        "Collaborated with an international team, strengthening technical communication and problem-solving skills.",
      ],
    },
    {
      role: "Website Tester (QA)",
      company: "Dr. C.V. Raman University",
      location: "Vaishali, Bihar",
      period: "May 2025",
      points: [
        "Executed 100+ manual test cases covering functional, usability, and UI validation on a live university portal.",
        "Identified and documented 60+ bugs with detailed reproduction steps using Jira.",
        "Performed cross-browser and responsiveness checks across multiple devices.",
      ],
    },
  ];

  const projects = [
    {
      title: "Smart Attendance System",
      description:
        "A facial-recognition-based attendance management system that automates tracking and report generation. Integrated Twilio API for absentee SMS notifications. Presented MVP for startup incubation at CIMP Patna.",
      tech: ["Python", "OpenCV", "MySQL", "Pandas", "Twilio"],
      github: "https://github.com/sunnykumar2222/Smart-Attendance-System",
    },
    {
      title: "Online Assessment Portal",
      description:
        "A web-based examination portal with exam management, submission handling, and automated result generation. Built using Django's MVT architecture with comprehensive test coverage for edge cases like concurrent submissions and session timeouts.",
      tech: ["Django", "Python", "MySQL", "MVT"],
      github:
        "https://github.com/sunnykumar2222/online-assessment-portal-cvru",
    },
  ];

  const certifications = [
    {
      name: "Python Programming and Its Applications",
      issuer: "Ardent Computech Pvt. Ltd.",
      note: "Outstanding Grade",
    },
    {
      name: "Cybersol Winter Program",
      issuer: "FH Aachen University of Applied Sciences, Germany",
    },
    {
      name: "Google Cloud Computing Foundations",
      issuer: "NPTEL, IIT Kharagpur",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            Sunny Kumar
          </a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold border-4 border-white/10">
            SK
            {/* Baad me yahan <Image> tag aayega teri photo ke saath */}
          </div>

          <p className="text-blue-400 mb-4 text-sm tracking-widest uppercase">
            Software Developer · QA Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I build software that{" "}
            <span className="text-blue-400">actually runs</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Full-stack developer and QA engineer from Ahmedabad, India.
            B.Tech CSE graduate with international research experience at{" "}
            <span className="text-white">FH Aachen, Germany</span>.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-sm text-gray-500 mt-1">Test Cases</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">60+</div>
              <div className="text-sm text-gray-500 mt-1">Bugs Documented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">8.33</div>
              <div className="text-sm text-gray-500 mt-1">CGPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm Sunny Kumar — a Computer Science Engineering graduate (B.Tech,
              CGPA 8.33) with hands-on experience in both{" "}
              <span className="text-white">software development</span> and{" "}
              <span className="text-white">quality assurance</span>. I've built
              real-world applications using Python, Django, MySQL, and OpenCV,
              and I've tested live production systems with 100+ manual test
              cases.
            </p>
            <p>
              My edge is that I understand both sides — I can build the feature
              and break it. That means the software I ship is reliable by
              default. I completed an international research internship at{" "}
              <span className="text-white">FH Aachen University, Germany</span>
              , where I worked on Python, robotics, and reinforcement learning
              concepts with a global team.
            </p>
            <p>
              I'm currently seeking an entry-level{" "}
              <span className="text-white">Software Developer</span> or{" "}
              <span className="text-white">QA Engineer</span> role where I can
              build things that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition"
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-blue-400/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400/50 transition group"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border-b border-white/10">
                  <span className="text-gray-500 text-sm">
                    {/* Baad me yahan project ka screenshot aayega */}
                    Project Preview
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 transition"
              >
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
                {cert.note && (
                  <span className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-400/20 whitespace-nowrap">
                    {cert.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            I'm actively looking for Software Developer or QA Engineer roles.
            If you have an opportunity or just want to say hi — my inbox is
            always open.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="mailto:aisunnykumar1@gmail.com"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
            >
              ✉ Email Me
            </a>
            <a
              href="https://linkedin.com/in/sunnykumaraai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sunnykumar2222"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition"
            >
              GitHub
            </a>
          </div>

          <div className="text-sm text-gray-500 space-y-1">
            <p>📍 Ahmedabad, Gujarat, India</p>
            <p>📞 +91-8294692605</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Sunny Kumar. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}