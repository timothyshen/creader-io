import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const GenericLayout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default GenericLayout;
