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
          Upcoming Conferences
        </h1>
<p className="text-lg md:text-xl mx-auto md:whitespace-nowrap">
  Join researchers, statisticians, academicians, and students in two exciting international academic events.
</p>
      </section>

      {/* TWO CONFERENCE CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                World Research Conference - 2026
              </h2>
            <p className="text-lg font-semibold mb-2">
              International Interdisciplinary Research & Innovation Conference (IIRIC-2026)
            </p>

            <p className="mb-2">📅 19–20 May 2026
</p>
            <p className="mb-4">
              📍 Orchid International College, Kathmandu, Nepal
            </p>

              <p className="text-gray-600 mb-5">
                Explore global collaboration, innovation, and research
                opportunities with scholars from around the world.
              </p>

              <a
                href="https://worldresearchconference.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              ICETASD - 2026
            </h2>

            <p className="text-lg font-semibold mb-2">
              International Conference on Emerging Trends and Applications in
              Statistics and Data Science
            </p>

            <p className="mb-2">📅 20-21 September, 2026</p>
            <p className="mb-4">
              📍 Kathmandu University, Dhulikhel, Kathmandu
            </p>

            <p className="text-gray-600 mb-5">
              A platform for researchers, statisticians, data scientists,
              professionals, and students to share ideas and innovations.
            </p>

            <a
              href="#conference-details"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow"
            >
              View Details
            </a>
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section
        id="conference-details"
        className="max-w-6xl mx-auto px-4 pb-20"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            ICETASD - 2026 Details
          </h2>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://drive.google.com/file/d/1dfFwenWagga1D3_HzTgukouoAXH3l6Mk/preview"
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

            <p className="text-gray-700 leading-7">
              Nepal Statistical Society invites academicians, researchers,
              statisticians, data scientists, professionals, and students to
              participate in ICETASD - 2026. This conference focuses on the
              application of Statistics and Data Science in modern research and
              development.
            </p>
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
                    <td className="p-3 border">US$ 120</td>
                    <td className="p-3 border">US$ 150</td>
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

