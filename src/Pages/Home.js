import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '../Image/groot.jpeg';
export const Home = () => {
    return (
        <>
            <div class="my-5 mx-10 px-5  w-96 bg-black ">

                <article class="overflow-hidden rounded-lg shadow-lg">

                    <img alt="Placeholder" class="block h-96 w-96" src={image1} />


                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-white" href="#">
                                Today is a wonderful day to have a wonderful day!
                            </a>
                        </h1>
                    </header>

                    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <a class="flex items-center no-underline hover:underline text-white" href="#">
                            <p class="ml-2 text-sm">
                                J. K. Rowling
                            </p>
                        </a>
                    </footer>
                    <Link to='/editor' className='py-1 px-2 bg-yellow-500 rounded-full text-1xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
                        <h1 className='text-1xl font-black ml-20'>
                            Create Quote
                            </h1>
                    </Link>

                </article>

            </div>
        </>
    )
}
