// Libraries
import React, { useEffect } from "react";
// Scripts
import TerminalText from '../../scripts/TerminalText';
import SetModal from '../../scripts/modal';
import SetBlogs from '../../scripts/blogs';
import SetNav from '../../scripts/nav';
// Components
import Header from '../../components/Header/';
import AboutMe from '../../components/Section/AboutMe';
import Projects from "../../components/Section/Projects";
import Blogs from "../../components/Section/Blogs";
import Query from "../../components/Query";
import { HomeFooter } from '../../components/Footer';
// Queries
import HOME_QUERY from '../../queries/home';
//Utilities
import { smoothScroll, checkProjectScroll } from '../../scripts/utils';
// Component
const Home = () => (
  <React.Fragment>
    <Query query={HOME_QUERY}>
    {({ data: { homeHeader, homeAboutMe, projects, blogs, footers } }) => 
      <HomeContainer>
        <Header homeHeader={homeHeader} />
        <AboutMe homeAboutMe={homeAboutMe} /> 
        <Projects projects={projects} />
        <Blogs blogs={blogs} /> 
        <HomeFooter footers={footers} />
      </HomeContainer>
    }
    </Query>
  </React.Fragment>
);
// Wrapper
const HomeContainer = (props) => {
  // constant variables being used.
	const texts = ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"];
  // When component mounts.
  useEffect(() => {
    // DOM Objects
    const scrollButton = document.getElementById('arrow');
    const terminalText = document.getElementById("terminal-text").children[0];
    // Creating objects for animations / scroll .
    const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
    const projectScrollEvent = { sectionId: 'projects', blocksClass: 'projects-hidden' }
    const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    // New instance of Terminal Text. 
    const textText1 = new TerminalText(texts, terminalText);
    // Setting our functions for scroll positions
    aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
		aboutMeEvent.cb = textText1.typeAnimation;
		projectScrollEvent.func = checkProjectScroll(projectScrollEvent);
    blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    // Setting our click event listeners.
    scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));
    // Setting our scroll event listeners.
    window.addEventListener('scroll', aboutMeEvent.func);
		window.addEventListener('scroll', projectScrollEvent.func);
    window.addEventListener('scroll', blogsScrollEvent.func);
    // Calling our initializers. 
    SetModal();
    SetBlogs();
    SetNav();
    // Checking to see if page is currently on certain section. 
		checkProjectScroll(aboutMeEvent)();
		checkProjectScroll(projectScrollEvent)();
    checkProjectScroll(blogsScrollEvent)();
  });
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Home;