import React, { useState } from 'react';
import '../Static/css/Editor.css';

import { SketchPicker } from 'react-color';
import Canvas from '../Components/Canvas';


export const Editor = (props) => {
    const [toggleS, setToggleS] = useState(true);
    const [toggleC, setToggleC] = useState(false);
    const [toggleT, setToggleT] = useState(false);
    const [color, setColor] = useState('#fff');
    const [fontSize, setFontSize] = useState(45);
    const [fontFamily, setFontFamily] = useState("Monaco");
    const [image, setImage] = useState('https://source.unsplash.com/random/1280x720');

    const toogleSearch = () => {
        setToggleS(true);
        setToggleT(false);
        setToggleC(false);

    }
    const toogleText = () => {
        setToggleT(true);
        setToggleS(false);
        setToggleC(false);

    }
    const toogleColor = () => {
        setToggleC(true);
        setToggleT(false);
        setToggleS(false);

    }
    const handleChange = (event) => {
        setFontSize(event.target.value);
        console.log(fontSize)
    };
    const handleFontFamilyChange = (event) => {
        setFontFamily(event.target.value);
        console.log(fontFamily)
    };
    return (

        <>
            <div className="flex">
                <div className="z-50">

                    <div className="sidebar">

                        <ul className="sidebar-nav">
                            <li>
                                <a onClick={toogleSearch} href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#" onClick={toogleText}><i class="fa fa-font px-2" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#" onClick={toogleColor}><i class="fa fa-paint-brush px-2" aria-hidden="true"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="z-40">
                    <div className="bg-black stool px-4 py-4 h-screen overflow-y-auto overflow-x-hidden">

                        {
                            toggleS && (
                                <>
                                    <div className="container mx-8 px-4 ">
                                        <div className="px-4">
                                            <div class="shadow flex">
                                                <input class="w-full rounded p-2" type="text" placeholder="Search..." />
                                                <button class="bg-white w-auto flex justify-end items-center text-black-500 p-2 hover:text-blue-400">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <section className="py-8 px-4">
                                            <div className="flex flex-wrap flex-col">

                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
                                                <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>

                                            </div>
                                        </section>
                                    </div>

                                </>
                            )
                        }
                        {
                            toggleC && (

                                <div className="container mx-16 px-16 ">

                                    <SketchPicker color={color} onChangeComplete={updateColor => setColor(updateColor.hex)} />
                                </div>
                            )
                        }
                        {
                            toggleT && (
                                <>
                                    <div className="container mx-9 px-9 ">

                                        <div class="pt-5">
                                            <strong>
                                                <select id="FontSize" onChange={handleChange} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                    <option aria-label="None" value="" >Font Size</option>
                                                    <option value={10}>10</option>
                                                    <option value={15}>15</option>
                                                    <option value={25}>25</option>
                                                    <option value={30}>30</option>
                                                    <option value={35}>35</option>
                                                    <option value={40}>40</option>
                                                    <option value={45}>45</option>
                                                    <option value={50}>50</option>
                                                    <option value={55}>55</option>
                                                    <option value={60}>60</option>
                                                    <option value={70}>70</option>
                                                    <option value={80}>80</option>
                                                    <option value={90}>90</option>
                                                    <option value={100}>100</option>
                                                    <option value={120}>120</option>
                                                </select>
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="container mx-9 px-9 ">

                                        <div class="pt-5">

                                            <strong>
                                                <select id="FontSize" onChange={handleFontFamilyChange} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                    <option aria-label="None" value="" >Font Family</option>
                                                    <option value={"Lato"}>Lato</option>
                                                    <option value={"Candara"}>Candara</option>
                                                    <option value={"Geneva"}>Geneva</option>
                                                    <option value={"Optima"}>Optima</option>
                                                    <option value={"Times New Roman"}>Times New Roman</option>
                                                    <option value={"Cambria"}>Cambria</option>
                                                    <option value={"Georgia"}>Georgia</option>
                                                    <option value={"Monaco"}>Monaco</option>
                                                    <option value={"Comic Sans MS"}>Comic Sans MS</option>
                                                    <option value={"Impact"}>Impact</option>
                                                    <option value={"Andale Mono"}>Andale Mono</option>
                                                    <option value={"Courier New"}>Courier New</option>
                                                </select>
                                            </strong>
                                        </div>
                                    </div >
                                </>
                            )
                        }

                    </div >
                </div >
                <div className="ml-10 z-0 overflow-x-hidden">


                    <nav class="bg-gray-600">
                        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div class="relative flex items-center justify-between h-16">

                                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                                    <div class="hidden sm:block sm:ml-6">
                                        <div class="flex space-x-4">

                                            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                                </div>
                            </div>
                        </div>


                    </nav>




                    <Canvas color={color} fontFamily={fontFamily} image={image} thought={props.thought} author={props.author} fontSize={fontSize} />

                </div >
            </div >
        </>


    )
}

