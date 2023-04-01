import React, { useState } from "react";
import Link from "next/link";
interface Work {
  title: string;
  description: string;
  content: string;
}

const AddWork: React.FC = () => {
  const [work, setWork] = useState<Work>({
    title: "",
    description: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add the new work using your smart contracts or backend service
  };

  return (
    <>
      <header className="bg-blue-500 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">
            Decentralized Publishing
          </h1>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white" href="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/logout">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-3">
            <nav className="bg-gray-100 p-4 rounded">
              <ul className="space-y-4">
                <li>
                  <Link className="text-blue-500" href="/author-dashboard/work">
                    My Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500"
                    href="/author-dashboard/subscribers"
                  >
                    Subscriber
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500"
                    href="/author-dashboard/earnings"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500"
                    href="/author-dashboard/settings"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          <section className="col-span-9">
            <div>
              <h2 className="text-2xl font-bold mb-4">Add New Work</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">Title</label>
                  <input
                    className="border w-full p-2"
                    type="text"
                    value={work.title}
                    onChange={(e) =>
                      setWork({ ...work, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Description</label>
                  <textarea
                    className="border w-full p-2"
                    value={work.description}
                    onChange={(e) =>
                      setWork({ ...work, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Content</label>
                  <textarea
                    className="border w-full p-2"
                    value={work.content}
                    onChange={(e) =>
                      setWork({ ...work, content: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2"
                  type="submit"
                >
                  Add Work
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AddWork;
