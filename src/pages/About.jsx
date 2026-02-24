
export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('/assets/sirtlogo.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/80 p-6 rounded-xl shadow-lg max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Welcome to Nepal Statistical Society</h1>
        <p>
The Nepal Statistical Society (NeSS) was established on November 14, 2013, during a meeting held at the Central Department of Statistics, Tribhuvan University, in response to the diverse challenges arising from contemporary circumstances. Recognizing the need for statisticians to play a significant role in addressing these issues, the professors of statistics decided to form a professional and subject-specific collective organization. Following various meetings and discussions, the society was officially registered with the District Administration Office in Kathmandu on November 15, 2014, and with the Social Welfare Council on December 12, 2014.

The society's constitution emphasizes the following objectives:

To enhance the academic advancement and protection of the rights and interests of professors involved in teaching and research in statistics across various universities and campuses in Nepal.
To identify and promote various fields of application for statistics.
To improve the competencies of professors based on the breadth of the subject.
To contribute significantly to the progressive development of the field of statistics.

NeSS is dedicated to fostering a culture of statistical literacy and excellence through a variety of initiatives, including seminars, workshops, and conferences that facilitate knowledge sharing and collaboration among professionals in the field. The society also emphasizes the importance of networking, providing opportunities for members to connect with statistical experts both locally and internationally.
Supported by membership fees, contributions, and sponsorships, NeSS operates as a not-for-profit organization dedicated to advancing the field of statistics in Nepal. Through its efforts, NeSS aims to optimize data-driven decision-making and resource management, ultimately contributing to the development of evidence-based policies and practices in various sectors.
        </p>
      </div>
    </div>
  );
}