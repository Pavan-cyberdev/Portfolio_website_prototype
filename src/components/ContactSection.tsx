import React, { useState } from 'react';
import { portfolioContent } from '../content';
import { Mail, Send, CheckCircle2, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioContent.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formspreeEndpoint = portfolioContent.personal.formspreeEndpoint;
    const isPlaceholderEndpoint = formspreeEndpoint.includes('YOUR_FORM_ID_HERE');

    if (isPlaceholderEndpoint) {
      setTimeout(() => {
        const mailtoUrl = `mailto:${portfolioContent.personal.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry from ' + formData.name
        )}&body=${encodeURIComponent(
          `Hi Pavankumar,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('success');
      }, 400);
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter 04 Header Lockup (amoghraonh style) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className="text-accent font-semibold">04 / WHAT'S NEXT</span>
            <span>GOOD WORK STARTS WITH A CONVERSATION.</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Something <span className="italic text-accent font-normal">on your mind?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal">
              An AI security experiment. An IoT sensor project. A hackathon collaboration. Or an internship opportunity.
            </p>
          </div>
        </div>

        {/* 2-Column Contact Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-[#0b0f16] border border-white/[0.12] p-6 sm:p-8 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                DIRECT CHANNELS
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={portfolioContent.personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-slate-200">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent" />
                </a>

                <a
                  href={portfolioContent.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-slate-200">GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent" />
                </a>
              </div>

              {/* Direct email box */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  EMAIL ADDRESS
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-200 select-all truncate">
                    {portfolioContent.personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-slate-400 hover:text-accent transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-500 space-y-1">
              <div>LOCATION: Bengaluru, Karnataka, India</div>
              <div>ACADEMICS: B.Tech IoT &amp; Cybersecurity (1st Year)</div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#0b0f16] border border-white/[0.12] p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship inquiry / Sentry X collaboration"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Pavankumar, I came across your portfolio and..."
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-accent-soft border border-accent text-accent text-xs flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message sent! Thank you for reaching out.</span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Direct dispatch with mailto fallback
                </span>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-mono tracking-wider uppercase font-semibold text-[#07090e] bg-accent hover:opacity-90 rounded-md transition-all shadow-sm shadow-accent active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message ↗'}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
