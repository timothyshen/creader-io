import React, { useState } from "react";

const SettingsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [rows, setRows] = useState(4);

  const handleRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setRows(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the user's profile settings here
  };
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-3">
            <nav className="bg-gray-100 p-4 rounded">
              <ul className="space-y-4">
                <li>
                  <a className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded">
                    Profile Settings
                  </a>
                </li>
                <li>
                  <a className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded">
                    Account Security
                  </a>
                </li>
                <li>
                  <a className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded">
                    Notification Preferences
                  </a>
                </li>
                <li>
                  <a className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded">
                    Payment Settings
                  </a>
                </li>
                <li>
                  <a className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded">
                    Privacy Settings
                  </a>
                </li>
                <li>
                  <a className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded">
                    Content Settings
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <section className="col-span-9">
            {/* Main content goes here */}
            <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bio" className="block mb-2">
                  Bio
                </label>
                  <textarea
                    id="bio"
                    className="w-full border border-gray-300 p-2 rounded"
                    rows={rows}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                <label> 
                  Rows:
                  <input type="number" value={rows} onChange={handleRowsChange} />
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
