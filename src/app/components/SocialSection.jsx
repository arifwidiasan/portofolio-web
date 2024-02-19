"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'

const SocialSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="social">
        <div>
            <h5 className="text-xl font-bold text-white my-2">My Social</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem quia quas, sapiente laborum aut hic repellendus? Necessitatibus, facilis, ab blanditiis quas autem earum exercitationem, ipsa quibusdam quo voluptatibus dolorum?
            </p>            
        </div>
        <div className="socials flex flex-col items-start md:items-center">
        <div className="flex flex-col justify-start gap-2">
            <Link href="https://github.com/arifwidiasan" target="_blank" className="flex flex-row items-center">
                <Image src={GithubIcon}/>
                <p className="justify-center ml-4 font-semibold">github.com</p>
            </Link>
            <Link href="linkedin.com" target="_blank" className="flex flex-row items-center">
                <Image src={LinkedinIcon}/>
                <p className="justify-center ml-4 font-semibold">gikkkthub.com</p>
            </Link>
            <Link href="github.com" target="_blank" className="flex flex-row items-center">
                <Image src={GithubIcon}/>
                <p className="justify-center ml-4 font-semibold">github.com</p>
            </Link>
            <Link href="github.com" target="_blank" className="flex flex-row items-center">
                <Image src={GithubIcon}/>
                <p className="justify-center ml-4 font-semibold">github.com</p>
            </Link>
        </div>
        </div>
    </section>
  )
}

export default SocialSection