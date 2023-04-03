// src/components/Menu.tsx

import React from "react";
import NextLink from "next/link";

const MenuItem: React.FC = () => {
  const data = [];
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Menu</h3>
      <ul className="space-y-2">
        {/* Add menu items here */}
        <li>
          <NextLink href="/profile/dashboard" className="hover:text-blue-400">
            Item 1
          </NextLink>
        </li>
        <li>
          <NextLink href="#" className="hover:text-blue-400">
            Item 2
          </NextLink>
        </li>
        <li>
          <NextLink href="#" className="hover:text-blue-400">
            Item 3
          </NextLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
