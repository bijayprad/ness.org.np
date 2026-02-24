import React, { useEffect, useState } from "react";

export default function Conference() {
  const targetDate = new Date("September 20, 2026 07:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="text-center pt-6 pb-6">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            International Conference on Emerging Trends and Applications in
            Statistics and Data Science - 2026 (ICETASD - 2026)
          </h1>

          <p className="text-xl font-semibold">
            20-21 August, 2026 (Aswin 5-6, 2083)
          </p>
          <p className="mb-6">
            Venue: Kathmandu University, Dhulikhel, Kathmandu
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/doc/brochure.pdf"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
            >
              Brochure
            </a>

            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
            >
              Submit Abstract
            </a>

            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Register
            </a>
          </div>

          {/* Countdown */}
          {timeLeft && (
            <div className="mt-10 bg-white/70 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Conference Countdown
              </h2>
              <div className="flex justify-center gap-6 text-lg font-bold">
                <div>
                  <p className="text-3xl">{timeLeft.days}</p>
                  <p>Days</p>
                </div>
                <div>
                  <p className="text-3xl">{timeLeft.hours}</p>
                  <p>Hours</p>
                </div>
                <div>
                  <p className="text-3xl">{timeLeft.minutes}</p>
                  <p>Minutes</p>
                </div>
                <div>
                  <p className="text-3xl">{timeLeft.seconds}</p>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CALL FOR PAPERS */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Call for Papers
        </h2>

        <p className="text-gray-700 mb-4">
          Nepal Statistical Society invites Academicians, Researchers,
          Data Scientists, Statisticians, Professionals, and Students to
          NCETASD-2025. The theme of this year's conference is
          <strong> Application of Statistics and Data Science</strong>.
        </p>
      </section>

      {/* IMPORTANT DATES TABLE */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Conference Dates
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-gray-700">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2">Event</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Last date for abstract submission
                </td>
                <td className="border px-4 py-2">5 August, 2026</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Acceptance Notification
                </td>
                <td className="border px-4 py-2">10 August, 2026</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Conference Day
                </td>
                <td className="border px-4 py-2">20-21 August, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FEES */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Conference Fees
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-gray-700">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Early Bird</th>
                <th className="border px-4 py-2">Regular</th>
                <th className="border px-4 py-2">Onsite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Students</td>
                <td className="border px-4 py-2">NRS 2000</td>
                <td className="border px-4 py-2">NRS 2500</td>
                <td className="border px-4 py-2">NRS 3000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Faculty/Researchers
                </td>
                <td className="border px-4 py-2">NRS 3000</td>
                <td className="border px-4 py-2">NRS 3500</td>
                <td className="border px-4 py-2">NRS 4000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Institutional Participants
                </td>
                <td className="border px-4 py-2">NRS 10000</td>
                <td className="border px-4 py-2">NRS 12000</td>
                <td className="border px-4 py-2">NRS 15000</td>
              </tr><tr>
                <td className="border px-4 py-2">
                  Foreign Participants
                </td>
                <td className="border px-4 py-2">US$ 200</td>
                <td className="border px-4 py-2">US$ 225</td>
                <td className="border px-4 py-2">US$ 250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}