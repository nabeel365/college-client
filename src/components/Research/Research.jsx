import React from 'react';

const Research = () => {
  const researchPapers = [
    {
      title: 'Advancements in Artificial Intelligence',
      author: 'John Doe',
      link: 'https://example.com/paper1.pdf',
    },
    {
      title: 'Renewable Energy Sources and Sustainability',
      author: 'Jane Smith',
      link: 'https://example.com/paper2.pdf',
    },
    // Add more research papers as needed
  ];

  return (
    <div className="py-8 px-4 sm:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Recommended Research Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchPapers.map((paper, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold">{paper.title}</h3>
              <p className="text-gray-600">Author: {paper.author}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                View Research Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
