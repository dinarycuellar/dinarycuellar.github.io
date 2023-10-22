import React, {useState} from 'react';
import {FaArrowRight,FaGithub,FaLinkedin} from 'react-icons/fa';
import profilePic from '/src/assets/pic-web.jpg';
import {Link} from 'react-router-dom';
function About(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";
    
return(
    <div name="about" className="bg-white">
        {/*Hero Section*/}
        <section className="container flex flex-col justify-start mx-auto px-6 mt-10 mb-20 md:flex-row">
            <div className="flex flex-col space-y-4 md:w-4/6">
                <h2 className="typingHome text-black text-xl text-left max-w-md font-bold">
                    Howdy, <span className="text-black">Dinary Cuellar</span> here.
                </h2>
                <p className="max-w-md text-left text-black">
                    I'm a freelance web developer and completing my Associates in Information Technology.
                </p>
                <div className="flex gap-5">
                    <a
                        href="https://github.com/dinarycuellar"
                        target="_blank"
                        rel="noreferrer"
                        className="items-center cursor-pointer"
                    ><FaGithub size={25}/></a>
                    <a
                        href="https://www.linkedin.com/in/dinarycuellaralvarez/"
                        target="_blank"
                        rel="noreferrer"
                        className="items-center cursor-pointer"
                    ><FaLinkedin size={25}/></a>
                </div>
            </div>
            <div>
                <img src={profilePic} alt="dinary-profile" className="items-center rounded-full mx-auto w-2/5 md:w-full"/>
            </div>
        </section>
        {/*About Text Section*/}
        <section className="container flex flex-col px-4 mx-auto mt-10 space-y-6 mb-20 text-black">
            <h1 className="uppercase font-bold inline text-lg">About</h1>
            <div className="space-y-3">
            <p>
                Back in 2020, I began researching ways to calculate the totals of data on spreadsheets quicker. Thus,
                I was introduced to the world of coding.</p>
            <p>Currently, I am diligently working towards the completion of
                my Associates in Information Technology at&nbsp;<a href="https://www.dcc.edu/academics/science-technology-engineering-math/computer-technology/computer-information-technology.aspx"
                className="hover:underline hover:underline-offset-2 font-semibold" target="_blank" rel="noreferrer">Delgado Community College</a>. Once I obtain this degree, my 
                next step will be to embark on a journey towards earning my Bachelors in Computer Science.</p>
            </div>
        </section>
        {/*Qualifications Section*/}
        <section className="container mx-auto px-4 mt-10 mb-10 space-y-6 flex flex-col">
            <h1 className="uppercase font-bold text-lg">Qualifications</h1>
            <ul className="flex flex-row space-x-8 font-semibold">
                <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}>EDUCATION</li>
                <li
                    className={`tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}>EXPERIENCE</li>
            </ul>
            <div className="grid justify-start">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <ol className="flex flex-col relative">
                        <li className="mb-10">
                            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
                                <span className="inline-block px-2 py-1 font-semibold text-white bg-black">
                                    2023
                                </span>
                                <a className="text-lg font-semibold hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                                    href="https://www.dcc.edu/academics/science-technology-engineering-math/computer-technology/cmin-programmeranalyst.aspx" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <h2>Application Programming
                                        <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                                            <FaArrowRight size={12}/></span>
                                    </h2>
                                </a>
                            </p>
                            <p className="my-2 text-base font-normal">
                                Career & Technical Certificate • Delgado Community College
                            </p>
                        </li>
                        <li className="mb-10">
                            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
                                <span className="inline-block px-2 py-1 font-semibold text-white bg-black">
                                    2022 - 2023
                                </span>
                                <a className="text-lg font-semibold hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                                    href="https://www.dcc.edu/academics/science-technology-engineering-math/computer-technology/cmin-programmeranalyst.aspx" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <h2>Information Technology
                                        <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                                            <FaArrowRight size={12}/></span>
                                    </h2>
                                </a>
                            </p>
                            <p className="my-2 text-base font-normal">
                                Associate of Applied Science • Delgado Community College
                            </p>
                        </li>
                    </ol>
                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                <ol className="flex flex-col relative">
                        <li className="mb-10">
                            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
                                <span className="inline-block px-2 py-1 font-semibold text-white bg-black">
                                    2023 - PRESENT
                                </span>
                                <a className="text-lg font-semibold hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                                    href="https://www.dcc.edu/academics/science-technology-engineering-math/computer-technology/cmin-programmeranalyst.aspx" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <h2>Developer • Cuellar Tech
                                        <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                                            <FaArrowRight size={12}/></span>
                                    </h2>
                                </a>
                            </p>
                            <p className="my-2 text-base font-normal">
                                Design, develop, and maintain websites by collaborating closely with clients to understand
                                their requirements and objectives.
                            </p>
                            <p className="pt-2 flex flex-wrap gap-2 flex-row items-center justify-start text-xs">
                                <span className="rounded-md px-2 py-1 font-semibold text-black border border-black border-2">HTML</span>
                                <span className="rounded-md px-2 py-1 font-semibold text-black border border-black border-2">CSS</span>
                                <span className="rounded-md px-2 py-1 font-semibold text-black border border-black border-2">JavaScript</span>
                            </p>
                        </li>
                </ol>
                </div>
            </div>
        </section>
    </div>
    )
}
export default About;