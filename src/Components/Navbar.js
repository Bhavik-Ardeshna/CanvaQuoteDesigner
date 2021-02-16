import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav class="bg-blue-300">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 text-black flex items-center">
                                <h1>OSM Quote Designer</h1>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <a href="#" class="text-black-300 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Team</a>
                                    <a href="#" class="text-black-300 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                    <a href="#" class="text-black-300 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </nav>



        </>
    )
}
