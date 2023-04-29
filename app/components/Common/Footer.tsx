import React, { useState } from 'react'
import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
    const [loggedIn, setLoggIn] = useState<Boolean>(true)

    const handleLoggIn = () => {
        setLoggIn(!loggedIn)
    }

    return (
        <footer className="bg-blue-500 text-white py-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                        <h3 className="text-xl font-bold mb-4">Platform</h3>
                        <ul>
                            <li className="mb-2">
                                <NextLink href="/" className="text-sm hover:text-gray-300">
                                    Home
                                </NextLink>
                            </li>
                            <li className="mb-2">
                                <NextLink href="/aboutus" className="text-sm hover:text-gray-300">
                                    About Us
                                </NextLink>
                            </li>
                            <li className="mb-2">
                                <NextLink href="/contactus" className="text-sm hover:text-gray-300">
                                    Contact Us
                                </NextLink>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                        <h3 className="text-xl font-bold mb-4">Community</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-sm hover:text-gray-300">
                                    Blog
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-sm hover:text-gray-300">
                                    Forum
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-sm hover:text-gray-300">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                        <h3 className="text-xl font-bold mb-4">Legal</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-sm hover:text-gray-300">
                                    Terms of Service
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-sm hover:text-gray-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-sm hover:text-gray-300">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <p className="mb-4">Follow us on social media:</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-xl hover:text-gray-300">
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 20, color: 'white' }} />
                            </a>
                            <a href="#" className="text-xl hover:text-gray-300">
                                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 20, color: 'white' }} />
                            </a>
                            <a href="#" className="text-xl hover:text-gray-300">
                                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 20, color: 'white' }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Creader.io All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
