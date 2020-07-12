// Libraries
import React, { useEffect } from "react";
import { useParams } from "react-router";
// Components
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { BlogFooter } from '../../components/Footer/index';
// Queries
import EVENT_QUERY from "../../queries/event/event";
// Component
const Event = () => {
  let { id } = useParams();
  const transformImageUri = (input) => process.env.NODE_ENV !== "development" ? `https://api.adanconstanzo.com${input}` : process.env.REACT_APP_BACKEND_URL + input
  useEffect(() => {
    // Setting extra space to background.
    document.body.classList.add('bg-color-primary');
  });
  return (
    <Query query={EVENT_QUERY} id={id}>
      {({ data: { mapEvent, footers } }) => {
        const HeaderUrl = process.env.NODE_ENV !== "development"
        ? `https://api.adanconstanzo.com${mapEvent.header.url}`
        : process.env.REACT_APP_BACKEND_URL + mapEvent.header.url;
        const style = {
          background: `url(${HeaderUrl}) no-repeat center`,
          backgroundSize: 'cover'
        }
        return (
          <React.Fragment>
            <Eventwrapper mapEvent={mapEvent} style={style} transformImageUri={transformImageUri} />
            <BlogFooter footers={footers} />
          </React.Fragment>
        );
      }}
    </Query>
  );
};
// Wrapper
const Eventwrapper = ({ mapEvent, style, transformImageUri }) => (
  <div>
    <div className="header" > 
      <div className="blur-image" style={style}></div>
      <div className="title">
			<h1>{mapEvent.name}<br/>{mapEvent.city}, {mapEvent.state}</h1>
      </div>
    </div>
    <div className="single">
      <div className="content" >
        <ReactMarkdown source={mapEvent.blog} transformImageUri={transformImageUri} />
      </div>
      {/* <div className="anchor">
        <a href="/blogs" >Check out my other blogs</a>
      </div> */}
    </div>
  </div>
);

export default Event;