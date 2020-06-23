// Libraries
import React from "react";
// Components
import Header from '../../components/Header/';
import AboutMe from '../../components/Section/AboutMe';
// Utilities
import { smoothScroll, checkProjectScroll } from '../../utils/utils';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"]
    }
    this.AboutMeRef = React.createRef();
  }

  componentDidMount() {
    // setTimeout(() => {
    //   console.log(this.AboutMeRef);
    // }, 100);
    const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
    aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
    // aboutMeEvent.cb = textText1.typeAnimation;
    window.addEventListener('scroll', aboutMeEvent.func);

  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default Home;