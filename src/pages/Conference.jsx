import React, { useEffect, useState } from "react";
import wrcImage from "../assets/pics/wrc1.jpg";

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
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-2 px-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Emerging Trends and Applications in
        <br></br> 
        Statistics and Data Science
        <br></br>
        (ICETASD - 2026)
        </h1>
<p className="text-lg md:text-xl mx-auto md:whitespace-nowrap">
  
</p>
      </section>
      {/* DETAILS SECTION */}
      <section
        id="conference-details"
        className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
             <u>Organized by</u><br></br>
          </h2>

{/* BUTTONS */}
<div className="flex flex-wrap justify-center gap-40 mb-10">

  {/* Kathmandu University */}
  <a href="https://ku.edu.np"
    className="bg-green-700 hover:bg-green-700 text-white px-6 py-5 rounded-2xl shadow-lg w-80 flex items-center gap-2">
    <img src="https://i.imgur.com/ghC0qQI.jpeg"
      alt="Kathmandu University Logo"
      className="w-40 h-20 object-contain"/>

    <p className="font-semibold leading-relaxed text-left">
      Department of Mathematics <br />
      School of Science <br />
      Kathmandu University
    </p>
  </a>

  {/* Nepal Statistical Society */}
  <a
    href="#"
    className="bg-blue-700 hover:bg-blue-700 text-white px-6 py-5 rounded-2xl shadow-lg w-80 flex items-center gap-4">
    <img src="https://i.imgur.com/3rnfLK4.jpeg"
      alt="NeSS Logo"
      className="w-20 h-20 object-contain"/>
    <p className="font-semibold leading-relaxed text-left">
      Nepal Statistical Society <br />
      (NeSS)
    </p>
  </a>

</div>







          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://canva.link/x4hdumsrx7wkc19"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow"
            >
              Brochure
            </a>

            <a
              href="https://forms.gle/k3pXo8gaBSYbj4Dy8"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow"
            >
              Submit Abstract
            </a>

            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow"
            >
              Register
            </a>
          </div>

          {/* COUNTDOWN */}
          {timeLeft && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-xl p-5 text-center shadow"
                >
                  <p className="text-3xl font-bold text-blue-700">
                    {item[1]}
                  </p>
                  <p className="text-gray-600">{item[0]}</p>
                </div>
              ))}
            </div>
          )}

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
  <div className="mb-12 flex items-center gap-3">
  <h3 className="text-2xl font-bold text-blue-700">
    Further Inquiry can be done at:
  </h3>
  <p className="text-gray-700 font-medium">
    statnconf@gmail.com
  </p>
</div>
</div>





          {/* IMPORTANT DATES */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Important Dates
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border text-left">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-3 border">Event</th>
                    <th className="p-3 border">Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">
                      Last date for abstract submission
                    </td>
                    <td className="p-3 border">5 August, 2026</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">Acceptance Notification</td>
                    <td className="p-3 border">10 August, 2026</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">Conference Day</td>
                    <td className="p-3 border">20-21 September, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FEES */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Conference Fees
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border text-left">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-3 border">Category</th>
                    <th className="p-3 border">Early Bird (upto20<sup>th</sup> August, 2026)</th>
                    <th className="p-3 border">Regular (21<sup>st</sup> Aug - 19<sup>th</sup> Sept, 2026)</th>
                    <th className="p-3 border">Onsite</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">Nepali Students</td>
                    <td className="p-3 border">NRS 2000</td>
                    <td className="p-3 border">NRS 2500</td>
                    <td className="p-3 border">NRS 3000</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">Nepali Faculty / Researchers</td>
                    <td className="p-3 border">NRS 3000</td>
                    <td className="p-3 border">NRS 3500</td>
                    <td className="p-3 border">NRS 4000</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">
                      Nepali Institutional Participants
                    </td>
                    <td className="p-3 border">NRS 10000</td>
                    <td className="p-3 border">NRS 12000</td>
                    <td className="p-3 border">NRS 15000</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">
                      Participants from South Asia
                    </td>
                    <td className="p-3 border">US$ 80</td>
                    <td className="p-3 border">US$ 100</td>
                    <td className="p-3 border">US$ 125</td>
                  </tr>


                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border">Foreign Participants</td>
                    <td className="p-3 border">US$ 200</td>
                    <td className="p-3 border">US$ 225</td>
                    <td className="p-3 border">US$ 250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

