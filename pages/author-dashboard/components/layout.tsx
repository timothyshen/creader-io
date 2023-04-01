import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Header: React.FC = () => {
  return (
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
  );
};

const SidePanel: React.FC = () => {
  return (
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
            <Link className="text-blue-500" href="/author-dashboard/earnings">
              Earnings
            </Link>
          </li>
          <li>
            <Link className="text-blue-500" href="/author-dashboard/settings">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
