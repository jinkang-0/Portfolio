const projects = [
  {
    title: "Cookie Clicker",
    desc: "A game about clicking cookies and getting as many cookies as possible.",
    category: "web game",
    img: "assets/project_images/cookie_clicker.PNG",
    link: "https://jinkang-0.github.io/Cookie-Clicker/",
    started: "07/18/2020",
    updated: "09/11/2020"
  },
  {
    title: "Jinaviard",
    desc: "A web-based story RPG game made for the virtual hackathon HackTheCloud.",
    category: "web game",
    img: "assets/project_images/jinaviard.PNG",
    link: "https://hackthecloud-story-rpg.glitch.me/",
    started: "07/11/2020",
    updated: "07/12/2020"
  },
  {
    title: "Tic-Tac-Toe",
    desc: "A simple game of tic-tac-toe, where you win by lining up 3 X or O's.",
    category: "web game",
    img: "assets/project_images/tic-tac-toe.PNG",
    link: "https://jinkang-0.github.io/Tic-Tac-Toe/",
    started: "08/04/2020",
    updated: "08/15/2020"
  },
  {
    title: "Chess",
    desc: "A classic chess game with digital pieces on a flat digital board.",
    category: "web game",
    img: "assets/project_images/chess.PNG",
    link: "https://jinkang-0.github.io/Chess/",
    started: "08/10/2020",
    updated: "10/27/2020"
  },
  {
    title: "Canvas Practice",
    desc: "An experimental playground for practicing JavaScript and HTML canvas.",
    category: "simulation",
    img: "assets/project_images/canvas_practice.PNG",
    link: "https://jinkang-0.github.io/Canvas-Practice/",
    started: "08/14/2020",
    updated: "09/21/2020"
  },
  {
    title: "Snake",
    desc: "A classic snake game with a whole two customization options.",
    category: "web game",
    img: "assets/project_images/snake.PNG",
    link: "https://jinkang-0.github.io/Snake/",
    started: "08/14/2020",
    updated: "09/14/2020"
  },
  {
    title: "Visualizing Sort",
    desc: "A visualization of some popular sorting algorithms.",
    category: "simulation",
    img: "assets/project_images/visualizing_sort.PNG",
    link: "https://jinkang-0.github.io/Visualizing-Sort/",
    started: "08/30/2020",
    updated: "10/10/2020"
  },
  {
    title: "Double Pendulum",
    desc: "Simulation of the real world physics of a double pendulum",
    category: "simulation",
    img: "assets/project_images/double_pendulum.PNG",
    link: "https://jinkang-0.github.io/Double-Pendulum/",
    started: "09/10/2020",
    updated: "09/12/2020"
  },
  {
    title: "Raycasting",
    desc: "A project made to learn about 2D raycasting, the rays simulates a light source.",
    category: "simulation",
    img: "assets/project_images/raycasting.PNG",
    link: "https://jinkang-0.github.io/Raycasting/",
    started: "09/25/2020",
    updated: "10/10/2020"
  },
  {
    title: "Pathfinding Visual.",
    desc: "A visualization of some popular pathfinding algorithms.",
    category: "simulation",
    img: "assets/project_images/pathfinding_visualization.PNG",
    link: "https://jinkang-0.github.io/Pathfinding-Visualization/",
    started: "10/03/2020",
    updated: "10/12/2020"
  },
  {
    title: "Tetris",
    desc: "A game about stacking tetrominoes in the same row.",
    category: "web game",
    img: "assets/project_images/tetris.PNG",
    link: "https://jinkang-0.github.io/Tetris/",
    started: "10/10/2020",
    updated: "10/11/2020"
  }
];

const featured = [
  projects.find(p => p.title == 'Chess'),
  projects.find(p => p.title == 'Pathfinding Visual.'),
  projects.find(p => p.title == 'Tetris')
];