import React from "react";

const articles = [
  {
    number: "1",
    type: "Editorial",
    title: "Message from the Chief Editor",
    authors: "Bijay Lal Pradhan",
    pages: "",
    doi: "https://doi.org/10.68031/njsd.v1i.00011",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/45",
  },
  {
    number: "2",
    type: "Original Research Article",
    title:
      "Development of an Empirical Bayesian Single-Attribute Acceptance Sampling Plan for Food Quality using a Beta–Binomial Model",
    authors: "Ram Prasad Khatiwada",
    pages: "1–13",
    doi: "https://doi.org/10.67713/njsd.v1i.00001",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/23",
  },
  {
    number: "3",
    type: "Original Research Article",
    title:
      "Perceived Service Quality and Students’ Satisfaction in a Higher Education Institution: A Structural Equation Modeling Approach",
    authors:
      "Hari Prasad Upadhyay, Bijay Lal Pradhan, Ram Prasad Khatiwada",
    pages: "14–22",
    doi: "https://doi.org/10.67713/njsd.v1i.00002",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/24",
  },
  {
    number: "4",
    type: "Original Research Article",
    title:
      "Modeling and Forecasting Nepal’s Nominal GDP: An Updated Box Jenkins ARIMA Analysis",
    authors:
      "Udaya Bahadur Bohara, Narendra Bahadur Chand, Bijay Lal Pradhan",
    pages: "23–31",
    doi: "https://doi.org/10.67713/njsd.v1i.00003",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/25",
  },
  {
    number: "5",
    type: "Original Research Article",
    title:
      "AI-Driven Productivity Impact Analysis Using GIS and IoT Data in Sugar Industries: A Pilot Study",
    authors: "Amol Chavan, Santosh Parakh",
    pages: "32–37",
    doi: "https://doi.org/10.67713/njsd.v1i.00004",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/26",
  },
  {
    number: "6",
    type: "Original Research Article",
    title:
      "Evolution of Machine Learning-Based Human-Disease Prediction Models: A Bibliometric Analysis of Statistical Learning, Model Validation, and Predictive Performance",
    authors:
      "Sarad Chandra Kafle, Satyendra Kushwaha, Basanta Prasad Adhikari, Pradip Subedi",
    pages: "38–49",
    doi: "https://doi.org/10.67713/njsd.v1i.00005",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/28",
  },
  {
    number: "7",
    type: "Original Research Article",
    title:
      "A New Two-Parameter Half-Cauchy Modified Extended Exponential Distribution: Simulation, and Application to Fatigue Life Data",
    authors: "Lal Babu Sah Telee, Umesh Kumar Yadav",
    pages: "50–56",
    doi: "https://doi.org/10.67713/njsd.v1i.00006",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/18",
  },
  {
    number: "8",
    type: "Original Research Article",
    title:
      "Natural Calamity Deaths in Nepal: Analysis of the 2021 National Population and Housing Census",
    authors: "Jibesh Acharya, Srisa Rijal, Divya Shakya",
    pages: "57–64",
    doi: "https://doi.org/10.67713/njsd.v1i.00007",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/19",
  },
  {
    number: "9",
    type: "Original Research Article",
    title:
      "Structural Modeling of Employee Performance: The Roles of Capacity Building and Supervisor Support in Nepalese Commercial Banks",
    authors: "Asfaq Ahmad, Govind Jnawali",
    pages: "65–74",
    doi: "https://doi.org/10.67713/njsd.v1i.00008",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/20",
  },
  {
    number: "10",
    type: "Original Research Article",
    title:
      "Modeling Minimum Wage Determination in Nepal: The Role of Economic Growth and Inflation",
    authors: "Ishwar Kumar Shrestha, Nabaraj Poudyal, Eak Raj Kadariya",
    pages: "75–82",
    doi: "https://doi.org/10.67713/njsd.v1i.00009",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/21",
  },
  {
    number: "11",
    type: "Original Research Article",
    title:
      "Estimating Heterogeneous Causal Effects of Maternal Healthcare on Child Nutritional Outcomes in Nepal: A Survey-Aware Analysis Using TMLE, Super Learner and BART",
    authors: "Nanda Kumar Tharu, Prasamsha Aryal",
    pages: "83–90",
    doi: "https://doi.org/10.67713/njsd.v1i.00010",
    link: "https://journal.ness.org.np/index.php/njsds/article/view/22",
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">


      {/* ================================
          MAIN CONTENT
      ================================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* CURRENT ISSUE HEADER */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 mb-8">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>

              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Current Issue
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Vol. 1 No. 1 (2026)
              </h2>

              <p className="mt-3 text-slate-600">
                Nepal Journal of Statistics and Data Sciences
              </p>

            </div>


            {/* ISSUE INFORMATION */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 min-w-[260px]">

              <div className="space-y-3 text-sm">

                <div className="flex justify-between gap-6">
                  <span className="text-slate-500">
                    Published
                  </span>

                  <strong className="text-slate-800">
                    20 September 2026
                  </strong>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-500">
                    Volume
                  </span>

                  <strong className="text-slate-800">
                    1
                  </strong>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-500">
                    Number
                  </span>

                  <strong className="text-slate-800">
                    1
                  </strong>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-500">
                    Articles
                  </span>

                  <strong className="text-slate-800">
                    10
                  </strong>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-500">
                    Pages
                  </span>

                  <strong className="text-slate-800">
                    1–90
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            ISSUE INTRODUCTION
        ================================= */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 mb-8">

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            About the Journal
          </h2>

          <p className="text-slate-600 leading-7 mb-4">
            <strong className="text-slate-900">
              Nepal Journal of Statistics and Data Sciences (NJSDS)
            </strong>{" "}
            is a peer-reviewed, open-access academic journal dedicated to
            advancing research in Statistics, Data Science, quantitative
            research, and interdisciplinary applications.
          </p>

          <p className="text-slate-600 leading-7">
            The journal provides a scholarly platform for original research,
            methodological developments, applied studies, and emerging work
            involving statistical theory and methods, data analytics,
            artificial intelligence, machine learning, big data, biostatistics,
            econometrics, computational statistics, survey methodology,
            official statistics, and interdisciplinary applications of data
            science.
          </p>

        </section>


        {/* ================================
            ARTICLES HEADING
        ================================= */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Articles
            </h2>

            <p className="text-slate-500 mt-1">
              Vol. 1 No. 1 (2026)
            </p>
          </div>

          <a
            href="https://journal.ness.org.np/index.php/njsds/issue/current"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-white transition"
          >
            View in OJS →
          </a>

        </div>


        {/* ================================
            ARTICLE LIST
        ================================= */}
        <div className="space-y-5">

          {articles.map((article) => (

            <article
              key={article.number}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >

              <div className="p-6 md:p-7">

                {/* ARTICLE NUMBER + TYPE */}

                <div className="flex flex-wrap items-center gap-3 mb-4">

                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-bold">
                    {article.number}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {article.type}
                  </span>

                  {article.pages && (
                    <span className="text-sm text-slate-500">
                      Pages {article.pages}
                    </span>
                  )}

                </div>


                {/* TITLE */}

                <h3 className="text-xl md:text-2xl font-semibold leading-snug text-slate-900 mb-3">

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition"
                  >
                    {article.title}
                  </a>

                </h3>


                {/* AUTHORS */}

                <p className="text-slate-600 leading-6 mb-4">

                  <span className="font-semibold text-slate-800">
                    Authors:
                  </span>{" "}

                  {article.authors}

                </p>


                {/* DOI */}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-100">

                  <div className="text-sm">

                    <span className="font-semibold text-slate-700">
                      DOI:
                    </span>{" "}

                    <a
                      href={article.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline break-all"
                    >
                      {article.doi.replace("https://doi.org/", "")}
                    </a>

                  </div>


                  {/* BUTTONS */}

                  <div className="flex flex-wrap gap-2">

                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition"
                    >
                      View Article
                    </a>

                    <a
                      href={`${article.link}/pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition"
                    >
                      PDF
                    </a>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ================================
            ISSUE SUMMARY
        ================================= */}
        <section className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <div className="text-3xl font-bold text-blue-800">
                1
              </div>

              <div className="text-sm text-slate-600 mt-1">
                Volume
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-800">
                1
              </div>

              <div className="text-sm text-slate-600 mt-1">
                Issue
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-800">
                10
              </div>

              <div className="text-sm text-slate-600 mt-1">
                Research Articles
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-800">
                90
              </div>

              <div className="text-sm text-slate-600 mt-1">
                Pages
              </div>
            </div>

          </div>

        </section>


        {/* ================================
            FOOTER INFORMATION
        ================================= */}
        <section className="mt-10 pt-8 border-t border-slate-200">

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <h3 className="font-bold text-slate-900 mb-3">
                For Readers
              </h3>

              <div className="space-y-2 text-sm">

                <a
                  href="https://journal.ness.org.np/index.php/njsds/issue/archive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-700"
                >
                  Archives
                </a>

                <a
                  href="https://journal.ness.org.np/index.php/njsds/search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-700"
                >
                  Search
                </a>

              </div>

            </div>


            <div>

              <h3 className="font-bold text-slate-900 mb-3">
                For Authors
              </h3>

              <div className="space-y-2 text-sm">

                <a
                  href="https://journal.ness.org.np/index.php/njsds/about/submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-700"
                >
                  Author Guidelines
                </a>

                <a
                  href="https://journal.ness.org.np/index.php/njsds/about/submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-700"
                >
                  Submit an Article
                </a>

              </div>

            </div>


            <div>

              <h3 className="font-bold text-slate-900 mb-3">
                Journal Information
              </h3>

              <p className="text-sm text-slate-600 leading-6">
                Nepal Journal of Statistics and Data Sciences
                <br />
                Nepal Statistical Society
                <br />
                Kathmandu, Nepal
              </p>

            </div>

          </div>

        </section>

      </main>


     

    </div>
  );
}