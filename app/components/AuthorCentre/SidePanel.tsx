import React from 'react'
import NextLink from 'next/link'
import Link from 'next/link'

const SidePanel: React.FC = () => {
    return (
        <aside className="col-span-3">
            <nav className="bg-gray-100 p-4 rounded">
                <ul className="space-y-4">
                    <li>
                        <Link
                            className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                            href="/author-dashboard"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <NextLink
                            className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                            href="/author-dashboard/work"
                        >
                            My Works
                        </NextLink>
                    </li>
                    <li>
                        <NextLink
                            className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                            href="/author-dashboard/subscribers"
                        >
                            My Copyright
                        </NextLink>
                    </li>
                    <li>
                        <NextLink
                            className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                            href="/author-dashboard/subscribers"
                        >
                            Subscriber
                        </NextLink>
                    </li>
                    <li>
                        <NextLink
                            className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                            href="/author-dashboard/earnings"
                        >
                            Earnings
                        </NextLink>
                    </li>
                    <li>
                        <NextLink
                            className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                            href="/author-dashboard/settings"
                        >
                            Settings
                        </NextLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default SidePanel
