import React, { useEffect } from 'react';
import './style.scss';

const NotFound: React.FC = () => {
  //
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headEl = document.head.children as any;
    document.title = 'Page not found';
    headEl.description.content =
      'Sorry, the page you requested was not found. Please go to the existing section';

    const metaRobots = document.createElement('meta');
    metaRobots.name = 'Robots';
    metaRobots.content = 'noindex, follow';

    document.head.appendChild(metaRobots);
  }, []);

  return (
    <div className="notFound container">
      <div className="imageWrap">
        <img className="image mainImg" src="" alt="404 - Page not found" />
      </div>
    </div>
  );
};

export default NotFound;
