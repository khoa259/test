import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-800 shadow py-2 rounded-b-lg ">
                <div className="w-full mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <Link className="flex-shrink-0" href="/">
                                <img className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/1405/1405110.png" alt="Workflow" />
                            </Link>
                            <p className='px-3 text-red-600 text-lg '>Love</p>
                        </div>
                        {/* <div className='flex justify-between right:0 w-2/6'>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt='' />
                                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                            </div>
                        </div> */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <div className="ml-3 relative">
                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full" src="https://i.imgur.com/22v1eyd.jpg" alt='' />
                                    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header