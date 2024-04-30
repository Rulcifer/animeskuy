import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime1 from '../anime/img/bx154587-gHSraOSa0nBG.jpg';
import anime2 from '../anime/img/bx21-YCDoj1EkAxFn.jpg';
import anime3 from '../anime/img/bx16498-73IhOXpJZiMF.jpg';
import anime4 from '../anime/img/bx21087-2OkAdgfnQown.jpg';
import anime5 from '../anime/img/bx101922-WBsBl0ClmgYL.jpg';
import anime6 from '../anime/img/bx113415-bbBWj4pEFseh.jpg';
import anime7 from '../anime/img/bx1535-4r88a1tsBEIz.jpg';

const Anime = () => {
    return (
        <div className="bg-stone-900">
    <div className="grid grid-cols-4 gap-5 items-center">
        <div className="col-span-4 flex justify-center mb-5">
            <button className="rounded-full bg-cyan-500 px-4 py-2">TRENDING</button>
            <button className="rounded-full bg-cyan-500 px-4 py-2 ml-5">POPULAR</button>
            <button className="rounded-full bg-cyan-500 px-4 py-2 ml-5">TOP RATED</button>
        </div>
        <div className="m-5 h-[220px] w-[160px] rounded">
            <img src={anime1} alt="" className="h-[220px] w-[160px] rounded" />
        </div>
        <div className="bg-gray-900 m-5 h-[220px] w-[160px] rounded">
            <img src={anime2} alt="" className="h-[220px] w-[160px] rounded" />
        </div>
        <div className="bg-gray-900 m-5 h-[220px] w-[160px] rounded">
            <img src={anime3} alt="" className="h-[220px] w-[160px] rounded" />
        </div>
        <div className="bg-gray-900 m-5 h-[220px] w-[160px] rounded">
            <img src={anime4} alt="" className="h-[220px] w-[160px] rounded" />
        </div>
    </div>

            {/* <div className="flex-1 flex flex-col"> */}
            <div className="grid grid-cols">
                <div className="m-5 mb-0.5 h-[96px] w-[380px] rounded bg-stone-800">
                    <div className="flex items-center">
                    <img src={anime1} alt="" className="h-[96px] w-[68px] rounded" />
                        <div className="block isolate">
                            <div className="flex items-center">
                            <div className="rounded-full h-2 w-2 bg-red-500 ml-4 mr-[-20px] absolute"></div>
                                <p className="ml-5 text-left text-white text-sm p-3 overflow-hidden">KONOSUBA -God's Blessing on This Wonderful World! 3</p>
                            </div>
                                <p className="ml-2 text-left text-neutral-500 text-xs flex">
                                    TV
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1 mr-1">
                                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                                        <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                                    </svg>
                                    2024 
                                    <svg stroke="currentColor" fill="none" class="ml-2 mr-1" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" stroke-width="0" fill="currentColor"></path>
                                        <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    2 / 11
                                    <svg stroke="currentColor" fill="currentColor" class="ml-2 mr-1" stroke-width="0" viewBox="0 0 576 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    82
                                </p>
                        </div>
                    </div>
                </div>

                <div className="m-5 mb-0.5 h-[96px] w-[380px] rounded bg-stone-800">
                    <div className="flex items-center">
                    <img src={anime2} alt="" className="h-[96px] w-[68px] rounded" />
                        <div className="block isolate">
                            <div className="flex items-center">
                            <div className="rounded-full h-2 w-2 bg-red-500 ml-4 mr-[-20px] absolute"></div>
                                <p className="ml-5 text-left text-white text-sm p-3 overflow-hidden">KONOSUBA -God's Blessing on This Wonderful World! 3</p>
                            </div>
                                <p className="ml-2 text-left text-neutral-500 text-xs flex">
                                    TV
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1 mr-1">
                                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                                        <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                                    </svg>
                                    2024 
                                    <svg stroke="currentColor" fill="none" class="ml-2 mr-1" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" stroke-width="0" fill="currentColor"></path>
                                        <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    2 / 11
                                    <svg stroke="currentColor" fill="currentColor" class="ml-2 mr-1" stroke-width="0" viewBox="0 0 576 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    82
                                </p>
                        </div>
                    </div>
                </div>

                <div className="m-5 mb-0.5 h-[96px] w-[380px] rounded bg-stone-800">
                    <div className="flex items-center">
                    <img src={anime3} alt="" className="h-[96px] w-[68px] rounded" />
                        <div className="block isolate">
                            <div className="flex items-center">
                            <div className="rounded-full h-2 w-2 bg-red-500 ml-4 mr-[-20px] absolute"></div>
                                <p className="ml-5 text-left text-white text-sm p-3 overflow-hidden">KONOSUBA -God's Blessing on This Wonderful World! 3</p>
                            </div>
                                <p className="ml-2 text-left text-neutral-500 text-xs flex">
                                    TV
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1 mr-1">
                                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                                        <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                                    </svg>
                                    2024 
                                    <svg stroke="currentColor" fill="none" class="ml-2 mr-1" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" stroke-width="0" fill="currentColor"></path>
                                        <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    2 / 11
                                    <svg stroke="currentColor" fill="currentColor" class="ml-2 mr-1" stroke-width="0" viewBox="0 0 576 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    82
                                </p>
                        </div>
                    </div>
                </div>

                <div className="m-5 mb-0.5 h-[96px] w-[380px] rounded bg-stone-800">
                    <div className="flex items-center">
                    <img src={anime4} alt="" className="h-[96px] w-[68px] rounded" />
                        <div className="block isolate">
                            <div className="flex items-center">
                            <div className="rounded-full h-2 w-2 bg-red-500 ml-4 mr-[-20px] absolute"></div>
                                <p className="ml-5 text-left text-white text-sm p-3 overflow-hidden">KONOSUBA -God's Blessing on This Wonderful World! 3</p>
                            </div>
                                <p className="ml-2 text-left text-neutral-500 text-xs flex">
                                    TV
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1 mr-1">
                                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                                        <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                                    </svg>
                                    2024 
                                    <svg stroke="currentColor" fill="none" class="ml-2 mr-1" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" stroke-width="0" fill="currentColor"></path>
                                        <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    2 / 11
                                    <svg stroke="currentColor" fill="currentColor" class="ml-2 mr-1" stroke-width="0" viewBox="0 0 576 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    82
                                </p>
                        </div>
                    </div>
                </div>

                <div className="m-5 mb-0.5 h-[96px] w-[380px] rounded bg-stone-800">
                    <div className="flex items-center">
                    <img src={anime5} alt="" className="h-[96px] w-[68px] rounded" />
                        <div className="block isolate">
                            <div className="flex items-center">
                            <div className="rounded-full h-2 w-2 bg-red-500 ml-4 mr-[-20px] absolute"></div>
                                <p className="ml-5 text-left text-white text-sm p-3 overflow-hidden">KONOSUBA -God's Blessing on This Wonderful World! 3</p>
                            </div>
                                <p className="ml-2 text-left text-neutral-500 text-xs flex">
                                    TV
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1 mr-1">
                                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                                        <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                                    </svg>
                                    2024 
                                    <svg stroke="currentColor" fill="none" class="ml-2 mr-1" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" stroke-width="0" fill="currentColor"></path>
                                        <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    2 / 11
                                    <svg stroke="currentColor" fill="currentColor" class="ml-2 mr-1" stroke-width="0" viewBox="0 0 576 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    82
                                </p>
                        </div>
                    </div>
                </div>

                <div className="m-5 mb-0.5 h-[96px] w-[380px] rounded bg-stone-800">
                    <div className="flex items-center">
                    <img src={anime6} alt="" className="h-[96px] w-[68px] rounded" />
                        <div className="block isolate">
                            <div className="flex items-center">
                            <div className="rounded-full h-2 w-2 bg-red-500 ml-4 mr-[-20px] absolute"></div>
                                <p className="ml-5 text-left text-white text-sm p-3 overflow-hidden">KONOSUBA -God's Blessing on This Wonderful World! 3</p>
                            </div>
                                <p className="ml-2 text-left text-neutral-500 text-xs flex">
                                    TV
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 ml-1 mr-1">
                                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                                        <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                                    </svg>
                                    2024 
                                    <svg stroke="currentColor" fill="none" class="ml-2 mr-1" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" stroke-width="0" fill="currentColor"></path>
                                        <path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    2 / 11
                                    <svg stroke="currentColor" fill="currentColor" class="ml-2 mr-1" stroke-width="0" viewBox="0 0 576 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    82
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anime;