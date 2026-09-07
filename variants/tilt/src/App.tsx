import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { profile } from "@/data/profile";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Hero />
      <main>
        <Work />
        <About />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <footer className="px-4 py-10 border-t border-line">
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-ink-faint">
          <span>{profile.name} · {profile.role}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
