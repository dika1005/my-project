"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import uniku from "../public/assets/uniku.jpeg";
import smp from "../public/assets/smp.png";
import smk from "../public/assets/mbp.jpeg";
import sd from "../public/assets/sd.png";

const services = [
  {
    id: "04",
    title: "Universitas Kuningan",
    description: "tahun 2023 - ????",
    image: uniku,
  },
  {
    id: "03",
    title: "SMK Muhammadiyah 02 Belik Pemalang",
    description: "tahun 2020 - 2023",
    image: smk,
  },
  {
    id: "02",
    title: "SMP Negeri 3 Belik",
    description: "tahun 2017 - 2020",
    image: smp,
  },
  {
    id: "01",
    title: "SD Negeri 02 Kuta",
    description: "tahun 2011 - 2017",
    image: sd,
  },
];

export const Education = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry) {
      (entry.target as HTMLElement).style.opacity = "0";
      (entry.target as HTMLElement).style.transform = "translateY(50px)";
    }
  }, [entry]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="text-white py-20"
    >
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl text-light font-extrabold mb-12"
        >
          History Education
        </motion.h2>

        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className={`flex items-start ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
                style={{ marginTop: `${index * 2}cm` }}
              >
                <div className="text-purple-300 font-bold text-5xl mr-6">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="mt-5 w-200 h-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
