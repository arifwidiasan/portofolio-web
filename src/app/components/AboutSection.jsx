"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid lg:grid-cols-3 lg:gap-2">
                <ul className="list-disc pl-2">
                <li>Go</li>
                <li>PHP</li>
                <li>Python</li>
                <li>MySQL</li>
            </ul>
            <ul className="list-disc pl-2">
                <li>Echo Golang</li>
                <li>Codeigniter</li>
                <li>GORM</li>
                <li>Docker</li>
            </ul>
            <ul className="list-disc pl-2">
                <li>Web Development</li>
                <li>Git</li>
                <li>Premiere & Photoshop</li>
                <li>Language (Bahasa & English)</li>
            </ul>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>UPN "Veteran" Jawa Timur</li>
                <span className="text-[#ADB7BE] text-sm">(2019-2024, Informatic Department)</span>
                <li>SMK Negeri 4 Malang</li>
                <span className="text-[#ADB7BE] text-sm">(2015-2018, Software Engineering Department)</span>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>PT. Angkasa Pura I Bandara Juanda Surabaya</li>
                <span className="text-[#ADB7BE] text-sm">(Internship, Oct 2022 - Dec 2022)</span>
                <li>PT. Andromedia</li>
                <span className="text-[#ADB7BE] text-sm">(Fullstack Developer Internship, Aug 2022 - Dec 2022)</span>
                <li>Alterra Academy</li>
                <span className="text-[#ADB7BE] text-sm">(Go Developer Apprenticeship, Feb 2022 - Jul 2022)</span>
                <li>PT. Universal Big Data</li>
                <span className="text-[#ADB7BE] text-sm">(Internship, Nov 2016 - Nov 2017)</span>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/image/about_new.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base lg:text-lg">
                I am a 24-year-old Fresh Graduate majoring in Informatics who is ready to pursue a career in a field related to information technology, has a passion for always trying new things and is adaptive in various situations. Have an understanding of algorithms, data structures, clean architecture, and database management. Experienced in Web and Backend Development using PHP, Python, Go, CodeIgniter, MySQL, and Docker.                </p>                
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                        {" "}Experience{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;