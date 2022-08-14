import { v4 as uuidv4 } from "uuid";

const SliderData = [
  {
    id: uuidv4(),
    title: "Fork App",
    subTitle: "In this project, the main task was to consolidate the studied topic ( Cross-browser, Responsive / Adaptive Design ).\n" +
      "List of technologies: Gulp, JavaScript, npm, Node.js, normalize.css, BEM, SASS",
    url: "https://vladonischenko.github.io/Forkio/"
  },
  {
    id: uuidv4(),
    title: "THE HAM",
    subTitle: "Layout for widescreen monitors, with a screen width of 1200 pixels or more. Without Responsive/Adaptive. Basic JavaScript, CSS, HTML.",
    url: "https://vladonischenko.github.io/Programming-essentials-module/"
  },
  {
    id: uuidv4(),
    title: "Medical Cards",
    subTitle: "The app helps easily create, edit and delete doctor appointment cards with the help of external API. Technologies: ES6 Classes (JS), Bootstrap5, SCSS, Gulp. Adaptive web design. (login: kate; password: kate2000)",
    url: "https://vladonischenko.github.io/Medical-Cards/"
  }
];

export default SliderData;
