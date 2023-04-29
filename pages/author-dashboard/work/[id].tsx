import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthorCentreLayout from '@/app/layout/authorCentreLayout'

interface Work {
    id: string
    title: string
    description: string
    content: string
}

const WorkDetails: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const [work, setWork] = useState<Work | null>(null)

    useEffect(() => {
        if (id) {
            // Fetch the work data using the work ID from your smart contracts or backend service
            // Replace the example data below with the actual data
            const fetchedWork: Work = {
                id: id as string,
                title: `Work ${id}`,
                description: `Description for work ${id}`,
                content: `Content for work ${id}`,
            }
            setWork(fetchedWork)
        }
    }, [id])

    if (!work) {
        return <div>Loading...</div>
    }

    return (
        <>
            <AuthorCentreLayout>
                <section className="col-span-9">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
                        <p className="mb-4">{work.description}</p>
                        <h3 className="text-xl font-bold mb-2">Content</h3>
                        <div className="prose">{work.content}</div>
                    </div>
                </section>
            </AuthorCentreLayout>
        </>
    )
}

export default WorkDetails
