import React, { useEffect } from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { BlogFooter } from '../../components/Footer/index';
import EVENT_QUERY from "../../queries/event/event";
import { FormatUrlSrc } from '../../utils/index';
import NoMatch from '../NoMatch/index';

const Event = () => {
  let { id } = useParams();
  useEffect(() => {
    // Setting extra space to background.
    document.body.classList.add('bg-color-primary');
  });
  return (
    <Query query={EVENT_QUERY} id={id}>
      {({ data: { mapEvent } }) => {
        if (mapEvent == null || mapEvent.header == null) {
          return (<NoMatch/>)
        } 
        const style = {
          background: `url(${FormatUrlSrc(mapEvent.header.url)}) no-repeat center`,
          backgroundSize: 'cover'
        }
        return (
          <React.Fragment>
            <EventWrapper mapEvent={mapEvent} style={style} transformImageUri={FormatUrlSrc} />
            <BlogFooter/>
          </React.Fragment>
        );
      }}
    </Query>
  );
};
const EventWrapper = ({ mapEvent, style, transformImageUri }) => (
  <div>
    <div className="header" > 
      <div className="blur-image" style={style}></div>
      <div className="title">
			<h1>{mapEvent.name}<br/>{mapEvent.city}, {mapEvent.state}</h1>
      </div>
    </div>
    <div className="single">
      <div className="content" >
        {mapEvent.blog === null && <center><p>There isn't a post here yet!</p></center>} 
        <ReactMarkdown source={mapEvent.blog} transformImageUri={transformImageUri} />
      </div>
    </div>
  </div>
);

export default Event;