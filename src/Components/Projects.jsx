import React from 'react'
import PageSection from './PageSection'
import TorchFlare from "../Assets/Projects/TorchFlare.png"
import MangaColorizer from "../Assets/Projects/MangaColorizer.png"
import Glassdoor from "../Assets/Projects/glassdoor.png"
import supplements from "../Assets/Projects/SupplementPrices.png"
import melanoma from "../Assets/Projects/melanoma.png"
import anime from "../Assets/Projects/anime.png"
import rocket from "../Assets/icons/rocket.png"
import expense from "../Assets/Projects/expense.png"
import fashion from "../Assets/Projects/fashion.png"
import {FaGithub} from "react-icons/fa"
const Projects = () => {

  const projects = [
    {
      id : 1,
      image: TorchFlare,
      title : 'TorchFlare',
      subtitle : 'A simple, beginner-friendly, and easy-to-use PyTorch Framework train your models effortlessly.',
      link : 'https://github.com/Atharva-Phatak/torchflare',
      deployed: ""
    },
    {
      id: 2,
      image: fashion,
      title: "ShopME",
      subtitle: "An End to End Fashion Recommender System",
      link: "https://github.com/Atharva-Phatak/shopme",
      deployed: ""
    },
    {
      id: 3,
      image: anime,
      title: 'AnimeME',
      subtitle: "Apply photo animation using Deep Learning 📸.",
      link: 'https://github.com/Atharva-Phatak/AnimeGAN',
      deployed: "https://huggingface.co/spaces/Atharva-Phatak/AnimeGAN"
    },
    {
      id: 4,
      image: expense,
      title: 'ExpenseWise',
      subtitle: "A simple webapp to start budgeting.",
      link: 'https://github.com/Atharva-Phatak/expensewise-backend',
      deployed: "https://expensewise.onrender.com/"
    },
    {
      id: 5,
      image : MangaColorizer,
      title : "MangaColorizer",
      subtitle: 'Colorize Manga using Deep Learning 🚀',
      link: 'https://github.com/Atharva-Phatak/Manga-Colorizer',
      deployed: ""
    },
    {
      id: 6,
      image : Glassdoor,
      title : "Glassdoor",
      subtitle: 'Scrape and Analyze Glassdoor Job Postings to be more Job ready 😉',
      link: 'https://github.com/Atharva-Phatak/Analysing-Glassdoor-Jobs',
      deployed: ""
    },
    {
      id: 7,
      image : supplements,
      title : "Supplements Price Predictor",
      subtitle: 'Collect, Analyze and Predict Prices of Nutrition Supplements 🏋️',
      link: 'https://github.com/Atharva-Phatak/Supplements-Price-Predictor',
      deployed: ""
    },
    {
      id: 8,
      image : melanoma,
      title : "Is that a Melanoma ?",
      subtitle: 'Classify Skin Lesions Using Deep Learning 👨‍⚕️',
      link: 'https://github.com/Atharva-Phatak/Is-That-A-Melanoma',
      deployed: ""
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
        {projects.map(({id, image, title, subtitle, link, deployed}) => (
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
                {(() => {if(deployed !== ""){
                  return (<button className="px-6 py-3 m-4  hover:scale-105 duration-200" onClick={() => openInNewTab(deployed)}>
                    <img src = {rocket} width={35} height={35} alt="deployment"/>
                  </button>)
                }}) ()}
              </div>
          </div>
        ))}
        </div>
      
    </PageSection>
  )

}

export default Projects 