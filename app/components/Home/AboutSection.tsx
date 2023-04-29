import React from 'react'

const AboutSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-8">
            <div className="bg-gray-100 p-8 rounded">
                <h2 className="text-2xl font-bold mb-4">For Authors</h2>
                <p>
                    Create, manage, and protect your literary works using blockchain technology. Get rewarded for your
                    creative efforts and maintain full control over your work.
                </p>
            </div>
            <div className="bg-gray-100 p-8 rounded">
                <h2 className="text-2xl font-bold mb-4">For Readers</h2>
                <p>
                    Discover unique and engaging content created by talented authors. Support your favorite creators and
                    enjoy a seamless reading experience on our platform.
                </p>
            </div>
        </div>
    )
}

export default AboutSection
