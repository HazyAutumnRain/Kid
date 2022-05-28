//MANDATORY IMPORTS
import * as comp from './Components/Components.js';
const style = '<link rel="stylesheet" href="style.css">'

const linktext = ["Work", comp.Image("github.png", {width: "25px"}) , "Contact", "Portfolio"]
const links = ["https://mosalim.site", "https://github.com/HazyAutumnRain", "#", "#"];
const navitems = [comp.Image("logo.png", {width: "55px", height: "55px"}), comp.UList(linktext, {width: "250px", areLinks: true, links: links}), comp.Button("Mode", {height: "35px"})];

//STYLE IMPORT IS MANDATORY
document.body.innerHTML = `
	${comp.Navbar(navitems)}
	${comp.Header("Hello World!", {align: "center"})}	
	${style}
`
