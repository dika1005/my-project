"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/public/assets/proj5.png";
import project2 from "@/public/assets/proj6.png";
import project3 from "@/public/assets/proj7.png";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2025,
    title: "doodle - customer support chatbot",
    description:
      "A chatbot designed to assist customers with their inquiries and provide support.",
    image: project1,
  },
  {
    id: 2,
    year: 2025,
    title: "dash - ai calling system",
    description:
      "An AI-powered calling system to automate and manage calls efficiently.",
    image: project2,
  },
  {
    id: 3,
    year: 2025,
    title: "atomic - ai calling system",
    description:
      "A robust AI calling system designed for high performance and reliability.",
    image: project3,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portofolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
          ease: "easeInOut",
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        })
      }, []);

      const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section 
        style={{
            backgroundImage
        }}
        id="portofolio" 
        className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Project</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors  ${
                  selectedProject.id === project.id ? "text-gray-200" : ""
                }duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-gray-200 scroll-my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};
