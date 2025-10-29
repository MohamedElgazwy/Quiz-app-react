import React from "react";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-gray-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">QuizMaster</div>
            <p className="text-gray-400 text-sm">
              Test your knowledge, challenge your mind
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} QuizMaster App. Built with React &
            Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
