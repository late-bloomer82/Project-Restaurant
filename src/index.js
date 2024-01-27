import { loadContent } from "./pageLoad";
import { createMenu } from "./pageLoad";
import { createAbout } from "./pageLoad";
import './styles.css';



const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

document.addEventListener('DOMContentLoaded',loadContent);

homeButton.addEventListener('click', loadContent);

menuButton.addEventListener('click', createMenu);

aboutButton.addEventListener('click', createAbout);