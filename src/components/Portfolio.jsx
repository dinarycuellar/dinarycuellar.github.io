import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import cherryBlossom from '/src/assets/cherryBlossom.jpg';
function Portfolio(){
    return(
    <div className="container flex mx-auto px-6 mt-10 mb-20">
        <section>
            <ol className="flex flex-col relative text-textLight ">
                <li className="mb-10 flex flex-col justify-start mx-auto md:flex-row gap-4">
                    <div className="md:w-4/6">
                        <span className="inline-block border border-white border-2 rounded-md">
                            <img 
                                src={cherryBlossom}
                                alt="Fractal-Tree"
                                className="w-full h-36 md:h-48"
                            />
                        </span>
                    </div>
                    <div>
                        <a className="text-lg font-semibold hover:text-textGreen hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                            href="https://github.com/dinarycuellar/fractal-tree" 
                            target="_blank" 
                            rel="noreferrer">
                            <h2>Fractal Tree
                                <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                                    <FaArrowRight size={12}/></span>
                            </h2>
                        </a>
                        <p className="my-2 text-base font-normal">
                            Developed a Cherry Blossom fractal tree utilizing recursion techniques and the p5 JavaScript library. Implemented dynamic 
                            animation effects, including realistic swaying motion, and a dynamic leaf fall simulation on a continuous loop.
                        </p>
                        <p className="pt-2 flex flex-wrap gap-2 flex-row items-center justify-start text-xs">
                            <span className="rounded-md px-2 py-1 font-bold text-textGreen border border-textGreen border-2">JavaScript</span>
                        </p>
                    </div>
                </li>
            </ol>
            <a className="font-semibold text-textLight hover:text-textGreen hover:underline hover:decoration-2 hover:underline-offset-2 group" 
                href="https://github.com/dinarycuellar" 
                target="_blank" 
                rel="noreferrer">
                <h2>Visit my full portfolio
                    <span className="inline-block pl-2 transition-transform group-hover:translate-x-2">
                        <FaArrowRight size={12}/></span>
                </h2>
            </a>
        </section>
    </div>
    )
}
export default Portfolio;