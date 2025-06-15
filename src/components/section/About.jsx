import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
    const fronendSkills = [
        "React",
        "Tailwind CSS",
        "Next.js",
        "JavaScript",
        "TypeScript",
    ];

    const backendSkills = [
        "Node.js",
        "Laravel",
        "MysQL",
        "PostgreSQL",
        "GraphQL",
    ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover::-translate-y-1 tansition-all">
          <p className="text-gray-300 mb-6 ">
            Hello! I'm Sajee MaX, a passionate developer with a love for
            creating innovative solutions. With a background in web development,
            I specialize in building responsive and user-friendly applications.
            My journey in tech has been driven by curiosity and a desire to
            solve real-world problems through code. When I'm not coding, you can
            find me exploring new technologies or contributing to open-source
            projects. Let's connect and create something amazing together!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                    {fronendSkills.map((skill, index) => (
                        <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                        {skill}
                        </span>
                    ))}

                </div>
            </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                        <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                        {skill}
                        </span>
                    ))}

                </div>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🎓Education</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li className="mb-2">
                            <strong>BEng in Hons software Engineering</strong> - Esoft Metro Campus (2024-2025)
                        </li>
                        <li className="mb-2">
                            <strong>Hnd in Information Technology</strong> - ATI Vavuniya (2018-2022)
                        </li>
            </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼Work experience</h3>
            <div className="space-y-4 text-gray-300">
                <div>
                    <h4 className="font-semibold"> {" "}Web developer at SEO Network (2020 Septemper - 2021 March) {" "}</h4>
                    <p>
                        Developed and maintained responsive websites using HTML, CSS, and JavaScript. Collaborated with designers to implement user-friendly interfaces.
                    </p>
                </div>
                 <div>
                    <h4 className="font-semibold"> {" "}Video Editor at Standard Vide (2022 May - 2025) {" "}</h4>
                    <p>
                        Edited and produced high-quality video content for various platforms. Worked closely with clients to understand their vision and deliver compelling visual stories.
                        </p>
                    
                </div>

            </div>
                    </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
