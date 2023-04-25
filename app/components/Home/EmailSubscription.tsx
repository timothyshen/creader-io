import React from "react";

const EmailSubscription: React.FC = () => {
  return (
    <div className="text-center py-10 mb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
          Subscribe to our newsletter.
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-500">
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
          velit quis. Duis tempor incididunt dolore.
        </p>
        <div className="mt-6  mx-auto">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-1/3 flex-auto mr-5 rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
