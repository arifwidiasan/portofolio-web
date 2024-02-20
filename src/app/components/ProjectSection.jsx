"use client";
import React, { useState }from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "To-do App API",
        description: "API for To-Do App using Golang and MySQL. This project is a simple RESTful API for a to-do app. It has basic CRUD operations and uses JWT for authentication. It is built using Golang Echo Framework and MySQL.",
        image: "/image/project1.png",
        tag : ["All", "Go"],
        gitUrl: "https://github.com/arifwidiasan/todo-app",
    },
    {
        id: 2,
        title: "Web Tansah Binerkahan",
        description: "Website for information about Batik Store named Tansah Binerkahan. This project is a simple website for a Batik Store with Admin page for updating information etc. It has a simple design and is built using Bootstrap and CodeIgniter.",
        image: "/image/project2.png",
        tag : ["All", "Web"],
        gitUrl: "/",
    },
    {
        id: 3,
        title: "Payment Point Online Bank (PPOB) API",
        description: "Backend Program for API Payment Point Online Bank using Echo Golang and Xendit Payment with implementation about Clean Architecture.",
        image: "/image/project3.png",
        tag : ["All", "Go"],
        gitUrl: "https://github.com/arifwidiasan/PPOB-Go",
    },
    {
        id: 4,
        title: "Aksara Jawa Random Forest Classifier",
        description: "Project Machine Learning Detection Javanese Handwriting Using Random Forest and Histogram of Oriented Gradients. It uses Python and Scikit-learn library.",
        image: "/image/project4.png",
        tag : ["All", "Python"],
        gitUrl: "https://github.com/arifwidiasan/Aksara-Jawa-Random_Forest",
    },
    {
        id: 5,
        title: "Statistika Komputasi",
        description: "Simple CodeIgniter for Computational Statistics about Mean, Median, Mode, Variance, and Standard Deviation about laptop price range. It is a simple web application for computational statistics using CodeIgniter and Bootstrap.",
        image: "/image/project5.png",
        tag : ["All", "Web"],
        gitUrl: "/",
    },
    {
        id: 6,
        title: "Taut API",
        description: "API for Taut App using Golang and MySQL. This project is a simple RESTful API for a Taut app. It has basic CRUD operations and uses JWT for authentication. It is built using Golang Echo Framework and MySQL.",
        image: "/image/project6.png",
        tag : ["All", "Go"],
        gitUrl: "https://github.com/arifwidiasan/api-taut",
    },
    {
        id: 7,
        title: "Lexicon-based Sentiment Analysis Kanjuruhan Disaster",
        description: "Lexicon-based Sentiment Analysis for Kanjuruhan Disaster using Python and NLTK. This project is mashine learning about sentiment analysis for Kanjuruhan Disaster in Twittter (X) with Multilayer Percepteron and Convolutional Neural Network.",
        image: "/image/project7.png",
        tag : ["All", "Python"],
        gitUrl: "https://github.com/arifwidiasan/Lexicon-CNN-Kanjuruhan",
    },
    {
        id: 8,
        title: "Profile Web",
        description: "My personal website. This project is a simple personal website. It has a simple design and is built using Next.js and Tailwind CSS.",
        image: "/image/project8.png",
        tag : ["All", "Web"],
        gitUrl: "https://github.com/arifwidiasan/portofolio-web",
    },
    {
        id: 9,
        title: "Pendaftaran PKL Angkasa Pura I API",
        description: "Backend Program for API Pendaftaran PKL Angkasa Pura I using Echo Golang and MySQL with implementation about Clean Architecture. This project is a simple RESTful API for a PKL registration app. It has basic CRUD operations and uses JWT for authentication. It is built using Golang Echo Framework and MySQL.",
        image: "/image/project9.png",
        tag : ["All", "Go"],
        gitUrl: "https://github.com/PKL-Angkasa-Pura-I/backend-pkl",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProject = projectData.filter((project) =>
        project.tag.includes(tag)
    );

  return (
    <div id="portofolio">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Portofolio
        </h2>
        <div className="text-white flex flex-wrap flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Python" 
                isSelected={tag === "Python"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Go" 
                isSelected={tag === "Go"}
            />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProject.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                />
            ))}
        </div>
    </div>
  )
}

export default ProjectSection