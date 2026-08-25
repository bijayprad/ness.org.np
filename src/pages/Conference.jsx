import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Conference() {
  const targetDate = new Date("September 20, 2026 07:00:00").getTime();

  const getTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 text-gray-800 pb-20 md:pb-0">

{/* HERO */}
<motion.section
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  className="bg-cover bg-center text-white text-center px-4 py-6 md:py-10"
  style={{
    backgroundImage: "url('https://i.imgur.com/YvAttk4.jpeg')",
  }}
>
  <div className="bg-black/50 rounded-2xl p-4 md:p-8 max-w-4xl mx-auto">
    <p className="text-sm md:text-base font-semibold">
      International Conference on
    </p>

    <h1 className="text-2xl md:text-5xl font-bold mt-2 leading-snug">
      Emerging Trends and Applications in Statistics and Data Science
      <br />
      (ICETASD - 2026)
    </h1>

    <p className="mt-2 text-sm md:text-lg">
      September 20–21, 2026
    </p>
  </div>
</motion.section>

      {/* MAIN */}
     {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
<a href="https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/broness1.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow">Brochure</a>
            {/*
            <a href="https://canva.link/x4hdumsrx7wkc19"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow">Brochure</a>
            */}
            <a href="https://forms.gle/k3pXo8gaBSYbj4Dy8"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow">Submit Abstract</a>
            <a href="https://forms.gle/XcrYkVobgeZcEZie7"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow">Register</a>
          </div>
      
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {/* ORGANIZED BY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow"
        >
          <h2 className="text-xl md:text-3xl font-bold text-center text-blue-700 mb-6 underline">
            Organized by
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <a className="flex flex-col md:flex-row items-center gap-4 bg-green-700 text-white p-5 rounded-2xl shadow">
              <img src="https://i.imgur.com/gMBowQ2.jpeg" className="w-20 md:w-24" />
              
              
              <p className="text-sm md:text-base">
                Department of Mathematics <br />
                School of Science <br />
                Kathmandu University
              </p>
            </a>

            <a className="flex flex-col md:flex-row items-center gap-4 bg-blue-700 text-white p-5 rounded-2xl shadow">
              <img src="https://i.imgur.com/ovp6wTc.jpeg" className="w-20 md:w-24" />
              <p>Nepal Statistical Society (NeSS)</p>
            </a>

          </div>
        </motion.div>

        {/* COUNTDOWN */}
        {timeLeft && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              ["Days", timeLeft.days],
              ["Hours", timeLeft.hours],
              ["Minutes", timeLeft.minutes],
              ["Seconds", timeLeft.seconds],
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-5 rounded-xl text-center shadow">
                <p className="text-2xl md:text-3xl font-bold text-blue-700">
                  {item[1]}
                </p>
                <p className="text-sm">{item[0]}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* CONTENT BLOCK (EXAMPLE WRAP — KEEP YOUR TEXT HERE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow space-y-6"
        >

     {/* BUTTONS 
          <div className="flex flex-wrap justify-center gap-4 mb-10">
<a href="https://docs.google.com/gview?url=https://raw.githubusercontent.com/bijayprad/share/main/pdf/nessconfbro2026.pdf&embedded=true"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow">Brochure</a>
            
            <a href="https://canva.link/x4hdumsrx7wkc19"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow">Brochure</a>
            
            <a href="https://forms.gle/k3pXo8gaBSYbj4Dy8"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow">Submit Abstract</a>
            <a href="https://forms.gle/XcrYkVobgeZcEZie7"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow">Register</a>
          </div>
          */}

 {/* CALL FOR PAPERS */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Call for Papers
  </h3>

  <div className="text-gray-700 leading-7 space-y-4">
    <p>
      Nepal Statistical Society invites academicians, researchers,
      statisticians, data scientists, professionals, and students to
      participate in ICETASD - 2026. This conference focuses on the
      application of Statistics and Data Science in modern research and
      development.
    </p>

    <p>
      The Nepal Statistical Society (NeSS) is dedicated to fostering a
      culture of statistical literacy and excellence through a variety of
      initiatives, including seminars, workshops, and conferences that
      facilitate knowledge sharing and collaboration among professionals in
      the field.
    </p>

    <p>
      The society also emphasizes the importance of networking, providing
      opportunities for members to connect with statistical experts both
      locally and internationally.
    </p>

    <p>
      In continuation of its mission, NeSS is going to organize the
      International Conference on Emerging Trends and Applications in
      Statistics and Data Science (ICETASD-2026), which will bring together
      statisticians, data scientists, researchers, and professionals to
      explore cutting-edge developments and share insights shaping the
      future of the field.
    </p>

    <p>
      The conference offers a dynamic platform for exchanging ideas,
      presenting research, and engaging with experts who are driving
      forward data-driven solutions.
    </p>
  </div>
</div>

{/* CONFERENCE FOCUS AREAS */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Conference Focus Areas
  </h3>

  <ul className="list-disc list-inside text-gray-700 leading-8 space-y-1">
    <li>Statistics in the Context of Modern Data Science and AI</li>
    <li>Advances from Statistical Learning to Machine Learning</li>
    <li>Statistical Modeling of Environmental Risks</li>
    <li>Applications in Climate Change and Sustainability</li>
    <li>Innovations in Health Analytics</li>
    <li>Computational Bayesian Methods and Emerging Trends</li>
    <li>Public Health and Biostatistics</li>
    <li>New Methodologies and Recent Progress</li>
    <li>GenAI: Opportunities and Challenges</li>
    <li>Statistical Approaches to Risk Management</li>
    <li>Tasks of Gen AI and Big Data Challenges</li>
  </ul>
</div>

{/* CONFERENCE OBJECTIVES */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Conference Objectives
  </h3>

  <ul className="list-disc list-inside text-gray-700 leading-8 space-y-1">
    <li>Explore Advancements in Statistics and Data Science</li>
    <li>
      Facilitate Knowledge Sharing and Interdisciplinary Collaboration
    </li>
    <li>Address Contemporary Challenges</li>
    <li>
      Promote Professional Networking and Capacity Building
    </li>
    <li>
      Encourage Evidence-Based Policy and Decision-Making
    </li>
  </ul>
  <br />
</div>




        </motion.div>
      </div>

      {/* IMPORTANT DATES */}
{/* IMPORTANT DATES */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-blue-700 mb-4">Important Dates</h3>
  <table className="w-full border text-left text-sm">
    <thead className="bg-blue-100 hidden sm:table-header-group">
      <tr>
        <th className="p-3 border">Event</th>
        <th className="p-3 border">Date</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["Last date for abstract submission", "30 August, 2026"],
        ["Acceptance Notification", "30 August, 2026"],
        ["Conference Day", "20–21 September, 2026"],
      ].map(([event, date]) => (
        <tr key={event} className="block border rounded-lg mb-3 overflow-hidden odd:bg-white even:bg-gray-50 sm:table-row sm:mb-0 sm:rounded-none">
          <td data-label="Event"
            className="p-3 border-b flex gap-2 sm:table-cell sm:border
                       before:content-[attr(data-label)] before:font-medium
                       before:text-slate-500 before:w-20 before:shrink-0
                       sm:before:hidden">
            {event}
          </td>
          <td data-label="Date"
            className="p-3 flex gap-2 sm:table-cell sm:border
                       before:content-[attr(data-label)] before:font-medium
                       before:text-slate-500 before:w-20 before:shrink-0
                       sm:before:hidden">
            {date}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* FEES */}
<div>
  <h3 className="text-2xl font-bold text-blue-700 mb-4">Conference Fees</h3>
  <div className="overflow-x-auto">
    <table className="w-full border text-left text-sm">
      <thead className="bg-blue-100 hidden sm:table-header-group">
        <tr>
          <th className="p-3 border">Category</th>
          <th className="p-3 border">Early Bird (upto 25<sup>th</sup> Aug, 2026)</th>
          <th className="p-3 border">Regular (21<sup>st</sup> Aug – 19<sup>th</sup> Sep, 2026)</th>
          <th className="p-3 border">Onsite</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Nepali Students",              "NRS 2,000", "NRS 2,500", "NRS 3,000"],
          ["Nepali Faculty / Researchers", "NRS 3,000", "NRS 3,500", "NRS 4,000"],
          ["Nepali Institutional",         "NRS 10,000","NRS 12,000","NRS 15,000"],
          ["South Asia Participants",      "US$ 80",    "US$ 100",   "US$ 125"],
          ["Foreign Participants",         "US$ 200",   "US$ 225",   "US$ 250"],
        ].map(([cat, early, regular, onsite]) => (
          <tr key={cat} className="odd:bg-white even:bg-gray-50 block border rounded-lg mb-3 overflow-hidden sm:table-row sm:mb-0 sm:rounded-none">
            <td data-label="Category"   className="p-3 border-b flex gap-2 font-medium sm:font-normal sm:table-cell sm:border before:content-[attr(data-label)] before:text-slate-500 before:w-28 before:shrink-0 sm:before:hidden">{cat}</td>
            <td data-label="Early Bird" className="p-3 border-b flex gap-2 sm:table-cell sm:border before:content-[attr(data-label)] before:text-slate-500 before:w-28 before:shrink-0 sm:before:hidden">{early}</td>
            <td data-label="Regular"    className="p-3 border-b flex gap-2 sm:table-cell sm:border before:content-[attr(data-label)] before:text-slate-500 before:w-28 before:shrink-0 sm:before:hidden">{regular}</td>
            <td data-label="Onsite"     className="p-3 flex gap-2 sm:table-cell sm:border before:content-[attr(data-label)] before:text-slate-500 before:w-28 before:shrink-0 sm:before:hidden">{onsite}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

{/* ASSOCIATE ORGANIZATIONS */}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-blue-700 mb-6">
    Associate Organizations
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    {/* Organization 1 */}
    <a
      href="https://tucds.edu.np/"
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 bg-white flex flex-col items-center text-center"
    >
      <img
        src="https://i.imgur.com/PMcHY2r.jpeg"
        alt="Organization 1" 
        className="h-20 object-contain mb-4"
      />

      <h4 className="font-semibold text-lg text-gray-800">
        Central Department of Statistics, TU
      </h4>

      <p className="text-sm text-blue-600 mt-1">
        Visit Website
      </p>
    </a>

    {/* Organization 2 */}
    <a
      href="https://sms.tu.edu.np/"
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 bg-white flex flex-col items-center text-center"
    >
      <img
        src="https://i.imgur.com/QmCUxiz.jpeg"
        alt="Organization 2"
        className="h-20 object-contain mb-4"
      />

      <h4 className="font-semibold text-lg text-gray-800">
        School of Matematical Sciences, TU
      </h4>

      <p className="text-sm text-blue-600 mt-1">
        Visit Website
      </p>
    </a>

    {/* Organization 3 */}
    <a
      href="https://www.oic.edu.np/"
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 bg-white flex flex-col items-center text-center"
    >
      <img
        src="https://i.imgur.com/7A3pe9U.jpeg"  
        alt="Organization 3"
        className="h-20 object-contain mb-4"
      />

      <h4 className="font-semibold text-lg text-gray-800">
        Orchid International College
      </h4>

      <p className="text-sm text-blue-600 mt-1">
        Visit Website
      </p>
    </a>

  </div>
</div>

{/* ASSOCIATE ORGANIZATIONS */}
<div className="mt-12">

  <div className="mb-12 flex items-center gap-3">
  <h3 className="text-2xl font-medium text-blue-500">
    Further Inquiry:
  </h3>
  <p className="text-gray-500 font-medium">
    statnconf@gmail.com 
  </p>
    <h3 className="text-2xl font-medium text-blue-500">
    Mobile(WhatsApp):
  </h3>
  <p className="text-gray-500 font-medium">
    +977  9855030302
  </p>
</div>


{/* keep your PDF link for Abstract book 
*/}
<div className="flex gap-5">
<a
  href="https://docs.google.com/gview?embedded=1&url=https://raw.githubusercontent.com/bijayprad/Research-Publication/main/NeSS/AbstractBook.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-3  px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
>
  📄 View Abstract Book
</a>

<button
  onClick={() =>
    window.open(
      "https://docs.google.com/spreadsheets/d/1pWt2JGd2Dasbw6hFQ0gYMW98TQmDcnhuou0-me_dnmg/edit?gid=0#gid=0",
      "_blank"
    )
  }
  rel="noopener noreferrer"
  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
>
  📊 Abstract and Registration List
</button>

</div>
{/* End for PDF link for Abstract book */}

</div>
      {/* 📌 MOBILE STICKY REGISTER BUTTON */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white shadow-lg p-3 z-50">
        <a
          href="#"
          className="block text-center bg-blue-600 text-white py-3 rounded-xl font-semibold active:scale-95 transition"
        >
          Register Now
        </a>
      </div>

    </div>
  );
}