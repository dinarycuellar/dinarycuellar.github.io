import React, {useState} from 'react';
import {FaArrowRight,FaGithub,FaLinkedin} from 'react-icons/fa';
import profilePic from '/src/assets/pic-web.jpg';
function About(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";
    
return(
    <div name="about">
        {/*Hero Section*/}
        <section className="container flex flex-col justify-start mx-auto px-6 mt-10 mb-20 md:flex-row">
            <div className="flex flex-col space-y-4 md:w-4/6">
                <h2 className="typingHome text-textGreen text-xl text-left max-w-md font-bold">
                    Howdy, <span className="text-textGreen">Dinary Cuellar</span> here.
                </h2>
                <p className="max-w-md text-left text-textLight">
                    Welcome to my corner of the web! I am a Computer Science 
                    student based in New Orleans, Louisiana.
                </p>
                <div className="flex gap-5">
                    <a
                        href="https://github.com/dinarycuellar"
                        target="_blank"
                        rel="noreferrer"
                        className="items-center cursor-pointer text-textLight hover:text-textGreen"
                    ><FaGithub size={25}/></a>
                    <a
                        href="https://www.linkedin.com/in/dinarycuellaralvarez/"
                        target="_blank"
                        rel="noreferrer"
                        className="items-center cursor-pointer text-textLight hover:text-textGreen"
                    ><FaLinkedin size={25}/></a>
                </div>
            </div>
            <div>
                <img src={profilePic} alt="dinary-profile" className="items-center rounded-full mx-auto w-2/5 md:w-full"/>
            </div>
        </section>
        {/*About Text Section*/}
        <section className="container flex flex-col px-4 mx-auto mt-10 space-y-6 mb-20 text-textLight">
            <h1 className="uppercase font-bold inline text-lg">About</h1>
            <div className="space-y-3">
            <p>
                Back in 2020, I began researching ways to calculate the totals of data of spreadsheets quicker. Thus,
                I was introduced to the world of coding.</p>
            <p>In December 2023, I completed my <b>Associates in Information Technology</b> at&nbsp;<a href="https://www.dcc.edu/academics/science-technology-engineering-math/computer-technology/computer-information-technology.aspx"
                className="hover:text-textGreen hover:underline hover:underline-offset-2 font-bold" target="_blank" rel="noreferrer">Delgado Community College</a>. I am currently working on my <b>Bachelors in
                Computer Science</b> at the&nbsp;<a href="https://www.uno.edu/academics/cos/computer-science/undergraduate" className="hover:text-textGreen hover:underline hover:underline-offset-2 font-bold" target="_blank" rel="noreferrer">University of New Orleans</a>.</p>
            </div>
        </section>
        {/*Qualifications Section*/}
        <section className="container text-textLight mx-auto px-4 mt-10 mb-10 space-y-6 flex flex-col">
            <h1 className="uppercase font-bold text-lg">Qualifications</h1>
            <ul className="flex flex-row space-x-8 font-semibold">
                <li
                    className={`hover:text-textGreen tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}>EDUCATION</li>
                <li
                    className={`hover:text-textGreen tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}>EXPERIENCE</li>
            </ul>
            <div className="grid justify-start">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <ol className="flex flex-col relative">
                        <li className="mb-10">
                            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
                                <span className="inline-block px-2 py-1 font-bold text-black bg-white">
                                    2023 - EXPECTED: 2026
                                </span>
                                <a className="text-lg font-semibold hover:text-textGreen hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                                    href="https://www.uno.edu/academics/cos/computer-science/undergraduate" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <h2>Computer Science
                                        <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                                            <FaArrowRight size={12}/></span>
                                    </h2>
                                </a>
                            </p>
                            <p className="my-2 text-base font-normal">
                                Bachelor of Science • University of New Orleans
                            </p>
                        </li>
                        <li className="mb-10">
                            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
                                <span className="inline-block px-2 py-1 font-bold text-black bg-white">
                                    2022 - 2023
                                </span>
                                <a className="text-lg font-semibold hover:text-textGreen hover:underline hover:decoration-2 hover:underline-offset-2 group" 
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
                                <span className="inline-block px-2 py-1 font-bold text-black bg-white">
                                    AUG 2022 - OCT 2023
                                </span>
                                <a className="text-lg font-semibold hover:text-textGreen hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                                    href="https://www.carmax.com" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <h2>Parts Associate • CarMax
                                        <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                                            <FaArrowRight size={12}/></span>
                                    </h2>
                                </a>
                            </p>
                            <p className="my-2 text-base font-normal">
                                Managed inventory, assisted in processing parts orders, and answered inquiries to find the right parts.
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