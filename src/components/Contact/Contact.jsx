import React from 'react';

export default function Contact() {
    return (
        <div className="py-16 dark:bg-slate-800 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <h2 className="text-2xl dark:text-blue-300 font-bold text-gray-900 md:text-4xl text-center mb-8">
                    Get in Touch
                </h2>
                <div className="flex flex-col items-center">
                    <p className="text-gray-700 dark:text-white mb-6 text-center">
                        I’d love to hear from you! Please fill out the form below or reach out via email.
                    </p>
                    <form className="w-full max-w-lg space-y-4">
                        <div>
                            <label htmlFor="name" className="block dark:text-white text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block dark:text-white text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block dark:text-white text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-blue-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
