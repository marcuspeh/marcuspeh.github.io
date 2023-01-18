import ProjectDataModel from "../models/projectDataModel"

import demoAwe from "../assets/project/awe_demo.png"
import demoGardnerMini from "../assets/project/gardner_mini_chess.png"
import demoMarkeet from "../assets/project/markeet_demo.png"
import demoTodo from "../assets/project/todo_demo.png"
import demoSplitlux from "../assets/project/splitlux_demo.png"

const awe80: ProjectDataModel = {
  "title": "AROUND THE WORLD IN $80" ,
  "techStacks": ['Java', 'JavaFx'],
  "description": 'Splitting bills during travel is often a hassle. Most travel groups often designate one person to pay. This method of settling payments poses a vexing task of splitting costs at the end of the day or on the spot. Our app effectively splits bills between different contacts to serve this purpose.',
  "projectLink": 'https://github.com/marcuspeh/Around_The_World_In_80',
  "image": demoAwe
}

const markeet: ProjectDataModel = {
  "title": "POINT OF SALES SYSTEM" ,
  "techStacks": ['MongoDb', 'ReactJs', 'NodeJs'],
  "description": 'Designed with both the business and consumers interest at heart. It incorporates a online web system to help store manage their sales and inventory as well as a telegram bot to help users check for stock in stores.', 
  "projectLink": 'https://github.com/marcuspeh/markeet',
  "image": demoMarkeet
}


const splitlux: ProjectDataModel = {
  "title": "SPLITLUX",
  "techStacks": ['Flutter', 'Django', 'React Native'],
  "description": 'Build using Flutter and Django, Splitlux targets travellers in sight of borders opening from the pandemic. It aims to expedites the process by splitting and monitoring bills in an efficient manner during travel.', 
  "projectLink": 'https://github.com/marcuspeh/Splitlux',
  "image": demoSplitlux
}


const todoManager: ProjectDataModel = {
  "title": "TODO MANAGER",
  "techStacks": ['ReactJs', "NextJs", "Postgres"],
  "description": 'This to-do manager is designed as 2 separate parts for backend and frontend for scalability. The backend provides API for the frontend to call. Sensitive information such as password is done securely by encrypting the data before sending to the backend.Hash is also done before storing the data.',
  "projectLink": 'https://github.com/marcuspeh/todo-manager',
  "image": demoTodo
}


const gardnerMiniChessAi: ProjectDataModel = {
  "title": "GARDNER MINI CHESS AI" ,
  "techStacks": ['Python'],
  "description": "Implemented to solve Gardner's Mini Chess, this AI is designed using Alpha-Beta Pruning. To balance between response and performance, Alpha-Beta Pruning is done to a max depth of 4. It achieves 100% win/draw rates against other intelligent agents.s" ,
  "projectLink": 'https://github.com/marcuspeh/gardner-mini-chess-AI' ,
  "image": demoGardnerMini
}


export const ProjectData: ProjectDataModel[] = [
  awe80,
  markeet,
  splitlux,
  todoManager,
  gardnerMiniChessAi,
]
