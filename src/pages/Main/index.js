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
// Scripts
import SetNav from '../../scripts/nav';
import SetBlogs from '../../scripts/blogs';
// Utilities
import { smoothScroll, checkProjectScroll } from '../../scripts/utils';

class Home extends React.Component {
  componentDidMount() {
    // html document references.
    const scrollButton = document.getElementById('arrow');
    // Running init.
    SetNav();
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
    scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <Query query={ABOUT_ME_QUERY}>
					{({ data: { homeAboutMe } }) => {
            return <AboutMe homeAboutMe={homeAboutMe} />
					}}
				</Query>
        
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