// src/components/Menu.tsx

import React from "react";

const MenuItem: React.FC = () => {
  const data = [];
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Menu</h3>
      <ul className="space-y-2">
        {/* Add menu items here */}
        <li>
          <a href="#" className="hover:text-blue-400">
            Item 1
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            Item 2
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            Item 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
