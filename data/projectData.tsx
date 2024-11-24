import {ProjectDataModel} from '@/models/projectDataModel';

const aroundTheWorldIn80: ProjectDataModel = {
  pic: '/project/aw80.png',
  link: 'https://github.com/marcuspeh/Around_The_World_In_80',
  title: 'Around the World in $80',
  description:
    'Splitting bills while traveling can be a hassle, often leaving one person to handle payments and the tedious task of dividing costs later. Our app simplifies this process by seamlessly splitting expenses among group members.',
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
    'Designed to serve both businesses and consumers, this solution features an online web system for managing sales and inventory, complemented by a Telegram bot that lets users check store stock effortlessly.',
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
    'Built with Flutter and Django, Splitlux targets travelers as borders reopen post-pandemic. It streamlines the process of splitting and tracking bills, making travel expenses more efficient and hassle-free.',
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
    'This to-do manager is built with separate backend and frontend components for scalability. The backend provides APIs for the frontend, with sensitive data like passwords encrypted before transmission and hashed before storage for security.',
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
    "Implemented to solve Gardner's Mini Chess, this AI uses Alpha-Beta Pruning with a maximum depth of 4 to balance response time and performance. It achieves a 100% win/draw rate against other intelligent agents.",
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
    'Designed to simplify health checkup reports, MediClear is an easy-to-use platform that offers clear, contextualized test results. It also provides personalized lifestyle management tips to help users improve their well-being.',
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
  mediclear,
  todoManager,
  gardnerMiniChessAi,
];
