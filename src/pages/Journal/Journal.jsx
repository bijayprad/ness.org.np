import React from "react";

const articles = [
{
    title: "ABC",
    authors: "ABC",
    pdf: "#",
  },
  {
    title: "DEF",
    authors: "DEF",
    pdf: "#",
  },
  
];

export default function Journal() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">About Journal</h2>
      <p className="mb-4">
      <b>NJSDS</b> is a peer-reviewed, open-access journal published annually, dedicated to advancing research in Statistics and Data Science. The journal provides a scholarly platform for high-quality original research articles, review papers, methodological developments, and applied case studies.

The journal covers a broad spectrum of topics including statistical theory and methods, applied statistics, data analytics, machine learning, artificial intelligence, big data, biostatistics, econometrics, computational statistics, survey methodology, official statistics, and interdisciplinary applications of data science across science, technology, health, economics, and social sciences etc.

Its primary objective is to promote rigorous research, innovation, and practical applications in Statistics and Data Science, while serving as a strong academic platform for researchers from Nepal and the global community.</p>
      <h2 className="text-3xl font-bold mb-4">
        Volume I Issue I
      </h2>
      <p className="mb-6">
        Proposed Published Date: 2026/09/20
      </p>

      <h1 className="text-3xl font-bold mb-6"></h1>

      <div className="grid gap-6">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-2">
              <strong>Authors:</strong> {article.authors}
            </p>
            <a
              href={article.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

