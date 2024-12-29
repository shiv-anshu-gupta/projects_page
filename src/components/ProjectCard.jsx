import { FaClock } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const ProjectCard = ({ title, description, rate, postedTime, skills }) => {
  return (
    <div className="w-17/20 lg:w-17/20 bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border border-gray-200">
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
          <FaClock color="#163a24" className="inline-block" size={20} />
          <span>Posted {postedTime}</span>
        </p>
        <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
          <GiSkills color="#163a24" className="inline-block" size={20} />
          <span>{skills}</span>
        </p>
        <button className="mt-4 bg-customGreen text-white px-4 py-2 rounded border-2 border-customGreen transition-colors duration-300 hover:bg-white hover:text-customGreen">
          Read More
        </button>
      </div>
      <div className="flex-shrink-0 text-right bg-slate-200 rounded-lg">
        <p className="text-gray-800 text-justify font-sans px-1">{rate}</p>
        <p className="text-sm text-gray-500 px-1">Fixed Rate</p>
      </div>
    </div>
  );
};

export default ProjectCard;
