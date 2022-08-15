import _2048Demo from '../assets/img/2048_demo.jpg'
import aweDemo from '../assets/img/awe_demo.png'
import markeetDemo from '../assets/img/markeet_demo.png'
import gardnerMiniChess from '../assets/img/gardner_mini_chess.png'
import splitlixDemo from '../assets/img/splitlux_demo.png'
import todoDemo from '../assets/img/todo_demo.png'

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
  "techStacks": ['Flutter (dart)', 'Django (Python)', 'ReactNative (TypeScript)'],
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


const todoManager: projectObject = {
  "title": "TODO MANAGER",
  "image": todoDemo,
  "techStacks": ['ReactJs', "NextJs", "TypeScript", "TypeOrm", "Koa", "Postgres"],
  "description": 'This to-do manager is designed as 2 separate parts for backend and frontend for scalability. The backend provides API for the frontend to call. Sensitive information such as password is done securely by encrypting the data before sending to the backend.Hash is also done before storing the data.',
  "projectLink": 'https://github.com/marcuspeh/todo-manager',
}


const gardnerMiniChessAi: projectObject = {
  "title": "GARDNER MINI CHESS AI" ,
  "image": gardnerMiniChess,
  "techStacks": ['Python'],
  "description": "Implemented to solve Gardner's Mini Chess, this AI is designed using Alpha-Beta Pruning. To balance between response and performance, Alpha-Beta Pruning is done to a max depth of 4. It achieves 100% win/draw rates against other intelligent agents.s" ,
  "projectLink": 'https://github.com/marcuspeh/gardner-mini-chess-AI' ,
}


export const ProjectData: projectObject[] = [
  awe80,
  markeet,
  splitlux,
  _2048Solver,
  todoManager,
  gardnerMiniChessAi,
]
