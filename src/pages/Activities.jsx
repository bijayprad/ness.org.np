import nessTalk from "../assets/pics/ness_talk1.jpg"; // adjust path if needed

export default function Activities() {
  return (
    <div>
      {/* Featured Program */}
      <section className="max-w-6xl mx-auto px-4 py-2">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Upcoming Talk Series - 25<sup>th</sup> April, 2026
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-2xl p-6">
          {/* Image */}
          <div>
            <img
              src={nessTalk}
              alt="Stat Chautari Talk Series"
              className="rounded-xl shadow-lg w-full object-cover"/>
          </div>
          {/* Content */}
          <div>
            <p className="text-sm text-blue-600 font-semibold mb-2">
              Stat Chautari Talk Series
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Beyond Average Effects: Using Virtual Twins to Detect Treatment
              Heterogeneity in Clinical Trials
            </h3>

            <p className="text-gray-700 mb-3">
              <strong>Speaker:</strong> Sumihiro (Sumi) Suzuki, Rush University
            </p>

            <p className="text-gray-700 mb-3">
              <strong>Date:</strong> April 25, Sunday
              <div className="max-w-6xl mx-auto px-10">13<sup>th</sup> Baisakh, 2083</div> 
            </p>

            <p className="text-gray-700 mb-3">
              <strong>Time:</strong> 10:15 AM EST (8:00 PM Nepali Time)

            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              This talk explores how Virtual Twins can uncover treatment
              heterogeneity in clinical trials, helping researchers identify
              which participants benefit most from interventions.
            </p>
<div>
            <a href="https://orcid.org/0000-0002-6408-9580"
className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">ORCID of the Speaker </a>
</div>            
            <div>
            <a href={nessTalk}
                download="ness_talk1.jpg"
                className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg"> Download Poster </a>
            </div>
<div>
  <a href="https://us02web.zoom.us/j/88400502493?pwd=KrssL55jtk03xnZvgxYCOjECyiLzjB.1" 
className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Click Here to Join Meeting </a>          

</div>
<div>
<br></br>
Zoom Meeting ID: 884 0050 2493. 
<br></br>
Passcode: 958412
</div>


          </div>
        </div>
      </section>
    {/* Activities Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Activities</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Analysis Training",
              description:
                "Learn computer applications, Python, and statistics for research.",
            },
            {
              title: "Conference",
              description:
                "Each year Nepal Statistical Society conducts conferences.",
            },
            {
              title: "Talk Program",
              description:
                "Every two months, NeSS organizes a hybrid talk series.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>




    </div>
  );
}