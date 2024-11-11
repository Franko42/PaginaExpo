import React from "react";
import './App.css'; // or './index.css', depending on where the directives are


function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center p-4">
      {/* Top Title */}
      <header className="text-4xl font-bold text-center text-blue-300 my-8">
        Big Title at the Top
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row w-full max-w-4xl gap-8">
        {/* Left Section with List */}
        <section className="bg-white p-6 shadow-md rounded-md lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">List of Things</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <div className="mt-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
        </section>

        {/* Right Section with Text and Subsection */}
        <section className="bg-white p-6 shadow-md rounded-md lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Title for Right Section</h2>
          <p className="mb-4">
            This is a paragraph with some placeholder text. It provides an
            introduction or information related to the title above.
          </p>
          <p className="mb-4">
            Another paragraph of placeholder text. This could be additional
            context, description, or any other type of text you want to include.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Another Title Below Right Section
          </h3>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4 bg-blue-600 text-white">
        Footer Content Here
      </footer>
    </div>
  );
}

export default App;
