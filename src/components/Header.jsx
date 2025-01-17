function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center p-6 ">
    {/* Logo */}
    <div className="flex items-center pl-5">
      
      <h1 className="text-3xl font-bold ">     
        <span className="font-dancingScript text-black dark:text-white pr-2">Sukhpal</span>
        <span className="font-dancingScript text-orange-500">Singh</span>
      </h1>
    </div>


    {/* Dark Mode Toggle */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {darkMode ? (
        <i className="fas fa-sun text-yellow-400"></i>
      ) : (
        <i className="fas fa-moon text-gray-600"></i>
      )}
    </button>
  </header>
  );
}

export default Header;
