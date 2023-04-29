import React from 'react'
import Image from 'next/image'
import GenericLayout from '@/app/layout/GenericLayout'

const BrowseDiscover: React.FC = () => {
    return (
        <GenericLayout>
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold mb-4 text-blue-700">Discover Novels</h1>
                <div className="mb-8">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search novels"
                    />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl mb-4">Categories:</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Mystery</button>
                        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Sci-fi</button>
                        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Fantasy</button>
                        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Romance</button>
                        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Adventure</button>
                        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Horror</button>
                        {/* Add more categories as needed */}
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <div className="mb-8 flex justify-between">
                            <h2 className="text-2xl">Novels:</h2>
                            <div>
                                <label htmlFor="sort" className="mr-2">
                                    Sort by:
                                </label>
                                <select
                                    id="sort"
                                    className="border-2 border-gray-300 bg-white h-8 pl-2 pr-6 rounded-lg text-sm focus:outline-none"
                                >
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="popular">Most Popular</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {/* Replace this part with dynamic content loaded from your backend */}
                            {/* Loop through the novels and create a card for each */}
                            <div className="bg-white border border-gray-200 p-4 rounded">
                                <Image
                                    className="w-full h-48 object-cover mb-4 rounded"
                                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                    alt="Novel Cover"
                                    width={400}
                                    height={300}
                                />
                                <h3 className="text-xl font-bold mb-2">Novel Title</h3>
                                <p className="text-blue-700">Author Name</p>
                            </div>

                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <Image
                                        className="rounded-t-lg"
                                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                        alt=""
                                        width={400}
                                        height={300}
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            className technology acquisitions 2021
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                        reverse chronological order.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                        <svg
                                            aria-hidden="true"
                                            className="w-4 h-4 ml-2 -mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Add more cards for each novel */}
                        </div>
                    </div>
                    <div className="w-1/3 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Latest Customers
                            </h5>
                            <a
                                href="#"
                                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael image"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Neil Sims
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $320
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael image"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Bonnie Green
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael image"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Michael Gough
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael image"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Lana Byrd
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </GenericLayout>
    )
}

export default BrowseDiscover
