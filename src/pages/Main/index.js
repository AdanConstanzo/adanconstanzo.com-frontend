// Libraries
import React from "react";
// Components
import Header from '../../components/Header/';
import AboutMe from '../../components/Section/AboutMe';
import Projects from "../../components/Section/Projects";
import Blogs from "../../components/Section/Blogs";
// Utilities
import { smoothScroll, checkProjectScroll } from '../../utils/utils';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"]
    }
  }

  componentDidMount() {
    // Our sections.
    const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
    const projectScrollEvent = { sectionId: 'projects', blocksClass: 'projects-hidden' }
    const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    // Setting our objects a function or call back.
    aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
    // aboutMeEvent.cb = textText1.typeAnimation;
    projectScrollEvent.func = checkProjectScroll(projectScrollEvent);
    blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    // Initial check.
    checkProjectScroll(aboutMeEvent)();
    checkProjectScroll(projectScrollEvent)();
    checkProjectScroll(blogsScrollEvent)();
    
    // Setting the each function to our scroll event. 
    window.addEventListener('scroll', aboutMeEvent.func);
    window.addEventListener('scroll', projectScrollEvent.func);
    window.addEventListener('scroll', blogsScrollEvent.func);
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <AboutMe />
        <Projects/>
        <Blogs />
      </React.Fragment>
    );
  }
}

export default Home;