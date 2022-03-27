import React from 'react';
import YoutubeData from '../../data';

const YoutubeLinks = () => {
  return (
    <div className="container  youtube-body">
      {YoutubeData.map((data, idx) => (
        <div key={idx}>
          <div className="youtube-card">
            <h5>
              {idx + 1}. {data.title}
            </h5>
            <p className="text-muted">{data.date}</p>
            <p>
              Link:{' '}
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {data.url}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YoutubeLinks;
