import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Work {
  id: string;
  title: string;
  description: string;
  content: string;
}

const WorkDetails: React.FC = () => {
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
            <div>
              <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
              <p className="mb-4">{work.description}</p>
              <h3 className="text-xl font-bold mb-2">Content</h3>
              <div className="prose">{work.content}</div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default WorkDetails;
