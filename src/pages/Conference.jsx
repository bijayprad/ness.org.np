import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * ICETASD 2026 — Conference Landing Page
 * Redesigned for a professional international-conference presentation.
 *
 * Keeps the existing conference links/content while improving:
 * - visual hierarchy
 * - navigation
 * - hero/CTA section
 * - conference themes
 * - dates timeline
 * - registration fees
 * - organizers/partners
 * - mobile experience
 */

const REGISTER_URL = "https://forms.gle/XcrYkVobgeZcEZie7";
const ABSTRACT_URL = "https://forms.gle/k3pXo8gaBSYbj4Dy8";
const ABSTRACT_BOOK_URL =
  "https://docs.google.com/gview?embedded=1&url=https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/AbstractBook.pdf";
const BROCHURE_URL =
  "https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/broness1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionMotion = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.12 },
  variants: fadeUp,
  transition: { duration: 0.55 },
};

const themes = [
  {
    icon: "01",
    title: "Statistics & Data Science",
    text: "Modern statistics, data science, artificial intelligence and machine learning.",
  },
  {
    icon: "02",
    title: "Statistical Theory",
    text: "Statistical theory, methodology and emerging statistical methods.",
  },
  {
    icon: "03",
    title: "Bayesian Statistics",
    text: "Bayesian statistics, statistical learning and uncertainty quantification.",
  },
  {
    icon: "04",
    title: "Biostatistics",
    text: "Biostatistics, public health and medical statistics.",
  },
  {
    icon: "05",
    title: "Population & Social Statistics",
    text: "Demography, population studies and social statistics.",
  },
  {
    icon: "06",
    title: "Environment & Climate",
    text: "Environmental statistics, climate change, agriculture and sustainability.",
  },
  {
    icon: "07",
    title: "Economic & Financial Analytics",
    text: "Economic, financial, business and risk analytics.",
  },
  {
    icon: "08",
    title: "Policy & Interdisciplinary Research",
    text: "Statistics for governance, policy and interdisciplinary applications.",
  },
];

const objectives = [
  "Explore advancements in Statistics and Data Science",
  "Facilitate knowledge sharing and interdisciplinary collaboration",
  "Address contemporary challenges",
  "Promote professional networking and capacity building",
  "Encourage evidence-based policy and decision-making",
];

const dates = [
  {
    date: "20 AUG 2026",
    title: "Abstract Submission",
    text: "Last date for abstract submission",
    status: "Closed",
  },
  {
    date: "31 AUG 2026",
    title: "Acceptance Notification",
    text: "Extended acceptance notification deadline",
    status: "Completed",
  },
  {
    date: "20–21 SEP 2026",
    title: "Conference Days",
    text: "ICETASD 2026",
    status: "Upcoming",
    active: true,
  },
];

const fees = [
  ["Nepali Students", "NRS 2,000", "NRS 2,500", "NRS 3,000"],
  ["Nepali Faculty / Researchers", "NRS 3,000", "NRS 3,500", "NRS 4,000"],
  ["Nepali Institutional", "NRS 10,000", "NRS 12,000", "NRS 15,000"],
  ["South Asia Participants", "US$ 80", "US$ 100", "US$ 125"],
  ["Foreign Participants", "US$ 200", "US$ 225", "US$ 250"],
];

const partners = [
  {
    name: "Central Department of Statistics, TU",
    url: "https://tucds.edu.np/",
    image: "https://i.imgur.com/PMcHY2r.jpeg",
  },
  {
    name: "School of Mathematical Sciences, TU",
    url: "https://sms.tu.edu.np/",
    image: "https://i.imgur.com/QmCUxiz.jpeg",
  },
  {
    name: "Mithila Institute of Technology, MIT",
    url: "https://mitjnk.edu.np/",
    image:
      "https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/Photo/900956c3-68ab-456e-b201-a690178a0fd8.jpg",
  },
  {
    name: "Orchid International College",
    url: "https://www.oic.edu.np/",
    image: "https://i.imgur.com/7A3pe9U.jpeg",
  },
];

function Countdown() {
  // Nepal conference start time: 20 September 2026, 07:00 NPT (UTC+05:45).
  const targetDate = new Date("2026-09-20T07:00:00+05:45").getTime();

  const getTimeLeft = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const items = [
    ["Days", timeLeft.days],
    ["Hours", timeLeft.hours],
    ["Minutes", timeLeft.minutes],
    ["Seconds", timeLeft.seconds],
  ];

  return (
    <section className="bg-blue-950 text-white py-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            The countdown is on
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto">
          {items.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center"
            >
              <div className="text-3xl md:text-5xl font-bold tabular-nums">
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Button({ href, children, variant = "primary", external = true }) {
  const classes = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
    secondary:
      "bg-white text-slate-900 hover:bg-slate-100 border border-slate-200",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-200 active:scale-[0.98] ${classes[variant]}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function Conference() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    ["About", "about"],
    ["Themes", "themes"],
    ["Dates", "dates"],
    ["Fees", "fees"],
    ["Partners", "partners"],
    ["Contact", "contact"],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 md:pb-0">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 md:h-20 flex items-center justify-between gap-5">
            <a href="#top" className="flex items-center gap-3 min-w-0">
              <img
                src="https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/conflogo.jpg"
                alt="Nepal Statistical Society"
                className="h-11 w-11 md:h-12 md:w-12 object-contain rounded-lg"
              />
              <div className="leading-tight">
                <div className="font-extrabold text-slate-900">ICETASD 2026</div>
                <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                  NeSS International Conference
                </div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition"
              >
                Register Now
              </a>
            </nav>

            <button
              type="button"
              className="lg:hidden rounded-lg border border-slate-200 p-2 text-slate-700"
              onClick={() => setMobileMenu((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenu}
            >
              <span className="text-xl">{mobileMenu ? "×" : "☰"}</span>
            </button>
          </div>

          {mobileMenu && (
            <nav className="lg:hidden border-t border-slate-100 py-3">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileMenu(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-blue-600 px-4 py-3 text-center font-bold text-white"
              >
                Register Now
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <main id="top">
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.imgur.com/YvAttk4.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-blue-950/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/55 to-cyan-950/50" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28"
          >
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                INTERNATIONAL CONFERENCE
              </div>

              <h1 className="mt-5 text-3xl md:text-6xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Emerging Trends and Applications in Statistics and Data Science
              </h1>

              <p className="mt-5 text-xl md:text-2xl font-semibold text-cyan-100">
                ICETASD 2026
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm md:text-base text-slate-200">
                <span>📅 20–21 September 2026</span>
                <span>📍 Kathmandu University, Nepal</span>
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-sm md:text-lg leading-7 text-slate-200">
                Bringing together statisticians, data scientists, researchers,
                academics and professionals to exchange ideas and explore
                data-driven solutions for the future.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
                <Button href={REGISTER_URL}>Register Now</Button>
                <Button href={ABSTRACT_URL} variant="secondary">
                  Submit Abstract
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white underline underline-offset-4"
                >
                  View Brochure
                </a>
                <span className="text-white/30">|</span>
                <a
                  href={ABSTRACT_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white underline underline-offset-4"
                >
                  View Abstract Book
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <Countdown />

        {/* QUICK INFORMATION */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                ["2", "Conference Days"],
                ["8", "Research Themes"],
                ["20–21", "September 2026"],
                ["NPT", "Nepal Time"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-blue-700">
                    {value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          {...sectionMotion}
          className="max-w-6xl mx-auto px-4 py-16 md:py-20"
        >
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                About the Conference
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
                A platform for ideas, research and collaboration
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-7">
                <p>
                  Nepal Statistical Society invites academicians, researchers,
                  statisticians, data scientists, professionals, and students
                  to participate in ICETASD 2026. The conference focuses on the
                  application of Statistics and Data Science in modern research
                  and development.
                </p>
                <p>
                  The Nepal Statistical Society is dedicated to fostering a
                  culture of statistical literacy and excellence through
                  seminars, workshops, conferences and opportunities for
                  knowledge sharing.
                </p>
                <p>
                  ICETASD 2026 will bring together statisticians, data
                  scientists, researchers and professionals to explore emerging
                  developments and share insights shaping the future of the
                  field.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-900 p-7 md:p-8 text-white">
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Conference at a glance
              </div>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Event
                  </div>
                  <div className="mt-1 font-bold">
                    ICETASD – 2026
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Date
                  </div>
                  <div className="mt-1 font-bold">
                    20–21 September 2026
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Organized by
                  </div>
                  <div className="mt-1 font-bold">
                    NeSS & Kathmandu University
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Focus
                  </div>
                  <div className="mt-1 font-bold">
                    Statistics, Data Science & Emerging Applications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHY ATTEND */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why Attend?
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
                Learn. Present. Connect. Collaborate.
              </h2>
              <p className="mt-4 text-slate-600">
                Engage with researchers and professionals working at the
                intersection of statistics, data science and real-world
                applications.
              </p>
            </motion.div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ["01", "Learn", "Discover emerging methods and applications."],
                ["02", "Present", "Share research with an academic audience."],
                ["03", "Network", "Connect with researchers and professionals."],
                ["04", "Collaborate", "Build interdisciplinary research partnerships."],
              ].map(([num, title, text]) => (
                <motion.div
                  key={title}
                  {...sectionMotion}
                  className="rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition"
                >
                  <div className="text-sm font-black text-blue-600">{num}</div>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section id="themes" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Conference Theme and Area
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">
                Emerging Trends and Applications in Statistics and Data Science
              </h2>
              <p className="mt-3 text-slate-600">
                The conference welcomes research and applications across the
                following broad area.
              </p>
            </motion.div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {themes.map((theme) => (
                <motion.article
                  key={theme.title}
                  {...sectionMotion}
                  className="group rounded-2xl bg-white border border-slate-200 p-6 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition">
                    {theme.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {theme.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {theme.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* OBJECTIVES + CALL FOR PAPERS */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
            <motion.div {...sectionMotion}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Call for Papers
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Share your research with the community
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                The conference offers a dynamic platform for exchanging ideas,
                presenting research, and engaging with experts who are driving
                forward data-driven solutions. Researchers, academics,
                professionals and students are encouraged to contribute.
              </p>
              <div className="mt-7">
                <Button href={ABSTRACT_URL}>Submit Your Abstract</Button>
              </div>
            </motion.div>

            <motion.div {...sectionMotion}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Conference Objectives
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">
                What ICETASD aims to achieve
              </h2>
              <ul className="mt-6 space-y-4">
                {objectives.map((objective) => (
                  <li key={objective} className="flex gap-3 items-start">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-black">
                      ✓
                    </span>
                    <span className="text-slate-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* IMPORTANT DATES */}
        <section id="dates" className="bg-blue-950 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Important Dates
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black">
                Mark your calendar
              </h2>
            </motion.div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {dates.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...sectionMotion}
                  className={`relative rounded-2xl border p-6 ${
                    item.active
                      ? "border-cyan-400/60 bg-cyan-400/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="text-sm font-black text-cyan-300">
                    {item.date}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                  <span
                    className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                      item.active
                        ? "bg-cyan-300 text-slate-950"
                        : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {item.status}
                  </span>
                  {index < dates.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 w-4 border-t border-white/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEES */}
        <section id="fees" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Registration
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
                  Conference Fees
                </h2>
              </div>
              <Button href={REGISTER_URL}>Register Now</Button>
            </motion.div>

            <motion.div
              {...sectionMotion}
              className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-4 font-bold">Category</th>
                      <th className="p-4 font-bold text-slate-300">
                        Early Bird
                        <span className="block text-xs font-normal text-red-300">
                          Closed
                        </span>
                      </th>
                      <th className="p-4 font-bold bg-blue-700">
                        Regular
                        <span className="block text-xs font-normal text-blue-100">
                          21 Aug – 19 Sep
                        </span>
                      </th>
                      <th className="p-4 font-bold">Onsite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map(([category, early, regular, onsite]) => (
                      <tr
                        key={category}
                        className="border-t border-slate-100 even:bg-slate-50"
                      >
                        <td className="p-4 font-semibold text-slate-800">
                          {category}
                        </td>
                        <td className="p-4 text-slate-400">
                          <span className="line-through">{early}</span>
                        </td>
                        <td className="p-4 font-bold text-blue-700 bg-blue-50/50">
                          {regular}
                        </td>
                        <td className="p-4 font-semibold">{onsite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 text-xs text-slate-500">
                Early-bird registration is closed. Regular registration is
                currently highlighted above.
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABSTRACT BOOK */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <motion.div
              {...sectionMotion}
              className="rounded-3xl bg-gradient-to-r from-blue-700 to-slate-900 p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-7"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                  Conference Resource
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-black">
                  Explore the ICETASD 2026 Abstract Book
                </h2>
                <p className="mt-2 text-sm md:text-base text-blue-100">
                  View accepted research abstracts and conference contributions.
                </p>
              </div>
              <a
                href={ABSTRACT_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-900 hover:bg-blue-50 transition"
              >
                View Abstract Book →
              </a>
            </motion.div>
          </div>
        </section>

        {/* ORGANIZERS */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Organized By
              </p>
            </motion.div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <motion.div
                {...sectionMotion}
                className="rounded-3xl bg-white border border-slate-200 p-7 flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src="https://i.imgur.com/gMBowQ2.jpeg"
                  alt="Kathmandu University"
                  className="h-24 w-24 object-contain"
                />
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Organizer
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Department of Mathematics
                  </h3>
                  <p className="mt-1 text-slate-600">
                    School of Science, Kathmandu University
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...sectionMotion}
                className="rounded-3xl bg-white border border-slate-200 p-7 flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src="https://i.imgur.com/ovp6wTc.jpeg"
                  alt="Nepal Statistical Society"
                  className="h-24 w-24 object-contain"
                />
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Organizer
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Nepal Statistical Society (NeSS)
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Promoting statistical literacy, research and collaboration
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Academic Partners
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
                Associate Organizations
              </h2>
            </motion.div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partners.map((partner) => (
                <motion.a
                  {...sectionMotion}
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center hover:border-blue-300 hover:shadow-xl transition"
                >
                  <div className="h-24 flex items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-20 max-w-[150px] object-contain"
                    />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-800 leading-6">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-blue-600 group-hover:underline">
                    Visit Website →
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* VENUE */}
        <section className="bg-slate-10">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div
              {...sectionMotion}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden grid md:grid-cols-2"
            >
              <div className="min-h-[280px] bg-slate-500 flex items-center justify-center p-8 text-center text-white">
                <div>
                  <div className="text-5xl">📍</div>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-cyan-300 font-bold">
                    Conference Venue
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Kathmandu University
                  </h2>
                  <p className="mt-2 text-slate-300">
                    Dhulikhel, Kavrepalanchok, Nepal
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Plan Your Visit
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">
                  Join us in Dhulikhel
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  The conference is organized in collaboration with Kathmandu
                  University. Participants can use the conference information
                  and contact details below to plan their visit.
                </p>
                <div className="mt-6">
                  <Button
                    href="https://www.google.com/maps/search/?api=1&query=Kathmandu+University+Dhulikhel+Nepal"
                    variant="outline"
                  >
                    View Location
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <motion.div {...sectionMotion} className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Further Inquiry
              </p>
              <p className="mt-4 text-slate-600">
                For conference-related questions, abstract submissions and
                registration assistance, please contact the conference team.
              </p>
            </motion.div>

            <div className="mt-10 grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              <a
                href="mailto:statnconf@gmail.com"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-blue-300 hover:bg-white hover:shadow-lg transition"
              >
                <div className="text-2xl">✉️</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Email
                </div>
                <div className="mt-1 font-bold text-blue-700 break-all">
                  statnconf@gmail.com
                </div>
              </a>

              <a
                href="https://wa.me/9779855030302"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-blue-300 hover:bg-white hover:shadow-lg transition"
              >
                <div className="text-2xl">💬</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Mobile
                </div>
                <div className="mt-1 font-bold text-blue-700">
                  +977 9841600555
                </div>
              </a>


              <a
                href="https://wa.me/9779855030302"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-blue-300 hover:bg-white hover:shadow-lg transition"
              >
                <div className="text-2xl">💬</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                  WhatsApp
                </div>
                <div className="mt-1 font-bold text-blue-700">
                  +977 9855030302
                </div>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={REGISTER_URL}>Register Now</Button>
              <Button href={ABSTRACT_URL} variant="outline">
                Submit Abstract
              </Button>
              <Button href={BROCHURE_URL} variant="outline">
                View Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/conflogo.jpg"
                  alt="NeSS"
                  className="h-12 w-12 object-contain rounded-lg bg-white p-1"
                />
                <div>
                  <div className="font-black">ICETASD 2026</div>
                  <div className="text-xs text-slate-400">
                    Nepal Statistical Society
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                International Conference on Emerging Trends and Applications
                in Statistics and Data Science.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Quick Links</h3>
              <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-slate-400">
                {navItems.map(([label, id]) => (
                  <a key={id} href={`#${id}`} className="hover:text-white">
                    {label}
                  </a>
                ))}
                <a href={REGISTER_URL} className="hover:text-white">
                  Register
                </a>
                <a href={ABSTRACT_URL} className="hover:text-white">
                  Submit Abstract
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <a
                  href="mailto:statnconf@gmail.com"
                  className="block hover:text-white"
                >
                  statnconf@gmail.com
                </a>
                <a
                  href="https://wa.me/9779855030302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  +977 9855030302
                </a>
                <p>Kathmandu University, Dhulikhel, Nepal</p>
              </div>
            </div>
          </div>


        </div>
      </footer>

      {/* MOBILE STICKY REGISTER */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 bg-white/95 p-3 backdrop-blur">
        <div className="flex gap-2">
          <a
            href={ABSTRACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-slate-200 py-3 text-center text-sm font-bold text-slate-700"
          >
            Submit Abstract
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
