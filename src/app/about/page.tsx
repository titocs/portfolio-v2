import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-void-black text-white relative pt-32 pb-24 outline-none">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Profile Section */}
        <section className="mb-20 flex flex-col md:flex-row items-center gap-12">
          
          {/* Dummy Image Holder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 group">
            {/* Background Border Box */}
            <div className="absolute inset-0 border-2 border-bio-green/50 rounded-2xl transition-transform duration-500 translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5" />
            
            {/* The actual image container */}
            <div className="absolute w-full h-full rounded-2xl overflow-hidden z-10 border-2 border-bio-green/20 bg-black shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
              <Image 
                src="/images/profile-foto.webp" 
                alt="Profile Picture"
                fill
                className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 192px, 256px"
              />
              <div className="absolute inset-0 bg-bio-green/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>

          {/* Description Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black font-sans tracking-tight">
              INITIALIZING <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-bio-green to-blue-500">
                USER_PROFILE
              </span>
            </h1>
            
            <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed max-w-2xl">
              <p>
                &gt; Hello, world! I am a passionate developer bridging the gap between design and robust engineering. I specialize in building digital realities that are accessible, pixel-perfect, and highly performant.
              </p>
              <p>
                &gt; Currently focusing on full-stack architecture with modern web technologies. I enjoy solving complex problems, optimizing systems, and writing clean, scalable code. When I am not debugging, I explore the intersections of machine learning, art, and immersive front-end experiences.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-bio-green">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bio-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bio-green"></span>
              </span>
              SYSTEM_ONLINE
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <div id="experience" className="mb-20">
          <Experience />
        </div>
        
        {/* Skills Section */}
        <div id="skills">
          <TechStack />
        </div>

      </div>
      
      {/* Background glow effects */}
      <div className="fixed top-1/4 -right-64 w-96 h-96 bg-bio-green/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-0 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    </main>
  );
}
