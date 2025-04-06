import React from 'react';
import '../app/globals.css'; // Import custom CSS for animations

const WireframeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white"> {/* Applied dark theme */}
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center p-4 border-b-4 border-blue-800">
        🧢 Himanshu D. Ghode 
      </header>

      {/* Main Content Section */}
      <main className="bg-gray-800 flex-1 p-6"> {/* Dark theme background */}
        <h1 className="text-2xl font-semibold text-gray-200 mb-6">📄 INDI TECHNOLOGY</h1> {/* Adjusted text color */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Vibrant Card 1 */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-2xl border border-gray-200 hover:shadow-3xl transition-transform transform hover:scale-105 active:scale-95 flex flex-col justify-center items-center h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10 blur-lg rounded-lg"></div>
            <h2 className="text-xl font-bold text-white mb-2 z-10">Div 1</h2>
            <p className="text-white text-center z-10"></p>
            {/* Random Moving Text Animation */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="random-move text-white text-lg font-bold cursor-pointer">
                Indi.technology
              </div>
            </div>
          </div>
          {/* Vibrant Card 2 */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-2xl border border-gray-200 hover:shadow-3xl transition-transform transform hover:scale-105 active:scale-95 flex flex-col justify-center items-center h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10 blur-lg rounded-lg"></div>
            <h2 className="text-xl font-bold text-white mb-2 z-10">Div 2</h2>
            <p className="text-white text-center z-10"></p>
            {/* Random Moving Text Animation */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="random-move text-white text-lg font-bold cursor-pointer">
                Indi.technology
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center p-4 border-t-4 border-gray-600">
        🧦 Footer
      </footer>
    </div>
  );
};

export default WireframeLayout;
