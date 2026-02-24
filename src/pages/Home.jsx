import { useEffect, useState } from "react";
import ness1 from "../assets/pics/ness1.jpg";
import ness2 from "../assets/pics/ness2.jpg";
import ness3 from "../assets/pics/ness3.jpg";

export default function Home() {

  /* ---------------- IMAGE SLIDER ---------------- */
  const images = [
    ness1,
    ness2,
    ness3,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* ---------------- COUNTER ---------------- */
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 5;
      if (i >= 150) clearInterval(interval);
      setCount(i);
    }, 25);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[520px] flex items-center justify-center text-white">

        {/* sliding images */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-200" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* content */}
        <div className="relative text-center px-4 pt-100 max-w-3xl animate-fadeIn">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Nepal Statistical Society
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Advancing Statistics, Research, and Data Science in Nepal
          </p>
{/* 
          <a
            href="/about"
            className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore More
          </a>
*/}
        </div>

        {/* scroll hint */}
{/*        <div className="absolute bottom-6 animate-bounce text-white text-3xl">
          ↓
        </div>
*/}
      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="py-10 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Welcome to NeSS
        </h2>

        <p className="max-w-6xl mx-auto text-lg text-gray-600 leading-relaxed">
            The Nepal Statistical Society (NeSS) was established on November 14, 2013, 
            during a meeting held at the Central Department of Statistics, Tribhuvan University, 
            in response to the diverse challenges arising from contemporary circumstances. 
            Recognizing the need for statisticians to play a significant role in addressing these issues, 
            the professors of statistics decided to form a professional and subject-specific collective organization. 
            Following various meetings and discussions, the society was officially registered with 
            the District Administration Office in Kathmandu on November 15, 2014, and with the 
            Social Welfare Council on December 12, 2014.
        </p>
      </section>


      {/* ================= COURSES ================= */}
      <section className="py-4 max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Activities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Training Program",
              desc: "Training in R, Python, SPSS, and research methodology."
            },
            {
              title: "Conference",
              desc: "National and International Conferences."
            },
            {
              title: "Talk Series",
              desc: "6 talk program in a year."
            },
          ].map((item, i) => (

            <div key={i}
              className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-3 transition">

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}
        </div>
      </section>


      {/* ================= COUNTER SECTION ================= */}
<section className="bg-blue-700 text-white py-20 text-center">
  <h2 className="text-3xl font-bold mb-10">
    Our Impact
  </h2>
  {/* HORIZONTAL CONTAINER */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-16">
    {/* Counter 1 */}
    <div>
      <div className="text-6xl font-extrabold">
        150+
      </div>
      <p className="text-xl mt-3">
        Researchers Trained
      </p>
    </div>
    {/* Counter 2 */}
    <div>
      <div className="text-6xl font-extrabold">
        10+
      </div>
      <p className="text-xl mt-3">
        Talk Programs Conducted
      </p>
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join Our Society
          <div className="py-4 max-w-6xl mx-auto px-4"></div>
        </h2>
        <a href="https://forms.gle/sgHZGz7ReRfF9vjHA"
          className="bg-blue-700 text-white py-2 px-10 py-4 rounded-xl shadow-lg hover:bg-blue-800 transition">
          Become Member
        </a>

      </section>

    </div>
  );
}