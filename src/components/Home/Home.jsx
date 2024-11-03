import React from 'react';
import {Link} from 'react-router-dom';
import profile from '../../assets/profile.JPG';

export default function Home() {
    return (
        <div className="p-4 sm:ml-40 sm:mr-40">
            <div className="p-4 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex flex-col items-center justify-center h-48 mb-4 rounded dark:bg-gray-800">

                    <h2 className="text-lg font-bold text-black dark:text-gray-300 mb-2">
                        Hello, my name is
                    </h2>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        <span className="font-bold text-black">Prem kamal</span>{" "}
                        <span className="font-bold text-blue-900">Osipalli</span>
                    </p>
                    <p className="mt-2 text-lg font-bold text-black dark:text-gray-400">
                        Software Engineer at VerityPay
                    </p>

                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 items-center">
                    <div
                        className="flex-shrink-0 ml-8 rounded-full overflow-hidden shadow-lg w-96 h-96">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center lg:text-left max-w-lg">
                        <h2 className="text-5xl font-extrabold text-blue-900 mb-4 ">About Me</h2>

                        <p className="text-lg font-semibold text-gray-900 mb-2">
                        Software Engineer ||<span className="text-blue-900"> Full Stack Java Developer</span>
                        </p>
                        <p className="text-black leading-relaxed">
                            As a dedicated software engineer, I specialize in developing and managing innovative
                            technology solutions that drive business success. With expertise in full-stack development
                            utilizing Java, Spring Boot, and React, I am adept at creating robust applications that meet
                            diverse and evolving needs.
                        </p>
                        <p className="mt-4 text-black leading-relaxed">
                            Currently, I am contributing to the growth of VerityPay, where I focus on the development of
                            our SaaS products. My role encompasses overseeing technical implementations, integrating
                            secure authentication mechanisms, and ensuring compliance with industry standards. I am
                            committed to fostering a culture of continuous learning and collaboration within my team,
                            enhancing our ability to deliver high-quality software solutions.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
