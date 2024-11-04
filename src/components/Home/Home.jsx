import React, {useState} from 'react';
import profile from '../../assets/profile.JPG';
import unt from '../../assets/unt.png';
import anu from '../../assets/anu.png';
import veritypay from '../../assets/veritypay.png';
import alignbits from '../../assets/alignbits.png';
import brick from '../../assets/brick.png';
import aws from '../../assets/aws.png';

export default function Home() {

    const [isVerityPayModalOpen, setVerityPayIsModalOpen] = useState(false);
    const [isAlignBitsPayModalOpen, setAlignBitsIsModalOpen] = useState(false);
    const [isBrickModalOpen, setBrickIsModalOpen] = useState(false);

    const veritypayModal = () => {
        setVerityPayIsModalOpen(!isVerityPayModalOpen);
    };

    const alignBitsModel = () => {
        setAlignBitsIsModalOpen(!isAlignBitsPayModalOpen);
    };

    const brickModal = () => {
        setBrickIsModalOpen(!isBrickModalOpen);
    };

    return (
        <div className="p-4 sm:ml-40 sm:mr-40">
            <div className="p-4 border-dashed rounded-lg dark:border-gray-700">
                <div className="flex flex-col items-center justify-center h-48 mb-4 rounded dark:bg-gray-800">
                    {/*Introduction*/}
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

                {/*About Section*/}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-start">
                        <div
                            className="flex-shrink-0 rounded-full overflow-hidden shadow-lg w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* About Me Section */}
                    <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4">About Me</h2>

                        <p className="text-lg font-semibold text-gray-900 mb-2">
                            Software Engineer || <span className="text-blue-900">Full Stack Java Developer</span>
                        </p>

                        <p className="text-black text-base md:text-lg leading-relaxed">
                            As a dedicated software engineer, I specialize in developing and managing innovative
                            technology solutions that drive business success. With expertise in full-stack development
                            utilizing Java, Spring Boot, and React, I am adept at creating robust applications that meet
                            diverse and evolving needs.
                        </p>

                        <p className="mt-4 text-black text-base md:text-lg leading-relaxed">
                            Currently, I am contributing to the growth of VerityPay, where I focus on the development of
                            our SaaS products. My role encompasses overseeing technical implementations, integrating
                            secure authentication mechanisms, and ensuring compliance with industry standards. I am
                            committed to fostering a culture of continuous learning and collaboration within my team,
                            enhancing our ability to deliver high-quality software solutions.
                        </p>
                    </div>
                </div>


                {/*Education*/}
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="flex items-center justify-center rounded h-28 ">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 ">Education</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">

                    <div className="flex items-center justify-center rounded  h-80 ">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-36 h-36 mb-3 rounded-full shadow-lg"
                                 src={unt} alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">University of North
                                Texas</h5>
                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Master's in Computer Science</span>
                            <span
                                className="text-sm italic text-gray-500 dark:text-gray-400">Jan 2022 -  May 2023</span>
                            <span
                                className="text-sm text-gray-500 dark:text-gray-400">GPA: 4/4</span>


                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded h-80 ">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-36 h-36 mb-3 rounded-full shadow-lg"
                                 src={anu} alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Acharya Nagarjuna
                                University</h5>
                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Bachelor's in Computer Science</span>

                            <span
                                className="text-sm italic text-gray-500 dark:text-gray-400">June 2015 -  April 2019</span>
                            <span
                                className="text-sm text-gray-500 dark:text-gray-400">CGPA: 8.5/10</span>

                        </div>
                    </div>
                </div>

                {/*Experience*/}
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-center rounded h-28 ">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 ">Experience</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-center">

                    <div className="flex items-center justify-center rounded  h-80 ">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-36 h-36 mb-3 rounded-full shadow-lg"
                                 src={veritypay} alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">VerityPay</h5>
                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Software Enginner</span>

                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Houston, Texas</span>

                            <span
                                className="text-sm italic text-gray-500 dark:text-gray-400">June 2023 -  Present</span>

                            <div className="flex mt-4 md:mt-4">
                                {/* Modal Toggle Button */}
                                <button
                                    onClick={veritypayModal}
                                    className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Responsibilities
                                </button>

                                {/* Main Modal */}
                                {isVerityPayModalOpen && (
                                    <div
                                        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                                    >
                                        <div className="relative p-4 w-full max-w-2xl">
                                            {/* Modal Content */}
                                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                {/* Modal Header */}
                                                <div
                                                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                        Roles and Responsibilities
                                                    </h3>
                                                    <button
                                                        type="button"
                                                        onClick={veritypayModal}
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <svg
                                                            className="w-3 h-3"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>

                                                {/* Modal Body */}
                                                <div className="p-4 md:p-5 space-y-4">
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Led the development of a cloud-based B2C SaaS financial payment
                                                        solution, driving the product from
                                                        conception to market launch. Focused on enhancing security and
                                                        optimizing architectural design.
                                                    </p>
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Engineered and deployed a containerized application using Java,
                                                        Spring Boot, Spring Security, Spring WebFlux, Spring
                                                        Cloud (Gateway, Load Balancer, Open Feign), JWT, Hibernate,
                                                        Redis, ReactJS, and PostgreSQL,
                                                        achieving a balance between performance and scalability.
                                                    </p>

                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Integrated Nacos for service registration and discovery,
                                                        streamlining service management and resilience
                                                        in the cloud environment.
                                                    </p>

                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Collaborated with financial systems to ensure compliance with
                                                        industry regulations and stayed informed
                                                        about emerging payment trends.
                                                    </p>

                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Applied Agile methodologies to manage project timelines,
                                                        resources, and deliverables while employing
                                                        AWS for CI/CD and code promotion.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center rounded  h-80 ">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-36 h-36 mb-3 rounded-full shadow-lg"
                                 src={alignbits} alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">AlignBits LLC</h5>
                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Software Enginner</span>

                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Pune, India</span>

                            <span
                                className="text-sm italic text-gray-500 dark:text-gray-400">Aug 2021 -  Dec 2021</span>

                            <div className="flex mt-4 md:mt-4">
                                {/* Modal Toggle Button */}
                                <button
                                    onClick={alignBitsModel}
                                    className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Responsibilities
                                </button>

                                {/* Main Modal */}
                                {isAlignBitsPayModalOpen && (
                                    <div
                                        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                                    >
                                        <div className="relative p-4 w-full max-w-2xl">
                                            {/* Modal Content */}
                                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                {/* Modal Header */}
                                                <div
                                                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                        Roles and Responsibilities
                                                    </h3>
                                                    <button
                                                        type="button"
                                                        onClick={alignBitsModel}
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <svg
                                                            className="w-3 h-3"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>

                                                {/* Modal Body */}
                                                <div className="p-4 md:p-5 space-y-4">
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Designed, developed, tested, and deployed software applications
                                                        using Java, JSON, Spring MVC,
                                                        Hibernates and MongoDB.
                                                    </p>
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Created RESTful Web Services for seamless data retrieval,
                                                        storage, and integration with front-end
                                                        technologies like AngularJS.
                                                    </p>

                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Involvement in Developing a team by providing mentorship setting
                                                        technical standards and ensuring
                                                        consistency.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center rounded  h-80 ">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-36 h-36 mb-3 rounded-full shadow-lg"
                                 src={brick} alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">BrickYard Digital
                                Private Limited</h5>
                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Full Stack Java Developer</span>

                            <span
                                className="text-sm mb-1 text-gray-500 dark:text-gray-400">Hyderabad, India</span>

                            <span
                                className="text-sm italic text-gray-500 dark:text-gray-400">Aug 2019 -  Aug 2021</span>

                            <div className="flex mt-4 md:mt-4">
                                {/* Modal Toggle Button */}
                                <button
                                    onClick={brickModal}
                                    className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Responsibilities
                                </button>

                                {/* Main Modal */}
                                {isBrickModalOpen && (
                                    <div
                                        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                                    >
                                        <div className="relative p-4 w-full max-w-2xl">
                                            {/* Modal Content */}
                                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                {/* Modal Header */}
                                                <div
                                                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                        Roles and Responsibilities
                                                    </h3>
                                                    <button
                                                        type="button"
                                                        onClick={brickModal}
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <svg
                                                            className="w-3 h-3"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>

                                                {/* Modal Body */}
                                                <div className="p-4 md:p-5 space-y-4">
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Worked with Software Development and testing team to design and
                                                        develop robust solutions to meet
                                                        client’s requirements for functionality, scalability, and
                                                        performance.
                                                    </p>
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Designed, developed, tested, and deployed E-commerce
                                                        applications using Java Script, Type Script,
                                                        ReactJS, AngularJS, Angular 4, Java, JSON, Java EE, Spring Boot,
                                                        Hibernates, Multithreading, MySQL
                                                        database and Google Cloud Platform.
                                                    </p>

                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Developed RESTful web services using Spring JPA and provided
                                                        support for Production and
                                                        Implementation Issues.
                                                    </p>

                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                        Implemented Microservice architecture to efficiently manage
                                                        backend application services, trading
                                                        partners, and 3rd-party services through API interfaces.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Certifications*/}
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-center rounded h-28">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Certifications</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
                    {/* AWS Solutions Architect Certification */}
                    <div className="flex items-center justify-center rounded h-auto md:h-80">
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="w-24 h-24 md:w-36 md:h-36 mb-3 rounded-full shadow-lg"
                                src={aws}
                                alt="AWS Solutions Architect"
                            />
                            <h5 className="mb-1 text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                                AWS Solutions Architect Associate
                            </h5>
                            <span className="text-sm mb-1 text-gray-500 dark:text-gray-400">
                Amazon Web Services
            </span>
                            <span className="text-sm italic text-gray-500 dark:text-gray-400">
                April 2024 - April 2027
            </span>
                        </div>
                    </div>

                    {/* Product Management Professional Certification */}
                    <div className="flex items-center justify-center rounded h-auto md:h-80">
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="w-24 h-24 md:w-36 md:h-36 mb-3 rounded-full shadow-lg"
                                src={anu}
                                alt="Product Management Certificate"
                            />
                            <h5 className="mb-1 text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                                Product Management Professional Certificate
                            </h5>
                            <span className="text-sm mb-1 text-gray-500 dark:text-gray-400">Aha!</span>
                            <span className="text-sm italic text-gray-500 dark:text-gray-400">December 2023</span>
                        </div>
                    </div>
                </div>


                {/*Skills*/}
                <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center justify-center rounded h-28">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Skills</h2>
                    </div>

                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Categories
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Skills
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Programming Languages
                                </th>
                                <td className="px-6 py-4">
                                    C++, Java, Python, JavaScript, TypeScript, ReactJS, AngularJS
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Web Technologies
                                </th>
                                <td className="px-6 py-4">
                                    HTML5, CSS3, Java Server Pages (JSP), NodeJS, JSON
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Application Frameworks
                                </th>
                                <td className="px-6 py-4">
                                    Django, REST API Microservices, Spring Boot, Spring Cloud (Gateway, Load Balancer,
                                    Open Feign), Spring Security, JWT, Nginx, Hibernate, Multithreading
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Build & Configuration Tools
                                </th>
                                <td className="px-6 py-4">
                                    Docker, Kubernetes, Maven, CI/CD (Jenkins, CircleCI)
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Databases
                                </th>
                                <td className="px-6 py-4">
                                    PostgreSQL, SQL Server, MySQL, NoSQL, MongoDB, Redis
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Version Control Tools
                                </th>
                                <td className="px-6 py-4">
                                    Git, GitLab, GitHub
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Cloud Technologies
                                </th>
                                <td className="px-6 py-4">
                                    AWS (EC2, S3, RDS, SQS, SNS, SES, ECR, CloudWatch, CloudTrail, Aurora), GCP
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Project Management Tools
                                </th>
                                <td className="px-6 py-4">
                                    Jira, Asana, Trello
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 whitespace-nowrap">
                                    Third-Party Integrations
                                </th>
                                <td className="px-6 py-4">
                                    PayPal, Venmo, Plivo (SMS/MMS), Twilio
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}
