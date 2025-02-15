"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function MyWork() {
  const projects = [
    {
      title: "AI Product Management Certification",
      description: "I gained experience in ideating, managing, and delivering AI products, from initial concept to MVP, while mastering the AI product development lifecycle. Additionally, I refined my ability to strategically align AI solutions with business objectives to ensure maximum impact.",
      image: "/aipmcert.png", // Ensure the path is correct
      link: "https://maven.com/certificate/jvgLkeCZ",
    },
    {
      title: "Bank of America Financial Center Intern",
      description: "At Bank of America, I led client engagement efforts, educating over 30 customers weekly on digital banking solutions, which boosted adoption by 25%. I also provided tailored support in resolving technical issues, ultimately improving customer satisfaction by 20%.",
      image: "/bofa.jpg", // Ensure the path is correct
    },
    {
      title: "Cartogram Product Management Intern",
      description: "Managed HubSpot, the CRM system, conducted market research, and created competitor analyses. I also designed user flow diagrams and wireframes, and collaborated with the engineering team to refine the product based on client feedback, improving usability and engagement.",
      image: "/cartogram.png", // Ensure the path is correct
      link: "http://165.232.159.91/wordpress/White-Paper-Why-Wayfinding-is-Essential-to-Healthcare-Growth.pdf ",
    },
    {
      title: "Case Competition Projects",
      description: "I refined my problem-solving skills by developing solutions for case studies and conducting operations research, including a paper on AI-driven hyper-personalization. These experiences honed my ability to align business strategies with emerging technological trends.",
      image: "/deca.jpg", // Ensure the path is correct
      link: "https://drive.google.com/file/d/1noWFgUb7cSnLxSdYohozpCGTg5zjDEhV/view?usp=sharing", 
    },
  ];

  return (
    <>
    <Head>
      <title>Tanzil's Website</title>
      <meta name="description" content="Welcome to Tanzil's personal website!" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 flex flex-col items-center text-center px-6 overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-5 w-full flex justify-between items-center px-10">
        <div className="text-2xl text-gray-700"> <Link href="/" >🏠</Link></div>
        <div className="flex gap-6 text-gray-700">
          <Link href="/my-work" className="hover:text-black text-2xl">my work</Link>
          <Link href="/on-the-side" className="hover:text-black text-2xl">(on the side)</Link>
          <Link href="/my-story" className="hover:text-black text-2xl">my story</Link>
          {/* Gmail, LinkedIn, and GitHub icons */}
          <div className="flex gap-6 mb-1 items-end">
            <Link
              href="mailto:tanzilhannah@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-2xl"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tanzilhussain/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-2xl"
            >
              <FaLinkedin />
            </Link>
            <a
              href="https://github.com/tanzilhussain" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div className="absolute left-20 top-[100px]">
        <h1 className="text-7xl font-bold text-gray-900 text-left font-vollkorn">my work (click to explore!)</h1>
      </div>

      {/* Dates */}
      <div>
        <h1 className="absolute left-[14.5rem] top-[225px] text-3xl shadow-sm font-semibold text-purple-700 text-center font-vollkorn">Fall &apos;24</h1>
        <h1 className="absolute left-[31rem] top-[225px] text-3xl shadow-sm font-semibold text-purple-700 text-center font-vollkorn">Summer &apos;24</h1>
        <h1 className="absolute left-[49.5rem] top-[225px] text-3xl shadow-sm font-semibold text-purple-700 text-center font-vollkorn">Summer &apos;23</h1>
        <h1 className="absolute left-[64.5rem] top-[225px] text-3xl shadow-sm font-semibold text-purple-700 text-center font-vollkorn">Fall &apos;20—Spring &apos;24</h1>
      </div>

      {/* Project Panels */}
      <div className="mt-[300px] w-full h-84 max-w-6xl grid grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-96">
              {/* Project Image */}
              <div className="w-full h-24 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300} // Set the width of the image
                  height={150} // Set the height of the image
                  className={`w-full h-full rounded-lg ${
                    index === 0 || index === 3 ? 'object-cover' : 'object-contain'
                  }`}
                />
              </div>

              {/* Project Details */}
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h2>
                <p className="text-sm text-gray-700"><span className="text-purple-700">—————————————————</span><br/>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-screen w-full text-center py-10 text-black">
        <p className="text-1xl underline"> <a href= "https://github.com/tanzilhussain/tanzils-website">&copy; {new Date().getFullYear()} Tanzil Hussain. Built with ❤️ using Next.js, Tailwind CSS, and TypeScript. </a></p>
      </footer>
    </div>
    </>
  );
}