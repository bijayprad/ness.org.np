export default function Activities() {
  return (
    
    <div>
      {/* Courses Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Activities</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Analysis Training",
              description: "Learn computer applications, Python, and statistics for research."
            },
            {
              title: "Conference",
              description: "Each year Nepal Statistical Society conduct conference."
            },
            {
              title: "Talk Program",
              description: "In every two month talk series of NeSS has been held on Hybrid Mood"
            }
          ].map((course, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-black-600">{course.description}</p>
              <a href="/courses" className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
              {/* Moveout Learn More  (Learn More)  */} 
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      {/* Make fix 
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
          Join SIRT Today
        </h2>
        <p className="text-lg md:text-xl mb-6 drop-shadow-sm">
          Apply for your course and become a part of our community
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition-all"
        >
          Apply Now
        </a>
      </section>
      */}
    </div>
    
  );
}
