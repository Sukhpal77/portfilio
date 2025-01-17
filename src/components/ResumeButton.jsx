import { FaDownload } from "react-icons/fa";

function ResumeButton() {
  return (
    <a 
      href="/Resume_Sukhpal_Singh.pdf" 
      download="Resume_Sukhpal_Singh.pdf" 
      className=" px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center"
    >
      <FaDownload className="mr-2" />
      Download Resume
    </a>
  );
}

export default ResumeButton;
