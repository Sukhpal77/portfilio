import React from "react";

function Resume() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg p-6 md:p-8 rounded-xl w-full transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4 md:gap-6">
        <h2 className="text-2xl md:text-3xl font-bold border-gradient-to-r from-orange-500 to-yellow-500 pb-2">
          Resume
        </h2>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 w-4/6"></div>
      </div>
      <div className="lg:h-[60vh] overflow-scroll no-scrollbar">
        {/* Education and Experience Section */}
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="Education">🎓</span> Education
            </h2>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:bg-gray-700 dark:text-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">2022-2024</p>
              <h3 className="text-lg font-semibold">Master of Computer Application</h3>
              <p>Chandigarh University</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:bg-gray-700 dark:text-gray-800 p-4 rounded-lg mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">2018-2021</p>
              <h3 className="text-lg font-semibold">Bachelor of Computer Application</h3>
              <p>Baba Farid Group of Institutions</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="Experience">💼</span> Experience
            </h2>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:bg-gray-700 dark:text-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">2024 - Present</p>
              <h3 className="text-lg font-semibold">Website Development</h3>
              <p>Aerinit</p>
            </div>
            {/* <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:bg-gray-700 dark:text-gray-800 p-4 rounded-lg  mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">2021-2022</p>
            <h3 className="text-lg font-semibold">Website Development</h3>
            <p>Village 2 Nation</p>
          </div> */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Work Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML 5",
                "CSS 3",
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "SQL",
                "React Native",
                "PHP",
                "Laravel",
                "Python",
                "C",
                "C++",
                "Java",
                "Spring Boot",
                "Android",
                "Git",
                "Figma",
                "Photoshop",
                "Canvas"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 cursor-pointer dark:bg-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r from-orange-400 to-red-400 hover:font-bold hover:text-gray-100 dark:hover:text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Problem-Solving",
                "Critical Thinking",
                "Effective Communication",
                "Team Collaboration",
                "Adaptability",
                "Attention to Detail",
                "Time Management",
                "Creativity"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 cursor-pointer dark:bg-gray-600 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-orange-400 to-red-400 hover:font-bold hover:text-gray-100 dark:hover:text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
