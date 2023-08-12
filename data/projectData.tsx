import {ProjectDataModel} from '@/models/projectDataModel';

const aroundTheWorldIn80: ProjectDataModel = {
  pic: '/project/aw80.png',
  link: 'https://github.com/marcuspeh/Around_The_World_In_80',
  title: 'Around the World in $80',
  description:
    'Splitting bills during travel is often a hassle. Most travel groups often designate one person to pay. This method of settling payments poses a vexing task of splitting costs at the end of the day or on the spot. Our app effectively splits bills between different contacts to serve this purpose.',
  tech: [
    {
      link: 'https://dev.java/',
      text: 'Java',
      id: 'aw80_project_icon_java',
    },
    {
      link: 'https://openjfx.io/',
      text: 'JavaFX',
      id: 'aw80_project_icon_javafx',
    },
  ],
  id: 'aw80_project',
};

const markeet: ProjectDataModel = {
  pic: '/project/markeet_demo.png',
  link: 'https://github.com/marcuspeh/markeet',
  title: 'Points Of Sales System',
  description:
    'Designed with both the business and consumers interest at heart. It incorporates a online web system to help store manage their sales and inventory as well as a telegram bot to help users check for stock in stores.',
  tech: [
    {
      link: 'https://www.mongodb.com/',
      text: 'MongoDB',
      id: 'markeet_project_icon_mongodb',
    },
    {
      link: 'https://react.dev/',
      text: 'ReactJs',
      id: 'markeet_project_icon_reactjs',
    },
    {
      link: 'https://nodejs.org',
      text: 'NodeJs',
      id: 'markeet_project_icon_nodejs',
    },
  ],
  id: 'markeet_project',
};

const splitlux: ProjectDataModel = {
  pic: '/project/splitlux_demo.png',
  link: 'https://github.com/marcuspeh/Splitlux',
  title: 'Splitlux',
  description:
    'Build using Flutter and Django, Splitlux targets travellers in sight of borders opening from the pandemic. It aims to expedites the process by splitting and monitoring bills in an efficient manner during travel.',
  tech: [
    {
      link: 'https://flutter.dev/',
      text: 'Flutter',
      id: 'splitlux_project_icon_flutter',
    },
    {
      link: 'https://www.djangoproject.com/',
      text: 'Django',
      id: 'splitlux_project_icon_django',
    },
    {
      link: 'https://reactnative.dev/',
      text: 'React Native',
      id: 'splitlux_project_icon_react_native',
    },
  ],
  id: 'splitlux_project',
};

const todoManager: ProjectDataModel = {
  pic: '/project/todo_demo.png',
  link: 'https://github.com/marcuspeh/todo-manager',
  title: 'To Do Manager',
  description:
    'This to-do manager is designed as 2 separate parts for backend and frontend for scalability. The backend provides API for the frontend to call. Sensitive information such as password is done securely by encrypting the data before sending to the backend.Hash is also done before storing the data.',
  tech: [
    {
      link: 'https://react.dev/',
      text: 'ReactJs',
      id: 'todoManager_project_icon_reactjs',
    },
    {
      link: 'https://nextjs.org/',
      text: 'NextJs',
      id: 'todoManager_project_icon_nextjs',
    },
    {
      link: 'https://www.postgresql.org/',
      text: 'Postgres',
      id: 'todoManager_project_icon_postgres',
    },
  ],
  id: 'todoManager_project',
};

const gardnerMiniChessAi: ProjectDataModel = {
  pic: '/project/gardner_mini_chess.png',
  link: 'https://github.com/marcuspeh/gardner-mini-chess-AI',
  title: 'Gardner Mini Chess AI',
  description:
    "Implemented to solve Gardner's Mini Chess, this AI is designed using Alpha-Beta Pruning. To balance between response and performance, Alpha-Beta Pruning is done to a max depth of 4. It achieves 100% win/draw rates against other intelligent agents.",
  tech: [
    {
      link: 'https://www.python.org/',
      text: 'Python',
      id: 'gardnerMiniChessAi_project_icon_reactjs',
    },
  ],
  id: 'gardnerMiniChessAi_project',
};

const mediclear: ProjectDataModel = {
  pic: '/project/mediclear_demo.png',
  link: 'https://github.com/mediclear/MediClear_website',
  title: 'MediClear',
  description:
    'Design to simplify health checkup report, MediClear is an easy to use platform that provides clear and contextualized test results. Apart from simplified test result, it also provides lifestyle management tips for the user.',
  tech: [
    {
      link: 'https://nextjs.org/',
      text: 'NextJs',
      id: 'mediclear_project_icon_nextjs',
    },
    {
      link: 'https://www.typescriptlang.org/',
      text: 'TypeScript',
      id: 'mediclear_project_icon_typescript',
    },
    {
      link: 'https://chakra-ui.com/',
      text: 'Chakra UI',
      id: 'mediclear_project_icon_mediclear',
    },
  ],
  id: 'mediclear_project',
};

export const ProjectData: ProjectDataModel[] = [
  aroundTheWorldIn80,
  markeet,
  splitlux,
  todoManager,
  gardnerMiniChessAi,
  mediclear,
];
