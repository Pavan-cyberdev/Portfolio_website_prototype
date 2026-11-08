import React from 'react';
import { portfolioContent, type MiniProject, type Certification } from '../content';
import { Cpu, Award, ExternalLink, GitBranch, PlusCircle, Sparkles } from 'lucide-react';

export const ProjectsAndCertifications: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* GROUP 1: IoT & Embedded Mini Projects */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-teal-400">
              Hardware &amp; Microcontroller Tinkering
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              IoT Mini Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Hands-on embedded experimentation with ESP32 and Arduino microcontrollers. Ready for ongoing project entries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioContent.miniProjects.map((project: MiniProject, idx: number) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-[#121821] border border-white/10 hover:border-teal-500/30 transition-all duration-200 flex flex-col justify-between space-y-5 group relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <Cpu className="w-4 h-4 text-teal-400" />
                      <span>Mini Project 0{idx + 1}</span>
                    </div>
                    <span className="font-mono text-[11px] text-amber-300/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      Placeholder Card
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-teal-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400">
                    {project.tech.map((t, tIdx) => (
                      <React.Fragment key={t}>
                        <span className="text-slate-300">{t}</span>
                        {tIdx < project.tech.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Link action */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">{project.statusText}</span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-300 hover:underline flex items-center gap-1"
                      >
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" title="Edit in src/content.ts">
                        <PlusCircle className="w-3.5 h-3.5 text-slate-500" />
                        <span>Add link in content.ts</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GROUP 2: Certifications */}
        <div id="certifications" className="space-y-6 pt-8 border-t border-white/5">
          <div className="space-y-2">
            <div className="text-xs font-mono text-violet-300">
              Credentials &amp; Coursework
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Certifications
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Foundational certifications in networking, systems, and IoT security to be updated as coursework finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioContent.certifications.map((cert: Certification, idx: number) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-[#121821] border border-white/10 hover:border-violet-500/30 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <Award className="w-4 h-4 text-violet-400" />
                      <span>Certificate 0{idx + 1}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-slate-400 font-mono">
                    Issuer: <span className="text-slate-300">{cert.issuer}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Status: Verified</span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 hover:underline flex items-center gap-1"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-1">
                      <span>[Add credential link in content.ts]</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
