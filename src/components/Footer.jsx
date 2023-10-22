import React from 'react';
function Footer(){
    return(
        <div className="container flex flex-col justify-between px-10 py-10 mx-auto space-y-2 md:flex-col">
            <p className="text-sm text-center opacity-50">
                Built with love.<br/>
                &copy; {new Date().getFullYear()} Dinary Cuellar. All rights reserved.
            </p>
        </div>
    )
}
export default Footer;