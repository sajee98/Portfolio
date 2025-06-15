import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center -py-20">
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-center">
          {" "}
           Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Theatre Seat Booking </h3>
                <p className="text-gray-400 mb-4">Description of project 1. This project showcases my skills in web development and design.</p>
                <div>
                    {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-color my-4"> {" "} View Projects {""} </a>
                </div>
        
            </div>
             <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Theatre Seat Booking </h3>
                <p className="text-gray-400 mb-4">Description of project 1. This project showcases my skills in web development and design.</p>
                <div>
                    {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-color my-4"> {" "} View Projects {""} </a>
                </div>
        
            </div>
             <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Theatre Seat Booking </h3>
                <p className="text-gray-400 mb-4">Description of project 1. This project showcases my skills in web development and design.</p>
                <div>
                    {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-color my-4"> {" "} View Projects {""} </a>
                </div>
        
            </div>
             <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Theatre Seat Booking </h3>
                <p className="text-gray-400 mb-4">Description of project 1. This project showcases my skills in web development and design.</p>
                <div>
                    {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-color my-4"> {" "} View Projects {""} </a>
                </div>
        
            </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>
}
