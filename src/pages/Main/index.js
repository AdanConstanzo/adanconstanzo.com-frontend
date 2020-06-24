// Libraries
import React from "react";
// Components
import Header from '../../components/Header/';
import AboutMe from '../../components/Section/AboutMe';
import Projects from "../../components/Section/Projects";
import Blogs from "../../components/Section/Blogs";
import Query from "../../components/Query";
// Queries
import PROJECT_QUERY from '../../queries/home/projects/projects';
import ABOUT_ME_QUERY from '../../queries/home/aboutMe/aboutMe';
import HEADER_QUERY from '../../queries/home/header/header';
// Scripts
import SetBlogs from '../../scripts/blogs';
// Utilities
import { checkProjectScroll } from '../../scripts/utils';

class Home extends React.Component {
  componentDidMount() {
    // html document references.
    // Running init.
    SetBlogs();
    // Our sections.
    const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    // Setting our objects a function or call back.
    blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    // Initial check.
    checkProjectScroll(blogsScrollEvent)();
    // Setting the each function to our scroll event. 
    window.addEventListener('scroll', blogsScrollEvent.func);
    // Setting our click listeners.
  }

  render(){
    return(
      <React.Fragment>
        <Query query={HEADER_QUERY}>
          {({ data: { homeHeader } }) => <Header homeHeader={homeHeader} />}
        </Query>
        
        <Query query={ABOUT_ME_QUERY}>
          {({ data: { homeAboutMe } }) => <AboutMe homeAboutMe={homeAboutMe} /> }
				</Query>
        
        <Query query={PROJECT_QUERY}>
          {({ data: { projects } }) => <Projects projects={projects} /> }
				</Query>
        <Blogs />
      </React.Fragment>
    );
  }
}

export default Home;