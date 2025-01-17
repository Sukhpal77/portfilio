import { FaCode, FaMobileAlt, FaPencilRuler, FaLightbulb, FaCloud , FaTools } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg p-6 md:p-8 rounded-xl w-full transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4 md:gap-6">
        <h2 className="text-2xl md:text-3xl font-bold border-gradient-to-r from-orange-500 to-yellow-500 pb-2">
          ABOUT ME
        </h2>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 w-4/6"></div>
      </div>

      <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.
      </p>

      <h3 className="text-xl md:text-2xl font-semibold mt-6">What I do!</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 lg:h-[38vh] overflow-scroll no-scrollbar">
        {/* Web Development */}
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3">
            <FaCode className="text-orange-500 text-2xl sm:text-4xl" />
            <h4 className="font-semibold text-sm sm:text-lg dark:text-gray-800">Web Development</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-500 mt-2 text-xs sm:text-sm">
            With expertise in modern frameworks like React.js and Next.js, I specialize in creating scalable, fast, and user-friendly web applications.
          </p>
        </div>

        {/* App Development */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3">
            <FaMobileAlt className="text-yellow-500 text-2xl sm:text-4xl" />
            <h4 className="font-semibold text-sm sm:text-lg dark:text-gray-800">App Development</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-500 mt-2 text-xs sm:text-sm">
            I build cross-platform mobile applications using React Native, focusing on seamless user experiences and performance optimization.
          </p>
        </div>

        {/* UI/UX Designing */}
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3">
            <FaPencilRuler className="text-orange-500 text-2xl sm:text-4xl" />
            <h4 className="font-semibold text-sm sm:text-lg dark:text-gray-800">UI/UX Designing</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-500 mt-2 text-xs sm:text-sm">
            I craft intuitive user interfaces that prioritize user satisfaction, leveraging tools like Tailwind CSS and Figma to bring designs to life.
          </p>
        </div>

        {/* Cloud Integration */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3">
            <FaCloud className="text-yellow-500 text-2xl sm:text-4xl" />
            <h4 className="font-semibold text-sm sm:text-lg dark:text-gray-800">Cloud Integration</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-500 mt-2 text-xs sm:text-sm">
            I integrate cloud solutions such as AWS to build secure, scalable applications, including AWS Cognito-based authentication and resource management.
          </p>
        </div>

        {/* Docker & Jenkins */}
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3">
            <FaTools className="text-orange-500 text-2xl sm:text-4xl" />
            <h4 className="font-semibold text-sm sm:text-lg dark:text-gray-800">Docker & Jenkins</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-500 mt-2 text-xs sm:text-sm">
            I have basic knowledge of Docker for containerizing applications and Jenkins for setting up continuous integration and deployment pipelines.
          </p>
        </div>

        {/* Problem-Solving */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 sm:p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-yellow-500 text-2xl sm:text-4xl" />
            <h4 className="font-semibold text-sm sm:text-lg dark:text-gray-800">Problem-Solving</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-500 mt-2 text-xs sm:text-sm">
            I thrive on tackling challenges, developing efficient solutions for real-world problems, and continuously improving my technical skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
