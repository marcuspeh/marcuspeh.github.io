import _2048Demo from '../assets/img/2048_demo.jpg'
import aweDemo from '../assets/img/awe_demo.png'
import markeetDemo from '../assets/img/markeet_demo.png'
import mazeSolverDemo from '../assets/img/mazesolver_demo.png'
import splitlixDemo from '../assets/img/splitlux_demo.png'
import rgbDemo from '../assets/img/rgb_demo.png'

interface projectObject {
    "title": string,
    "techStacks": string[],
    "description": string,
    "projectLink": string,
    "image": string
}

const awe80: projectObject = {
    "title": "AROUND THE WORLD IN $80" ,
    "image": aweDemo,
    "techStacks": ['Java', 'JavaFx'],
    "description": 'Splitting bills during travel is often a hassle. Most travel groups often designate one person to pay. This method of settling payments poses a vexing task of splitting costs at the end of the day or on the spot. Our app effectively splits bills between different contacts to serve this purpose.',
    "projectLink": 'https://github.com/marcuspeh/Around_The_World_In_80',
}

const markeet: projectObject = {
    "title": "POINT OF SALES SYSTEM" ,
    "image": markeetDemo,
    "techStacks": ['MongoDb', 'ExpressJS', 'ReactJs', 'NodeJs (JavaScript)'],
    "description": 'Designed with both the business and consumers interest at heart. It incorporates a online web system to help store manage their sales and inventory as well as a telegram bot to help users check for stock in stores.', 
    "projectLink": 'https://github.com/marcuspeh/markeet',
}


const splitlux: projectObject = {
    "title": "SPLITLUX",
    "image": splitlixDemo,
    "techStacks": ['Flutter (dart)', 'Django (Python)'],
    "description": 'Build using Flutter and Django, Splitlux targets travellers in sight of borders opening from the pandemic. It aims to expedites the process by splitting and monitoring bills in an efficient manner during travel.', 
    "projectLink": 'https://github.com/marcuspeh/Splitlux',
}


const _2048Solver: projectObject = {
    "title": "2048 SOLVER",
    "image": _2048Demo,
    "techStacks": ['Python'],
    "description": 'The solver plays the 2048 game based on Monte-Carlo (MC) algorithm. Since each step in 2048 will generate a new tile in random position, MC is the best algorithm for it.', 
    "projectLink": 'https://github.com/marcuspeh/2048solver',
}


const iotRgbLights: projectObject = {
    "title": "IOT RGB LIGHTS",
    "image": rgbDemo,
    "techStacks": ['Nodejs (TypeScript)', "TypeOrm", "Koa", "Postgres", "Arduino (C++)"],
    "description": 'This project contains all the software needed to make an IOT RGB. It consists of the server to control the RGB lights, the codes to control the arduino as well as the app to interact with the rgb led from phone.',
    "projectLink": 'https://github.com/marcuspeh/IOT_RGB_Lights',
}


const mazeSolver: projectObject = {
    "title": "MAZE SOLVER" ,
    "image": mazeSolverDemo,
    "techStacks": ['Java'],
    "description": 'The codes run based on breadth first search and stores the path. The number of rooms reachable with each step is stored in a hashmap while computing the shortest path to solve the maze. This will reduce the computation needed' ,
    "projectLink": 'https://github.com/marcuspeh/Maze-Solver' ,
}


export const ProjectData: projectObject[] = [
    awe80,
    markeet,
    splitlux,
    _2048Solver,
    iotRgbLights,
    mazeSolver,
]
