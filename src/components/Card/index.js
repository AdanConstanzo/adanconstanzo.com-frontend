import React from "react";
import { Link } from "react-router-dom";
import { FormatUrlSrc } from '../../utils/index';

const Card = ({ article }) => (
  <Link to={`/article/${article.id}`} className="uk-link-reset">
    <div className="uk-card uk-card-muted">
      <div className="uk-card-media-top">
        <img
          src={FormatUrlSrc(article.image.url)}
          alt={article.image.url}
          height="100"
        />
      </div>
      <div className="uk-card-body">
        <p id="category" className="uk-text-uppercase">
          {article.category.name}
        </p>
        <p id="title" className="uk-text-large">
          {article.title}
        </p>
      </div>
    </div>
  </Link>
);

export default Card;