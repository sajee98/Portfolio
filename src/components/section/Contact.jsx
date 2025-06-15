import { RevealOnScroll } from "../RevealOnScroll"

 export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center -py-20">
        <RevealOnScroll>
            <div className="px- w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Contact Me
                </h2>
                <form className="space-y-6">
                 <div className="relative">
                    <input type="text" id="name" placeholder="Name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                 </div>
                 <div className="relative">
                    <input type="text" id="email" placeholder="Email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                 </div>
                 <div className="relative">
                    <textarea type="text" rows={5} id="message" placeholder="Message" name="message" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                 </div>
                 <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
                </form>
            </div>
      

        </RevealOnScroll>
    </section>
 }