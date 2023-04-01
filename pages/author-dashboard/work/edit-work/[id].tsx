import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Work {
  id: string;
  title: string;
  description: string;
  content: string;
}

const EditWork: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [work, setWork] = useState<Work | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the work data using the work ID from your smart contracts or backend service
      // Replace the example data below with the actual data
      const fetchedWork: Work = {
        id: id as string,
        title: `Work ${id}`,
        description: `Description for work ${id}`,
        content: `Content for work ${id}`,
      };
      setWork(fetchedWork);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the work data using your smart contracts or backend service
  };

  if (!work) {
    return <div>Loading...</div>;
  }

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
            <h2 className="text-2xl font-bold mb-4">Edit Work</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Title</label>
                <input
                  className="border w-full p-2"
                  type="text"
                  value={work.title}
                  onChange={(e) => setWork({ ...work, title: e.target.value })}
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
                Save Changes
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default EditWork;
