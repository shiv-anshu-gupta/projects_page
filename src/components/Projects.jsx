import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterSidebar from "./FilterSidebar";
import ReactPaginate from "react-paginate";

const Projects = () => {
  const projectList = [
    {
      title: "Product Development using Python / AI",
      description:
        "Python programming, knowledge of AI, healthcare domain knowledge.",
      rate: "10,000 INR - 25,000 INR",
      postedTime: "1 year ago",
      skills: "Python, AI, Healthcare",
    },
    {
      title: "Development of Fruits Apps",
      description:
        "HTML5, web development, jQuery, Node.js, mobile app development.",
      rate: "5,000 INR - 75,000 INR",
      postedTime: "1 year ago",
      skills: "HTML, JavaScript, Node.js",
    },
    {
      title: "Development of Fruits Apps",
      description:
        "HTML5, web development, jQuery, Node.js, mobile app development.",
      rate: "5,000 INR - 75,000 INR",
      postedTime: "1 year ago",
      skills: "HTML, JavaScript, Node.js",
    },
    {
      title: "Development of Fruits Apps",
      description:
        "HTML5, web development, jQuery, Node.js, mobile app development.",
      rate: "5,000 INR - 75,000 INR",
      postedTime: "1 year ago",
      skills: "HTML, JavaScript, Node.js",
    },
    {
      title: "Development of Fruits Apps",
      description:
        "HTML5, web development, jQuery, Node.js, mobile app development.",
      rate: "5,000 INR - 75,000 INR",
      postedTime: "1 year ago",
      skills: "HTML, JavaScript, Node.js",
    },
    {
      title: "Development of Fruits Apps",
      description:
        "HTML5, web development, jQuery, Node.js, mobile app development.",
      rate: "5,000 INR - 75,000 INR",
      postedTime: "1 year ago",
      skills: "HTML, JavaScript, Node.js",
    },
    {
      title: "Development of Fruits Apps",
      description:
        "HTML5, web development, jQuery, Node.js, mobile app development.",
      rate: "5,000 INR - 75,000 INR",
      postedTime: "1 year ago",
      skills: "HTML, JavaScript, Node.js",
    },
    // Add more projects as needed
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Change to 5 or more based on your design

  // Calculate pagination
  const offset = currentPage * itemsPerPage; // Start index for current page
  const currentItems = projectList.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(projectList.length / itemsPerPage);

  // Handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Projects Section */}
        <section className="w-full lg:w-3/4">
          <div className="space-y-6">
            {currentItems.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Pagination */}
          <ReactPaginate
            previousLabel="< previous"
            nextLabel="next >"
            breakLabel="..."
            onPageChange={handlePageClick}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName="flex justify-center space-x-2 mt-6"
            activeClassName="bg-blue-500 text-white font-bold"
            pageClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
            previousClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
            nextClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
            disabledClassName="opacity-50 cursor-not-allowed"
            breakClassName="px-4 py-2 text-gray-500"
          />
        </section>
      </div>
    </div>
  );
};

export default Projects;
