import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FooterSection = () => {
    return (
        <footer className="footer border z-10 border-t-[#4b5584] border-l-transparent border-r-transparent text-white">
          <div className="container p-12 flex justify-between">
            <Link href={"#"} className="hidden md:block">
                <Image 
                    src="/image/logo-transparent.png" 
                    alt="Logo Image"    
                    width={150} height={30} />
            </Link>
            <p className="text-slate-600">All rights reserved.</p>
          </div>
        </footer>
      );
    };

export default FooterSection