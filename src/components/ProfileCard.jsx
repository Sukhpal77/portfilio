import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import ResumeButton from "./ResumeButton";

function ProfileCard() {
  return (
    <div className="relative bg-white mt-[6.3%] dark:bg-gray-800 dark:text-gray-300 shadow-lg p-8 rounded-xl flex flex-col items-center w-full lg:w-1/3 transition-all duration-300 ease-in-out">
      {/* Floating Profile Image */}
      <div className="absolute -top-16 w-40 h-40 rounded-xl overflow-hidden shadow-lg">
        <img
          src="./Sukhpal.jpg"
          alt="Profile"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Card Content */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">Sukhpal Singh</h2>
        <p className="text-gray-500 dark:text-gray-400">FullStack Developer</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={() => window.open("https://www.instagram.com/happy__sran/", "_blank")}
          className="p-4 rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90 transition-all transform hover:scale-110 dark:from-yellow-500 dark:via-pink-600 dark:to-purple-700 dark:text-gray-200"
        >
          <FaInstagram />
        </button>

        <button
          onClick={() => window.open("https://www.linkedin.com/in/sukhpalsingh77/", "_blank")}
          className="p-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg hover:opacity-90 transition-all transform hover:scale-110 dark:from-blue-500 dark:to-blue-700 dark:text-gray-200"
        >
          <FaLinkedinIn />
        </button>

        <button
          onClick={() => window.open("https://x.com/Sukhpal03758731", "_blank")}
          className="p-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg hover:opacity-90 transition-all transform hover:scale-110 dark:from-blue-500 dark:to-blue-700 dark:text-gray-200"
        >
          <FaTwitter />
        </button>

        <button
          onClick={() => window.open("https://github.com/Sukhpal77", "_blank")}
          className="p-4 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:opacity-90 transition-all transform hover:scale-110 dark:from-gray-700 dark:to-gray-900 dark:text-gray-300"
        >
          <FaGithub />
        </button>
      </div>

      {/* Contact Info */}
      <div className="mt-8 w-full space-y-4 text-center p-4 bg-gray-100 rounded-xl justify-start items-start dark:bg-gray-700">
        <p
          className="flex items-center justify-start gap-2 border-b pb-2 cursor-pointer"
          onClick={() => window.open("tel:+919991623677")}
        >
          <i className="fas fa-phone text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"></i>{" "}
          +91 9991623677
        </p>

        <p
          className="flex items-center justify-start gap-2 border-b pb-2 cursor-pointer"
          onClick={() => window.open("mailto:sukhpalsingh0333@gmail.com")}
        >
          <i className="fas fa-envelope text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"></i>{" "}
          sukhpalsingh0333@gmail.com
        </p>

        <p
          className="flex items-center justify-start gap-2 border-b pb-2 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Kalanwali,+Haryana/",
              "_blank"
            )
          }
        >
          <i className="fas fa-map-marker-alt text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"></i>
          Kalanwali, Haryana
        </p>

        {/* Download Resume Button */}
        <div className="pt-6">
          <ResumeButton />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
