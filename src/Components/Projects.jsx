import React from 'react'
import PageSection from './PageSection'
import TorchFlare from "../Assets/Projects/TorchFlare.png"
import MangaColorizer from "../Assets/Projects/MangaColorizer.png"
import Glassdoor from "../Assets/Projects/glassdoor.png"
import supplements from "../Assets/Projects/SupplementPrices.png"
import melanoma from "../Assets/Projects/melanoma.png"
import {FaGithub} from "react-icons/fa"
const Projects = () => {

  const projects = [
    {
      id : 1,
      image: TorchFlare,
      title : 'TorchFlare',
      subtitle : 'A simple, beginner-friendly, and easy-to-use PyTorch Framework train your models effortlessly.',
      link : 'https://github.com/Atharva-Phatak/torchflare'
    },
    {
      id: 2,
      image : MangaColorizer,
      title : "MangaColorizer",
      subtitle: 'Colorize Manga using Deep Learning 🚀',
      link: 'https://github.com/Atharva-Phatak/Manga-Colorizer'
    },
    {
      id: 3,
      image : Glassdoor,
      title : "Glassdoor",
      subtitle: 'Scrape and Analyze Glassdoor Job Postings to be more Job ready 😉',
      link: 'https://github.com/Atharva-Phatak/Analysing-Glassdoor-Jobs'
    },
    {
      id: 5,
      image : supplements,
      title : "Supplements Price Predictor",
      subtitle: 'Collect, Analyze and Predict Prices of Nutrition Supplements 🏋️',
      link: 'https://github.com/Atharva-Phatak/Supplements-Price-Predictor'
    },
    {
      id: 6,
      image : melanoma,
      title : "Is that a Melanoma ?",
      subtitle: 'Classify Skin Lesions Using Deep Learning 👨‍⚕️',
      link: 'https://github.com/Atharva-Phatak/Is-That-A-Melanoma'
    },
  ]
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
}

  return (
    <PageSection
    name = "Projects"
    title = "Projects"
    subtitle=""
    >
      <div className='grid sm:grid-cols-3 gap-12 text-white'>
        {projects.map(({id, image, title, subtitle, link}) => (
          <div
          key = {id}
          className="group bg-[#282C35] rounded-lg flex flex-col items-center justify-center p-3 text-center "
          
          >
            <div className='rounded-lg'>
              <img src={image} alt="" className="rounded-md object-scale-down h-48 w-96 p-4 m-4" />
            </div> 
            <h1 className="text-2xl text-center lg:text-3xl my-8 capitalize">{title}</h1>
            <p className="text-lg text-justify">{subtitle}</p>
            <div className="flex items-center justify-center">
                <button className="px-6 py-3 m-4  hover:scale-105 duration-200" onClick={() => openInNewTab(link)}>
                    <FaGithub size = {30} />
                </button>
              </div>
          </div>
        ))}
        </div>
      
    </PageSection>
  )

}

export default Projects 