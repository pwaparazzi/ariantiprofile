import { Link } from "react-router-dom";
import gita from "../images/gita3.png"

const Home = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-[2.71rem] md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
            Hi, I'm Sagit!
          </h1>
          <p className="text-lg font-sm mb-8 leading-relaxed">
            Hi! My name is Arianti Apriani Sagita 
            an undergradute computer science education student at Indonesia University of Education.
            I'm passionate at learning networking security  and teaching methodologies.
            I love being in all part of problem solving and sosializing process.
            I'm good at making new friends. I like explore new things, challenge myself, and evolve as a developer.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#contact"
              className="transition ease-in-out delay-150 inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-green-700 rounded text-lg font-semibold duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 transition ease-in-out delay-150 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 hover:text-white rounded text-lg font-semibold duration-300"
            >
              Get To Know Me!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img 
            className="object-cover object-center rounded"
            src={gita}  style={{ width: '800px', height: '400px' }}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
