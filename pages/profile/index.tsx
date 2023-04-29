// src/pages/profile.tsx

import React from 'react'
import MenuItem from './components/sidePanel/MenuItem'
import UserInfo from './components/sidePanel/userInfo'

const Profile: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            {/* Side Panel */}
            <div className="w-64 p-4 bg-gray-800 text-white">
                {/* Side panel content */}
                <UserInfo />
                <MenuItem />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                {/* Navigation */}
                <nav className="p-4 bg-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Navigation</h2>
                    {/* Navigation content */}
                </nav>

                {/* Content Area */}
                <div className="p-4 grid grid-cols-2 gap-4">
                    {/* Content Grid Items */}
                    <div className="bg-white rounded shadow-md p-4">Item 1</div>
                    <div className="bg-white rounded shadow-md p-4">Item 2</div>
                    <div className="bg-white rounded shadow-md p-4">Item 3</div>
                    <div className="bg-white rounded shadow-md p-4">Item 4</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
