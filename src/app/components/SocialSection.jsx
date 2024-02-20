"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import MailIcon from '../../../public/mail-icon.svg'

const SocialSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="social">
        <div>
            <h5 className="text-xl font-bold text-white my-2">My Social</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for new opportunities, You can find me on social media and my github. Feel free to connect with me.                
            </p>            
        </div>
        <div className="socials flex flex-col items-start md:items-center">
        <div className="flex flex-col justify-start gap-2">
            <Link href="https://github.com/arifwidiasan" target="_blank" className="flex flex-row items-center">
                <Image src={GithubIcon}/>
                <p className="justify-center ml-4 font-semibold">arifwidiasan</p>
            </Link>
            <Link href="https://www.linkedin.com/in/arifwidiasan/" target="_blank" className="flex flex-row items-center">
                <Image src={LinkedinIcon}/>
                <p className="justify-center ml-4 font-semibold">arifwidiasan</p>
            </Link>
            <Link href="mailto:arifw.subagio17@gmail.com" target="_blank" className="flex flex-row items-center">
                <Image src={MailIcon} className="size-11"/>
                <p className="justify-center ml-4 font-semibold">arifw.subagio17@gmail.com</p>
            </Link>
        </div>
        </div>
    </section>
  )
}

export default SocialSection