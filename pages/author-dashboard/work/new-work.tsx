import React, { useState } from 'react'
import Link from 'next/link'
import AuthorCentreLayout from '@/app/layout/authorCentreLayout'
interface Work {
    title: string
    description: string
    content: string
}

const AddWork: React.FC = () => {
    const [work, setWork] = useState<Work>({
        title: '',
        description: '',
        content: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add the new work using your smart contracts or backend service
    }

    return (
        <>
            <AuthorCentreLayout>
                <section className="col-span-9">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Add New Work</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2">Title</label>
                                <input
                                    className="border w-full p-2"
                                    type="text"
                                    value={work.title}
                                    onChange={e => setWork({ ...work, title: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Description</label>
                                <textarea
                                    className="border w-full p-2"
                                    value={work.description}
                                    onChange={e => setWork({ ...work, description: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Content</label>
                                <textarea
                                    className="border w-full p-2"
                                    value={work.content}
                                    onChange={e => setWork({ ...work, content: e.target.value })}
                                ></textarea>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2" type="submit">
                                Add Work
                            </button>
                        </form>
                    </div>
                </section>
            </AuthorCentreLayout>
        </>
    )
}

export default AddWork
