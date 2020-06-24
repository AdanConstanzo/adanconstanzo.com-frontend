import TerminalText from './TerminalText';
import Nav from './nav';
import Modal from './modal';
import Blogs from './blogs';
import { smoothScroll, checkProjectScroll } from './utils';

// Run this after DOM content loaded.
window.addEventListener("DOMContentLoaded", () => {
	
	// constant variables being used.
	const texts = ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"];

	// html document references.
	const scrollButton = document.getElementById('arrow');
	
	const terminalText = document.getElementById("terminal-text").children[0];
	
	

	// new terminal object.
	const textText1 = new TerminalText(texts, terminalText);
	// Running init.
	Nav();
	Modal();
	Blogs();

	// variable instance of listener so we can reference to remove later.
	const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
	aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
	aboutMeEvent.cb = textText1.typeAnimation;
	const projectScrollEvent = { sectionId: 'projects', blocksClass: 'projects-hidden' }
	projectScrollEvent.func = checkProjectScroll(projectScrollEvent);
	const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
	blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);

	// Initial check.
	checkProjectScroll(aboutMeEvent)();
	checkProjectScroll(projectScrollEvent)();
	checkProjectScroll(blogsScrollEvent)();

	// setting our scroll listeners
	window.addEventListener('scroll', projectScrollEvent.func);
	window.addEventListener('scroll', blogsScrollEvent.func);
	window.addEventListener('scroll', aboutMeEvent.func);
	
	
	
	// Setting our click listeners.
	scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));

});