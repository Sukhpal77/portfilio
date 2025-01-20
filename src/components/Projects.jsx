import React, { useState } from "react";

const projects = [
  {
    name: "Real-Time Chat Application",
    technologies: "Next.js, Node.js, PostgreSQL, WebSocket",
    developmentTime: "1 week",
    teamSize: "1 developers",
    useCases: "Instant messaging, Team collaboration",
    description:
      "Built a real-time chat app for instant messaging. Users can send and receive messages in real-time with typing indicators and read receipts.",
    features: [
      "Real-time messaging using WebSocket",
      "Secure user authentication with JWT",
      "Typing indicators and read receipts",
      "Responsive design for all screen sizes",
    ],
    image: "/img/projects/chatApp1.png",
    images: ["/img/projects/chatApp1.png", "/img/projects/chatApp2.png"],
  },
  {
    name: "Attendance Management System",
    technologies: "PHP, Laravel, JavaScript",
    developmentTime: "15 days",
    teamSize: "1 developers",
    useCases: "Educational institutions, Attendance tracking",
    description:
      "Developed a comprehensive Attendance Management System using PHP and Laravel, including features for attendance management and event handling.",
    features: [
      "Attendance tracking for students and staff",
      "Event scheduling and management",
      "Role-based access control for admin, teacher, and student roles",
      "Responsive UI with Laravel Blade templates",
      "Detailed attendance analytics and reporting",
    ],
    image: "/img/projects/attendance2.png",
    images: ["/img/projects/attendance1.png", "/img/projects/attendance2.png", "/img/projects/attendance3.png", "/img/projects/attendance4.png", "/img/projects/attendance5.png",],
  },
  {
    name: "Full-Stack Expense Tracker",
    technologies: "React.js, Node.js, Express.js, MongoDB",
    developmentTime: "15 days",
    teamSize: "2 developers",
    useCases: "Personal finance tracking, Expense categorization",
    description:
      "Developed a full-stack Expense Tracker using the MERN stack. The application allows users to securely log in, add expenses, categorize them, and view detailed data visualizations to track spending patterns.",
    features: [
      "Secure user authentication (JWT-based)",
      "CRUD operations for managing expenses",
      "Interactive charts for data visualization",
      "Mobile-friendly responsive UI",
      "RESTful API implementation",
    ],
    image: "/img/projects/expense2.png",
    images: ["/img/projects/expense1.png", "/img/projects/expense2.png", "/img/projects/expense3.png"],
  },
  {
    name: "IoT-Based Pill Dispensing Machine",
    technologies: "IoT, Arduino, Node.js",
    developmentTime: "1 months",
    teamSize: "4 developers",
    useCases: "Healthcare, Medication adherence",
    description:
      "Designed and implemented a smart pill dispensing machine integrated with IoT principles, resulting in winning first place in its category.",
    features: [
      "Automated pill dispensing with customizable schedules",
      "IoT integration for remote monitoring and alerts",
      "Compact hardware design with Arduino and sensors",
      "Secure communication with the cloud",
      "User-friendly interface for caregivers and patients",
    ],
    image: "/img/projects/pillDispenser1.png",
    images: ["/img/projects/pillDispenser1.png", "/img/projects/pillDispenser2.png"],
  },
  {
    name: "AWS Bucket and Instance Info Retrieval",
    technologies: "AWS Cognito, React.js, Node.js",
    developmentTime: "10 days",
    teamSize: "1 developer",
    useCases: "Cloud management, Secure AWS resource access",
    description:
      "Created a web application for fetching AWS bucket and instance information without IAM user credentials using AWS Cognito for secure authentication.",
    features: [
      "Secure AWS Cognito-based user authentication",
      "Fetch and display AWS S3 bucket details",
      "List and manage EC2 instance information",
      "Serverless backend integration",
      "Modern UI with React.js for seamless interaction",
    ],
    image: "/img/projects/awsInfo2.png",
    images: ["/img/projects/awsInfo1.png", "/img/projects/awsInfo2.png", "/img/projects/awsInfo3.png", "/img/projects/awsInfo3.png"],
  },
  {
    name: "Collaborative-TaskMaster Application",
    technologies: "React.js, Node.js, Express.js, MongoDB, Socket.IO",
    developmentTime: "3 days",
    teamSize: "1 developers",
    useCases: "Personal to-do lists, Task collaboration",
    description:
      "A Collaborative-TaskMaster Application built using the MERN stack. The app allows users to manage personal to-do lists, share tasks with others for collaboration, and receive real-time updates.",
    features: [
      "JWT-based authentication and user management",
      "Real-time task sharing with collaboration via Socket.IO",
      "CRUD operations for task management",
      "Filter tasks by status (Pending, Completed)",
      "Responsive design with TailwindCSS",
    ],
    image: "/img/projects/taskMaster1.png",
    images: ["/img/projects/taskMaster1.png", "/img/projects/taskMaster2.png", "/img/projects/taskMaster3.png", "/img/projects/taskMaster4.png"],
  },
  {
    name: "HRMS Portal",
    technologies: "React.js, TailwindCSS, Node.js, Express.js, PostgreSQL, Google Authentication, JWT",
    developmentTime: "1 months",
    teamSize: "1 developers",
    useCases: "HR management, Employee attendance, Leave management",
    description:
      "An HRMS portal developed with React, Node, and PostgreSQL, integrated with Google Authentication and JWT for secure access. It handles employee attendance, leave management, and event control.",
    features: [
      "Google-based authentication with JWT token",
      "Punctuality tracking with integrated punch-in/out machine",
      "Leave management with approval workflow",
      "Event control for holidays and special dates",
      "Responsive UI with TailwindCSS",
    ],
    image: "/img/projects/hrmsPortal1.png",
    images: ["/img/projects/hrmsPortal1.png", "/img/projects/hrmsPortal2.png", "/img/projects/hrmsPortal3.png", "/img/projects/hrmsPortal4.png", "/img/projects/hrmsPortal5.png"],
  },
];


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description"); // Tabs: description, features, images

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setActiveTab("description");
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg p-6 md:p-8 rounded-xl w-full transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4 md:gap-6">
        <h2 className="text-2xl md:text-3xl font-bold border-gradient-to-r from-orange-500 to-yellow-500 pb-2">
          Projects Showcase
        </h2>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 w-4/6"></div>
      </div>

      {/* Projects List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[58vh] overflow-scroll no-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project)}
            className="cursor-pointer bg-gradient-to-tr from-orange-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={project.image}
              alt={`${project.name} thumbnail`}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {project.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.technologies}
            </p>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          {/* Main Modal */}
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[90%] overflow-auto no-scrollbar">
            <button
              onClick={closeModal}
              className="text-gray-500 dark:text-gray-300 hover:text-red-500 float-right text-xl"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              {selectedProject.name}
            </h3>
            <p className="mb-2 text-sm text-gray-800 dark:text-gray-200">
              <strong>Technologies:</strong> {selectedProject.technologies}
            </p>
            <p className="mb-2 text-sm text-gray-800 dark:text-gray-200">
              <strong>Development Time:</strong> {selectedProject.developmentTime}
            </p>
            <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
              <strong>Team Size:</strong> {selectedProject.teamSize}
            </p>
            <p className="mb-4 text-sm text-gray-800 dark:text-gray-200">
              <strong>Use Cases:</strong> {selectedProject.useCases}
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-3 py-1 sm:px-4 sm:py-2 font-bold text-sm sm:text-base ${activeTab === "description"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  } rounded-md`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-3 py-1 sm:px-4 sm:py-2 font-bold text-sm sm:text-base ${activeTab === "features"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  } rounded-md`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("images")}
                className={`px-3 py-1 sm:px-4 sm:py-2 font-bold text-sm sm:text-base ${activeTab === "images"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  } rounded-md`}
              >
                Images
              </button>
            </div>

            {/* Tab Content */}
            <div className="border-t pt-4">
              {activeTab === "description" && <p>{selectedProject.description}</p>}
              {activeTab === "features" && (
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              {activeTab === "images" && (
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${selectedProject.name} screenshot ${idx + 1}`}
                      className="w-full h-40 object-cover rounded-md cursor-pointer"
                      onClick={() => setPreviewImage(image)} // Set the image for preview
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Image Preview */}
          {previewImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-60">
              <button
                onClick={() => setPreviewImage(null)} // Close the preview
                className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
              >
                &times;
              </button>
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-full rounded-md"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
