import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background text-foreground pt-32 pb-48">
      <div className="container-max">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-16 font-bold tracking-wide uppercase text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <header className="max-w-4xl mb-24">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">{project.category}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            <span className="text-foreground/60 font-medium">{project.type === 'mobile' ? 'Mobile App' : 'Web Platform'}</span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-lg lg:text-xl text-foreground/60 leading-relaxed mb-12">
            {project.shortDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-foreground/10">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-foreground/40 mb-2 font-bold">Role</h4>
              <p className="font-medium text-lg">{project.role}</p>
            </div>
            <div className="col-span-2 md:col-span-3">
              <h4 className="text-xs uppercase tracking-widest text-foreground/40 mb-2 font-bold">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-bold text-foreground tracking-widest">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-20">
          <div className="space-y-24">
            
            {/* The Challenge */}
            {project.challenge && (
              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <div className="text-base text-foreground/60 leading-relaxed space-y-4">
                  <p>{project.challenge}</p>
                </div>
              </section>
            )}

            {/* The Solution */}
            {project.solution && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Architecture & Solution</h2>
                <div className="p-8 rounded-2xl bg-foreground/[0.02] border border-foreground/5 mb-8">
                  <div className="text-base text-foreground/80 leading-relaxed">
                    <p>{project.solution}</p>
                  </div>
                </div>
              </section>
            )}

          </div>

          <aside>
            <div className="sticky top-32 p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Business Impact
              </h3>
              <ul className="space-y-4">
                {project.impact?.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-primary font-bold opacity-50">0{index + 1}</span>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
