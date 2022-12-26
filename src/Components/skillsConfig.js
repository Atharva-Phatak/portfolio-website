import python from "../Assets/Skills/python.png"
import torch from "../Assets/Skills/pytorch_logo_icon_170820.png"
import react from "../Assets/Skills/react.png"
import tailwind from "../Assets/Skills/tailwind.png"
import github from "../Assets/Skills/github.png"
import javascript from "../Assets/Skills/JavaScript.png"
import html from "../Assets/Skills/html.png"
import tensorflow from "../Assets/Skills/tensorflow.png"
import pandas from "../Assets/Skills/pandas.png"
import cpp from "../Assets/Skills/c++.png"
import sklearn from "../Assets/Skills/sklearn.png"
import plotly from "../Assets/Skills/plot_ly-icon.png"
import dvc from "../Assets/Skills/dvc.png"
import css from "../Assets/Skills/css-3.png"
import mlflow from "../Assets/Skills/mlflow.png"
import jupyter from "../Assets/Skills/jupyter.png"
import node from "../Assets/Skills/node.png"

const languages = [
    {
        id: 1,
        src: python,
        title : "Python",
        style : "shadow-yellow-500"
    },
    {
        id: 2,
        src: cpp,
        title : "C++",
        style : "shadow-blue-800"
    }
]
const DataScience = [
    {
        id: 1,
        src: torch,
        title : "Pytorch",
        style : "shadow-red-500"

    },
    {
        id: 2,
        src: tensorflow,
        title : "Tensorflow",
        style : "shadow-orange-500"

    },
    {
        id: 3,
        src: pandas,
        title : "Pandas",
        style : "shadow-blue-500"

    },
    {
        id : 4,
        src: sklearn,
        title: "Scikit-Learn",
        style : "shadow-orange-400"
    },
    {
        id: 5,
        src : plotly,
        title: "Plotly",
        style : "shadow-blue-500"

    }
]
const WebDevelopement = [

        {
            id: 1,
            src: html,
            title : "HTML",
            style : "shadow-orange-500"

        },
        {
            id : 2,
            src : css,
            title : "CSS",
            style : "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title : "Javascript",
            style : "shadow-amber-500"

        },
        {
            id: 4,
            src: react,
            title : "ReactJS",
            style : "shadow-sky-500"

        },
        {
            id: 5,
            src: tailwind,
            title : "TailwindCSS",
            style : "shadow-cyan-500"

        },
        {
            id: 6,
            src: node,
            title: "NodeJS",
            style: "shadow-green-600"
            
        }

]

const DataScienceMisc = [
    {
        id: 1,
        src: github,
        title : "Github",
        style : "shadow-gray-500"

    },
    {
        id : 2,
        src : jupyter,
        title : "Jupyter",
        style : "shadow-orange-500"
    },
    {
        id : 3,
        src : dvc,
        title : "DVC",
        style : "shadow-purple-500"
    },
    {
        id: 4,
        src : mlflow,
        title :"MLFLow",
        style : "shadow-sky-600"
    }

]
export {languages, DataScience, WebDevelopement, DataScienceMisc}