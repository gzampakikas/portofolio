
export default function Content() {
  return (
    <main className="grow bg-gray-50">

      {/* Home + About */}
      <section id="home" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="mb-6 text-4xl font-bold text-emerald-600">
            About Me
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I’m a junior web developer with a background in professional web development training.
            I enjoy building clean, responsive interfaces and improving my skills through practice.
          </p>

          <p className="my-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I have completed professional training in web development, working with both frontend
            and backend technologies. My main interest is frontend development, with basic experience
            in backend concepts and databases.
          </p>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I enjoy learning by building real projects and continuously improving my skills.
            I focus on clean UI, responsiveness, and writing maintainable code.
          </p>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="mb-12 text-3xl font-semibold text-emerald-600">
                Projects
            </h2>

            <div className="mb-12 border rounded-lg shadow hover:shadow-lg p-6 text-left transition">
                <h3 className="text-2xl font-semibold text-emerald-600 mb-2">Mikrogeumata Nik</h3>
                
                <img
                    src={`${import.meta.env.BASE_URL}nik.png`}
                    alt="Mikrogeumata Nik Screenshot"
                    className="mb-4 rounded shadow"
                />

                <p className="text-gray-700 mb-2">
                  A static business website built for a local food business, focusing on clean layout and responsive design.
                </p>

                <p className="text-gray-500 mb-4">Tech: React, CSS</p>
                
                <div className="flex gap-4">
                    <a href="https://github.com/webspider02/mikrogeumata_nik/tree/dev" target="_blank" className="text-emerald-600 hover:underline">
                    GitHub
                    </a>
                </div>
            </div>

            <div className="border rounded-lg shadow hover:shadow-lg p-6 text-left transition">
                <h3 className="text-2xl font-semibold text-emerald-600 mb-2">Piano 61 Keys App</h3>
                
                <img
                    src={`${import.meta.env.BASE_URL}piano.png`}
                    alt="Piano 61 Keys Screenshot"
                    className="mb-4 rounded shadow"
                />

                <p className="text-gray-700 mb-2">
                  An interactive 61-key virtual piano built with Next.js, focusing on user interaction and dynamic UI behavior.                </p>
                <p className="text-gray-500 mb-4">Tech: Next.js, Tailwind CSS</p>
                
                <div className="flex gap-4">
                    <a href="https://github.com/webspider02/piano-61-keys" target="_blank" className="text-emerald-600 hover:underline">
                    GitHub
                    </a>
                </div>
            </div>


        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="mb-12 text-3xl font-semibold text-emerald-600">
            Skills
          </h2>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>HTML5, CSS3, SCSS</li>
            <li>JavaScript, TypeScript</li>
            <li>Angular, React, Next.js</li>
            <li>PHP, Laravel, WordPress</li>
            <li>SQL / MySQL</li>
            <li>Tailwind CSS, Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>


        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="mb-12 text-3xl font-semibold text-emerald-600">
            Contact
          </h2>

        <div className="space-y-4 text-lg">
            <p>
                <span className="text-gray-500">Email:</span>{" "}
                <a
                    href="mailto:giorgoszampakikas@gmail.com"
                    className="text-emerald-600 hover:underline"
                >
                    giorgoszampakikas@gmail.com
                </a>
            </p>

            <p>
                <span className="text-gray-500">GitHub:</span>{" "}
                <a
                    href="https://github.com/webspider02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                >
                    github.com/webspider02
                </a>
            </p>

            <p>
                <span className="text-gray-500">LinkedIn:</span>{" "}
                <a
                    href="https://www.linkedin.com/in/george-zampakikas-aa208b321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                >
                    linkedin.com/in/george-zampakikas-aa208b321
                </a>
            </p>
        </div>

        </div>
      </section>

    </main>
  );
}
