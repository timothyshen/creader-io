// pages/contact.tsx

import React from "react";
import Head from "next/head";
import GenericLayout from "@/app/layout/GenericLayout";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here.
  };

  return (
    <>
      <Head>
        <title>Contact Us - Decentralized Publishing Platform</title>
        <meta
          name="description"
          content="Get in touch with the team behind our decentralized publishing platform. We're here to help and answer any questions you may have."
        />
      </Head>
      <GenericLayout>
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            If you have any questions, concerns, or feedback about our
            decentralized publishing platform, please feel free to reach outto
            us using the contact form below. We&apos;ll get back to you as soon
            as possible.
          </p>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </GenericLayout>
    </>
  );
};

export default ContactUs;
