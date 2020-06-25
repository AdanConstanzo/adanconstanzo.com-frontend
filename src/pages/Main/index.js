// Libraries
import React from "react";
// Components
import Header from '../../components/Header/';
import AboutMe from '../../components/Section/AboutMe';
import Projects from "../../components/Section/Projects";
import Blogs from "../../components/Section/Blogs";
import Query from "../../components/Query";
import Footer from '../../components/Footer';
// Queries
import PROJECT_QUERY from '../../queries/home/projects/projects';
import ABOUT_ME_QUERY from '../../queries/home/aboutMe/aboutMe';
import HEADER_QUERY from '../../queries/home/header/header';
import BLOGS_QUERY from '../../queries/home/blogs/blogs';
import FOOTER_QUERY from '../../queries/home/footer/footer';

class Home extends React.Component {
  componentDidMount() {
    // html document references.
    // Running init.
    // Our sections.
    // SetBlogs();
    // const blogsScrollEvent = { sectionId: 'blogs', blocksClass: 'blogs-hidden' }
    // blogsScrollEvent.func = checkProjectScroll(blogsScrollEvent);
    // checkProjectScroll(blogsScrollEvent)();
    // window.addEventListener('scroll', blogsScrollEvent.func);
    // Setting our objects a function or call back.
    // Initial check.
    // Setting the each function to our scroll event. 
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
        <Query query={BLOGS_QUERY}>
          {({ data: { blogs } }) => <Blogs blogs={blogs} /> }
        </Query>
        <Query query={FOOTER_QUERY}>
          {({ data: { footers } }) => <Footer footers={footers} /> }
        </Query>
      </React.Fragment>
    );
  }
}

export default Home;