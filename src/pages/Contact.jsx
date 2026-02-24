export default function Contact() {
  return (
    <>
      {/* TOP HEADER */}
      <div className="text-center py-6 bg-blue-50 border-b">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Nepal Statistical Society
        </h1>

        <p className="text-gray-700 mt-1">
          Samakhusi, Kathmandu
        </p>

        <p className="text-blue-700 font-medium">
          nepalstatisticalsociety@gmail.com
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div>

        {/* Activities Section */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold mb-8 text-center">Officers</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                post: "President",
                name: "Prof Dr. Ram Prasad Khatiwada",
                email: "ramktd@gmail.com ",
                contact: "9851172978"
              },
              {
                post: "Vice President",
                name: "Dr. Bijay Lal Pradhan",
                email: "bijiayprad@gmail.com ",
                contact: "9851172978"
              },
              {
                post: "Secretary",
                name: "Mr. Nabaraj Poudyal",
                email:"nrpl2001@gmail.com ",
                contact:"9841600555"
              },
              {
                post: "Treasurer",
                name: "Mr. Ek Raj Kadariya",
                email:"ek kadariya101@gmail.com ",
                contact:"9841415961"
              }
            ].map((course, index) => (
<div
  key={index}
  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-lg shadow hover:shadow-xl transition-all"
>
  <h3 className="text-lg font-semibold mb-1 leading-tight">{course.post}</h3>

  <p className="text-sm leading-snug">{course.name}</p>
  <p className="text-sm leading-snug">{course.email}</p>
  <p className="text-sm leading-snug">{course.contact}</p>
</div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}