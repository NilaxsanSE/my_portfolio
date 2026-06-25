"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Menu,
  MapPin,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = ["Projects", "Skills", "Process", "Education", "Contact"];

const projects = [
  {
    name: "Guardian Node",
    type: "Completed Final Year Project",
    description:
      "Completed smart IoT-based public safety monitoring system that detects dangerous sounds such as screams and gunshots in real time, then sends cloud-connected alerts with incident evidence.",
    stack: ["Python", "TensorFlow", "Raspberry Pi", "Firebase", "Java"],
    preview: "/project-guardian-node.png",
    previewAlt: "Guardian Node safety monitoring dashboard preview",
    highlights: [
      "Real-time audio classification for emergency sound patterns",
      "Event-triggered camera recording with incident evidence",
      "Cloud alert workflow using Firebase for faster response",
    ],
  },
  {
    name: "New Star Kid's Wear",
    type: "E-Commerce Management System",
    description:
      "Retail management platform planned for product, inventory, supplier, order, customer workflow, role-based access, and administrative dashboard operations.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    preview: "/project-new-star-kids-wear.png",
    previewAlt: "New Star Kid's Wear e-commerce management interface preview",
    highlights: [
      "Product, inventory, supplier, and order management planning",
      "Agile requirement analysis and risk identification",
      "Admin dashboard workflows for retail operations",
    ],
  },
  {
    name: "Driving License Management System",
    type: "MERN Web Application",
    description:
      "Full-stack system for license applications, renewals, user records, authentication, administrative dashboards, CRUD workflows, and responsive interaction.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "CSS"],
    preview: "/project-driving-license.png",
    previewAlt: "Driving License Management System admin panel preview",
    highlights: [
      "Authentication and role-aware administrative workflows",
      "CRUD operations for applications, renewals, and user records",
      "Responsive UI for smoother real-time interaction",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "PHP", "C", "SQL"],
  },
  {
    title: "Web & APIs",
    icon: Sparkles,
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "AJAX"],
  },
  {
    title: "Data & Tools",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQLite", "Firebase", "GitHub", "Raspberry Pi"],
  },
];

const education = [
  {
    year: "Completed",
    title: "BSc (Hons) in Computer Science",
    place: "SLIIT City Uni, affiliated with the University of Bedfordshire, UK",
  },
  {
    year: "2023 - 2025",
    title: "Diploma in Computer Science and Software Engineering",
    place: "SLIIT City Uni | GPA: 3.35 / 4.00",
  },
  {
    year: "2016 - 2019",
    title: "G.C.E. Advanced Level - Mathematics Stream",
    place: "T/ Orr's Hill Vivekananda College",
  },
];

const strengths = [
  "Full-stack development",
  "REST API integration",
  "Database-driven systems",
  "Android and Java desktop apps",
  "IoT systems",
  "Machine learning basics",
];

const process = [
  {
    step: "01",
    title: "Understand the workflow",
    body: "I start by mapping users, data, risks, and the real-world process the software needs to support.",
  },
  {
    step: "02",
    title: "Build clear interfaces",
    body: "I focus on responsive screens, straightforward actions, and database-backed features that are easy to maintain.",
  },
  {
    step: "03",
    title: "Test and improve",
    body: "I validate behavior through build checks, manual review, and practical iteration until the experience feels dependable.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <header className="sticky top-0 z-50 border-b border-[#F8FAFC]/10 bg-[#0F172A]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Home">
            <span className="grid size-10 place-items-center rounded bg-[#3B82F6] text-sm font-bold text-[#F8FAFC] shadow-[0_0_28px_rgba(59,130,246,0.36)]">
              SN
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-[#94A3B8] sm:block">
              Suvendralingam Nilaxsan
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#94A3B8] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#F8FAFC]">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/suvendralingam-nilaxsan-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded border border-[#06B6D4]/30 px-4 text-sm font-semibold text-[#F8FAFC] transition hover:bg-[#1E293B]"
            >
              <ArrowDownToLine size={16} aria-hidden />
              CV
            </a>
            <a
              href="mailto:s.nilaxsan63@gmail.com"
              className="inline-flex h-10 items-center gap-2 rounded bg-[#3B82F6] px-4 text-sm font-semibold text-[#F8FAFC] transition hover:bg-[#06B6D4]"
            >
              <Mail size={16} aria-hidden />
              Contact
            </a>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded border border-[#F8FAFC]/10 bg-[#1E293B] text-[#F8FAFC] md:hidden"
          >
            {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </nav>
        {isMenuOpen ? (
          <div className="border-t border-[#F8FAFC]/10 bg-[#0F172A] px-5 py-4 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded border border-[#F8FAFC]/10 bg-[#1E293B] px-4 py-3 text-sm font-semibold text-[#F8FAFC]"
                >
                  {item}
                </a>
              ))}
              <a
                href="/suvendralingam-nilaxsan-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-[#F8FAFC]"
              >
                Download CV
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:pb-20 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded border border-[#06B6D4]/35 bg-[#1E293B]/78 px-3 py-2 text-sm font-medium text-[#94A3B8]">
            <Sparkles size={16} className="text-[#06B6D4]" aria-hidden />
            Computer Science Graduate
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#F8FAFC] sm:text-6xl lg:text-6xl">
            Full-stack developer building practical software for web, mobile, and IoT.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#94A3B8]">
            Dedicated and detail-oriented Computer Science graduate with hands-on
            experience in full-stack web development, Java desktop applications,
            Android development, database integration, API usage, and real-time
            IoT-based systems.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#3B82F6] px-5 text-sm font-bold text-[#F8FAFC] transition hover:bg-[#06B6D4]"
            >
              View Projects
              <ArrowUpRight size={17} aria-hidden />
            </a>
            <a
              href="/suvendralingam-nilaxsan-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#06B6D4]/35 bg-[#1E293B] px-5 text-sm font-bold text-[#F8FAFC] transition hover:border-[#06B6D4] hover:bg-[#26364f]"
            >
              <ArrowDownToLine size={17} aria-hidden />
              Download CV
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 border-y border-[#F8FAFC]/10 py-5 sm:grid-cols-3">
            {[
              ["Location", "Trincomalee, Sri Lanka"],
              ["Focus", "Software Engineering"],
              ["Seeking", "Entry-level / Junior roles"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  {label}
                </p>
                <p className="mt-1 text-base font-semibold text-[#F8FAFC]">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative min-h-[560px] overflow-hidden rounded border border-[#06B6D4]/25 bg-[#1E293B]"
        >
          <Image
            src="/nilaxsan-profile.jpeg"
            alt="Portrait of Suvendralingam Nilaxsan"
            fill
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover object-[50%_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/92 via-[#0F172A]/14 to-[#0F172A]/12" />
          <div className="absolute right-5 top-5 hidden w-56 overflow-hidden rounded border border-[#F8FAFC]/10 bg-[#0F172A]/72 shadow-2xl shadow-[#0F172A]/35 backdrop-blur sm:block">
            <Image
              src="/project-guardian-node.png"
              alt="Guardian Node project interface preview"
              width={448}
              height={284}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="mb-5 grid gap-3 rounded border border-[#F8FAFC]/10 bg-[#0F172A]/70 p-4 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#06B6D4]">
                Developer portfolio
              </p>
              <p className="text-2xl font-semibold text-[#F8FAFC]">Suvendralingam Nilaxsan</p>
              <p className="text-sm leading-6 text-[#94A3B8]">
                Full-stack developer with completed IoT, web, database, and Java application projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Full-stack", "IoT systems", "MERN", "Firebase"].map((item) => (
                <span
                  key={item}
                  className="rounded bg-[#3B82F6]/18 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F8FAFC] ring-1 ring-[#3B82F6]/30 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-[#F8FAFC]/10 bg-[#0B1222] px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["3", "Portfolio projects"],
            ["6+", "Programming languages"],
            ["MERN", "Full-stack foundation"],
            ["IoT + ML", "Research project focus"],
          ].map(([value, label]) => (
            <div key={label} className="rounded border border-[#F8FAFC]/10 bg-[#1E293B]/72 p-5">
              <p className="text-3xl font-semibold text-[#F8FAFC]">{value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#94A3B8]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#1E293B] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
                Project interfaces
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight text-[#F8FAFC] md:text-5xl">
                Visual previews of real systems, useful workflows, and clean interfaces.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#94A3B8]">
              These preview images represent the product interfaces behind each
              portfolio project, giving visitors a faster sense of what each system does.
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
                className="flex min-h-full flex-col overflow-hidden rounded border border-[#F8FAFC]/10 bg-[#0F172A]/72 shadow-[0_20px_60px_rgba(15,23,42,0.25)]"
              >
                <div className="relative aspect-[1.55] border-b border-[#F8FAFC]/10 bg-[#1E293B]">
                  <Image
                    src={project.preview}
                    alt={project.previewAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold text-[#06B6D4]">{project.type}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#F8FAFC]">{project.name}</h3>
                  <p className="mt-4 text-base leading-7 text-[#94A3B8]">
                    {project.description}
                  </p>
                  <div className="mt-6 space-y-3 border-t border-[#F8FAFC]/10 pt-5">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3 text-sm leading-6 text-[#94A3B8]">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-[#06B6D4]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-[#3B82F6]/25 bg-[#3B82F6]/10 px-3 py-1.5 text-xs font-semibold text-[#F8FAFC]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
              Technical skills
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#F8FAFC] md:text-5xl">
              A practical stack for full-stack, database, and connected systems.
            </h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded border border-[#06B6D4]/25 bg-[#1E293B] px-3 py-2 text-sm font-medium text-[#94A3B8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="rounded border border-[#F8FAFC]/10 bg-[#1E293B] p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded bg-[#3B82F6]/14 text-[#06B6D4]">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-[#F8FAFC]">{group.title}</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between border-b border-[#F8FAFC]/10 pb-3 text-sm font-medium text-[#94A3B8] last:border-b-0 last:pb-0"
                      >
                        <span>{skill}</span>
                        <span className="size-2 rounded-full bg-[#06B6D4]" />
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#0B1222] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
              Process
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#F8FAFC] md:text-5xl">
              How I approach software work from idea to delivery.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <article key={item.title} className="rounded border border-[#F8FAFC]/10 bg-[#1E293B] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#06B6D4]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-[#F8FAFC]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#94A3B8]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-[#1E293B] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap size={24} className="text-[#06B6D4]" aria-hidden />
            <h2 className="text-4xl font-semibold text-[#F8FAFC] md:text-5xl">Education</h2>
          </div>
          <div className="grid gap-4">
            {education.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 border-t border-[#F8FAFC]/10 py-6 md:grid-cols-[180px_1fr]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#06B6D4]">
                  {item.year}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold text-[#F8FAFC]">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-[#94A3B8]">{item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded border border-[#06B6D4]/25 bg-[#1E293B] p-6 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
              <MapPin size={16} aria-hidden />
              Trincomalee / Sri Lanka
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#F8FAFC] md:text-5xl">
              Open to entry-level, junior, and collaborative software opportunities.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 sm:flex-row md:flex-col">
            <a
              href="mailto:s.nilaxsan63@gmail.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#3B82F6] px-5 text-sm font-bold text-[#F8FAFC] transition hover:bg-[#06B6D4]"
            >
              <Mail size={17} aria-hidden />
              Email
            </a>
            <a
              href="tel:+94740707728"
              className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#06B6D4]/30 px-5 text-sm font-bold text-[#F8FAFC] transition hover:bg-[#0F172A]"
            >
              <Phone size={17} aria-hidden />
              Call
            </a>
            <a
              href="https://linkedin.com/in/s-nilaxsan-96b762341"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#06B6D4]/30 px-5 text-sm font-bold text-[#F8FAFC] transition hover:bg-[#0F172A]"
            >
              <Send size={17} aria-hidden />
              LinkedIn
            </a>
            <a
              href="https://github.com/NilaxsanSE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#06B6D4]/30 px-5 text-sm font-bold text-[#F8FAFC] transition hover:bg-[#0F172A]"
            >
              <Code2 size={17} aria-hidden />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
