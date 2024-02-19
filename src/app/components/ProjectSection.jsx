"use client";
import React, { useState }from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "Project 1",
        description: "Description 1",
        image: "/image/project1.jpg",
        tag : ["All", "Web"],
        gitUrl: "https://github.com/arifwidiasan",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description 2",
        image: "/image/project2.jpg",
        tag : ["All", "Go"],
        gitUrl: "/",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description 3",
        image: "/image/project3.png",
        tag : ["All", "Web"],
        gitUrl: "/",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Description 4",
        image: "/image/project4.jpg",
        tag : ["All", "Python"],
        gitUrl: "/",
    },
    {
        id: 5,
        title: "Project 5",
        description: "Description 5",
        image: "/image/project5.jpg",
        tag : ["All", "Go"],
        gitUrl: "/",
    },
    {
        id: 6,
        title: "Project 6",
        description: "Description 6",
        image: "/image/project6.png",
        tag : ["All", "Go"],
        gitUrl: "/",
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