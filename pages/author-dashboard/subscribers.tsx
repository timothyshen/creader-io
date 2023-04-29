import React from 'react'
import NextLink from 'next/link'
import AuthorCentreLayout from '@/app/layout/authorCentreLayout'

const SubscriberManagementPage = () => {
    const subscribers = [
        {
            id: 1,
            name: 'John Doe',
            subscriptionDate: '2023-03-15',
        },
        {
            id: 2,
            name: 'Jane Smith',
            subscriptionDate: '2023-02-28',
        },
        // Add more mock subscribers here
    ]

    return (
        <>
            <AuthorCentreLayout>
                <section className="col-span-9">
                    <h1 className="text-2xl font-bold mb-6">Subscribers</h1>
                    <div className="grid grid-cols-12 gap-8">
                        <section className="col-span-9">
                            {/* Main content goes here */}
                            <table className="w-full text-left table-auto border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2">Name</th>
                                        <th className="border px-4 py-2">Subscription Date</th>
                                        <th className="border px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscribers.map(subscriber => (
                                        <tr key={subscriber.id}>
                                            <td className="border px-4 py-2">{subscriber.name}</td>
                                            <td className="border px-4 py-2">{subscriber.subscriptionDate}</td>
                                            <td className="border px-4 py-2">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                                    View Profile
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </section>
            </AuthorCentreLayout>
        </>
    )
}

export default SubscriberManagementPage
