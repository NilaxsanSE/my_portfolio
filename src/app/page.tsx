"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = ["Work", "Skills", "Experience", "Contact"];

const projects = [
  {
    name: "Cloud Inventory Console",
    type: "Full-stack SaaS",
    description:
      "A clean operational dashboard for stock control, branch movement, role-based access, and reporting workflows.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    name: "Smart Booking Platform",
    type: "Product interface",
    description:
      "Responsive booking flows with searchable services, availability states, admin controls, and customer notifications.",
    stack: ["React", "Node.js", "REST API", "Vercel"],
  },
  {
    name: "Developer Portfolio System",
    type: "Personal brand",
    description:
      "A high-performance portfolio foundation designed for fast iteration, clear storytelling, and simple deployment.",
    stack: ["Next.js", "Framer Motion", "SEO", "CI/CD"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "API Design", "Databases", "Authentication", "Cloud"],
  },
  {
    title: "Delivery",
    skills: ["Vercel", "GitHub", "Performance", "Responsive UI", "SEO"],
  },
];

const timeline = [
  {
    year: "Now",
    title: "Software Engineering Portfolio",
    body: "Building a public portfolio that presents projects, technical strengths, and professional direction with confidence.",
  },
  {
    year: "2026",
    title: "Modern Web Stack",
    body: "Focused on shipping fast, accessible interfaces with Next.js, TypeScript, Tailwind CSS, and clean deployment workflows.",
  },
  {
    year: "Next",
    title: "Open for Opportunities",
    body: "Available for internships, junior engineering roles, freelance builds, and collaborative product work.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#191919]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ec]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Home">
            <span className="grid size-10 place-items-center rounded bg-[#191919] text-sm font-bold text-[#f7f3ec]">
              NS
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-black/70 sm:block">
              NilaxsanSE
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-black/70 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black">
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex h-10 items-center gap-2 rounded bg-[#191919] px-4 text-sm font-semibold text-white transition hover:bg-[#2f6f68]"
          >
            <Mail size={16} aria-hidden />
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pb-20 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded border border-black/10 bg-white/55 px-3 py-2 text-sm font-medium text-black/70">
            <Sparkles size={16} className="text-[#b7472a]" aria-hidden />
            Software Engineer crafting useful digital products
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#191919] sm:text-6xl lg:text-7xl">
            I build polished web experiences with practical engineering.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68">
            I am Nilaxsan, a software engineering profile focused on modern
            frontend systems, full-stack product thinking, and clean deployment
            workflows for the web.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#2f6f68] px-5 text-sm font-bold text-white transition hover:bg-[#245750]"
            >
              View Work
              <ArrowUpRight size={17} aria-hidden />
            </a>
            <a
              href="https://github.com/NilaxsanSE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded border border-black/15 bg-white/45 px-5 text-sm font-bold text-[#191919] transition hover:bg-white"
            >
              <Code2 size={17} aria-hidden />
              GitHub
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-y border-black/10 py-5">
            {[
              ["Stack", "Next.js"],
              ["Focus", "UI + APIs"],
              ["Deploy", "Vercel"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                  {label}
                </p>
                <p className="mt-1 text-base font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative min-h-[520px] overflow-hidden rounded border border-black/10 bg-[#101010]"
        >
          <Image
            src="/hero-workspace.png"
            alt="Abstract software engineering workspace"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <div className="flex flex-wrap gap-2">
              {["Design systems", "Web apps", "Fast deploys"].map((item) => (
                <span
                  key={item}
                  className="rounded bg-white/14 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="work" className="bg-[#191919] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0b85b]">
                Selected work
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Project stories built around clarity, speed, and usability.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/62">
              These are starter portfolio entries. We can replace them with your
              real projects, live links, screenshots, and GitHub repositories as
              the next step.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded border border-white/12 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-semibold text-[#f0b85b]">{project.type}</p>
                <h3 className="mt-4 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-4 min-h-28 text-base leading-7 text-white/66">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b7472a]">
              Skills
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Practical tools for turning ideas into shipped products.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded border border-black/10 bg-white/55 p-5">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between border-b border-black/10 pb-3 text-sm font-medium text-black/70 last:border-b-0 last:pb-0"
                    >
                      <span>{skill}</span>
                      <span className="size-2 rounded-full bg-[#2f6f68]" />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <BriefcaseBusiness size={22} className="text-[#2f6f68]" aria-hidden />
            <h2 className="text-4xl font-semibold md:text-5xl">Experience path</h2>
          </div>
          <div className="grid gap-4">
            {timeline.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 border-t border-black/10 py-6 md:grid-cols-[160px_1fr]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7472a]">
                  {item.year}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-black/62">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded bg-[#2f6f68] p-6 text-white md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              <MapPin size={16} aria-hidden />
              Sri Lanka / Remote
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Let&apos;s build a portfolio that opens real doors.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 sm:flex-row md:flex-col">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-white px-5 text-sm font-bold text-[#191919]"
            >
              <Mail size={17} aria-hidden />
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/25 px-5 text-sm font-bold text-white"
            >
              <Send size={17} aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
