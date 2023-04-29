import React from 'react'

const Testimonials: React.FC = () => {
    return (
        <div className="bg-gray-100 py-16 px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded">
                    <p className="italic mb-4">
                        &quot;Creader has revolutionized the way I publish and protect my work. I have full control over
                        my content and receive fair compensation.&quot;
                    </p>
                    <p className="font-bold">- Author Name</p>
                </div>
                <div className="p-8 bg-white rounded">
                    <p className="italic mb-4">
                        &quot;I love discovering new authors and supporting their work on Creader. The platform offers a
                        great reading experience and a strong sense of community.&quot;
                    </p>
                    <p className="font-bold">- Reader Name</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
