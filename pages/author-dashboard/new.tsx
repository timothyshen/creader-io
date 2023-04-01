<div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white w-64 px-4 py-6 absolute inset-y-0 left-0`}
      >
       
        <nav className="mt-8">
          <a
            href="#"
            className="block py-2.5 px-4 bg-gray-200 text-blue-900 rounded"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 mt-2 text-gray-600 hover:bg-gray-200 hover:text-blue-900 hover:rounded"
          >
            My Works
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 mt-2 text-gray-600 hover:bg-gray-200 hover:text-blue-900 hover:rounded"
          >
            Add New Work
          </a>
          <a
            href="#"
            className="block py-2.5 px-4 mt-2 text-gray-600 hover:bg-gray-200 hover:text-blue-900 hover:rounded"
          >
            Edit Work
          </a>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow py-4 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: 20, color: "black" }}
              />
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 bg-gray-100 p-6">
          {/* Add your main content here */}
        </main>
      </div>
    </div>