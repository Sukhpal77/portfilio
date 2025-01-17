import React from "react";

function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h1>
        <div className="bg-orange-500 h-1 w-16 mt-2"></div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Phone Section */}
        <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-start">
          <div className="text-orange-500 text-xl mb-2">
            <i className="fas fa-phone-alt"></i> {/* FontAwesome icon */}
          </div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Phone:</p>
          <p className="text-gray-600 dark:text-gray-400">+254723909353</p>
          <p className="text-gray-600 dark:text-gray-400">+254738509151</p>
        </div>

        {/* Email Section */}
        <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-start">
          <div className="text-blue-500 text-xl mb-2">
            <i className="fas fa-envelope"></i> {/* FontAwesome icon */}
          </div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">Email:</p>
          <p className="text-gray-600 dark:text-gray-400">
            beatricewambuimbugua@gmail.com
          </p>
        </div>
      </div>

      {/* Additional Static Information */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Additional Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Address:</strong> 1234 Tech Street, Nairobi, Kenya
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Opening Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Social Media:</strong>
        </p>
        <ul className="list-none flex gap-4">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
