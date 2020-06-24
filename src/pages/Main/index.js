// Libraries
import React from "react";
// Components
import Header from '../../components/Header/';
import AboutMe from '../../components/Section/AboutMe';
import Projects from "../../components/Section/Projects";
import Blogs from "../../components/Section/Blogs";
import Query from "../../components/Query";
// Queries
import PROJECT_QUERY from '../../queries/projects/projects';
// Scripts
import TerminalText from '../../scripts/TerminalText';
import SetNav from '../../scripts/nav';
// import SetModal from '../../scripts/modal';
import SetBlogs from '../../scripts/blogs';
// Utilities
import { smoothScroll, checkProjectScroll } from '../../scripts/utils';

class Home extends React.Component {
  componentDidMount() {

    // constant variables being used.
    const texts = ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"];
    // html document references.
    const scrollButton = document.getElementById('arrow');
    const terminalText = document.getElementById("terminal-text").children[0];
    // new terminal object.
    const textText1 = new TerminalText(texts, terminalText);
    // Running init.
    SetNav();
    // SetModal();
    SetBlogs();
    // Our sections.
    const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
    const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    // Setting our objects a function or call back.
    aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
    aboutMeEvent.cb = textText1.typeAnimation;
    blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    // Initial check.
    checkProjectScroll(aboutMeEvent)();
    checkProjectScroll(blogsScrollEvent)();
    // Setting the each function to our scroll event. 
    window.addEventListener('scroll', aboutMeEvent.func);
    window.addEventListener('scroll', blogsScrollEvent.func);
    // Setting our click listeners.
    scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <AboutMe />
        <Query query={PROJECT_QUERY}>
					{({ data: { projects } }) => {
            return <Projects projects={projects} />
					}}
				</Query>
        <Blogs />
      </React.Fragment>
    );
  }
}

export default Home;