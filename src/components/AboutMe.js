import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
            About Me
          </h1>
          <p className="lg:w-3/3 mx-auto leading-relaxed text-lg font-medium">
            Born with the name Arianti Apriani Sagita but feel free to call me whatever you like. My given nicknames include Sagit, Gita, Goata,
            what-so-ever. I blow candles on my cake every 25th of April. I live with my mom and my sister in Pasirjambu (contact me for the detail!)
            I like to sosialize with my friends but i prefers indoor activities
            such as reading novels, watching film, and napping. Recently, i've been in relationship with a guy named Nabil Mumtaz. Moving on to my personality,
            I'm a talk active person who loves talk about anything with people around me. 
          
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <a
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative border-4 border-gray-800" >
                <img
                  src={project.image}
                  alt="project i've built"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-x1 title-font font-medium text-green-400 mb-2">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-m font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm font-medium text-white mb-3" > {project.description0}</p>
                  <p className="leading-relaxed text-sm font-medium text-white mb-3">{project.description1}</p>
                  <p className="leading-relaxed text-sm font-medium text-white mb-3">{project.description2}</p>
                  <p className="leading-relaxed text-sm font-medium text-white mb-3">{project.description3}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
