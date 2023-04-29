import React from 'react'
import Image from 'next/image'

const UserInfo: React.FC = () => {
    const userName = 'John Doe'
    return (
        <div className="mb-6">
            {/* <Image
        src="/docs/images/people/profile-picture-5.jpg"
        alt={userName}
        width="384"
        height="512"
        className="w-24 h-24 mx-auto mb-2 rounded-full"
      /> */}
            <div className="relative w-10 h-10 mx-auto mb-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-center">{userName}</h3>
        </div>
    )
}

export default UserInfo
