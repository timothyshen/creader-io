import React from "react";
import Head from "next/head";
import Header from "../components/Common/Header";
import { LayoutProps } from "../interface/LayouProps";
import SidePanel from "../components/AuthorCentre/SidePanel";
import FooterAuthor from "../components/AuthorCentre/FooterAuthor";

const AuthorCentreLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Author Dashboard - Decentralized Publishing Platform</title>
        <meta
          name="description"
          content="Manage your works, track your earnings, and connect with your readers on our decentralized publishing platform."
        />
      </Head>
      <Header />
      <main className="container mx-auto my-8 min-h-screen">
        <div className="grid grid-cols-12 gap-8">
          <SidePanel />
          <section className="col-span-9">{children}</section>
        </div>
      </main>
      <FooterAuthor />
    </>
  );
};

export default AuthorCentreLayout;
