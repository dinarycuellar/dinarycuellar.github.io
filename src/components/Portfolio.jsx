import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
function Portfolio(){
    return(
    <div className="container flex mx-auto px-6 mt-10 mb-20">
        <section>
            <a className="font-semibold hover:underline hover:decoration-2 hover:underline-offset-2 group" 
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