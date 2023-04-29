import React from 'react'
import Link from 'next/link'
import Button from '@/app/components/Common/Button'
import AuthorCentreLayout from '@/app/layout/authorCentreLayout'

const MyWorks = () => {
    // Replace this example data with the actual data fetched from your smart contracts or backend service
    const works = [
        { id: 1, title: 'Work 1', description: 'Description for work 1' },
        { id: 2, title: 'Work 2', description: 'Description for work 2' },
        { id: 3, title: 'Work 3', description: 'Description for work 3' },
    ]

    return (
        <>
            <AuthorCentreLayout>
                <section className="col-span-9">
                    <h2 className="text-2xl font-bold mb-4">My Works</h2>
                    <Button className="mb-4">
                        <Link href="/author-dashboard/work/new-work">Create New Work</Link>
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map(work => (
                            <div key={work.id} className="bg-gray-100 p-4 rounded">
                                <h3 className="text-lg font-bold mb-2">{work.title}</h3>
                                <p>{work.description}</p>
                                <div className="mt-4 flex space-x-4">
                                    <Link className="text-blue-500" href={`/author-dashboard/work/${work.id}`}>
                                        View
                                    </Link>
                                    <Link
                                        className="text-blue-500"
                                        href={`/author-dashboard/work/edit-work/${work.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button className="text-red-500">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </AuthorCentreLayout>
        </>
    )
}

export default MyWorks
