import React from 'react';

const GoogleMap = ({ extraClass, src }) => {
  return (
    <div className={`google-map__${extraClass} mb-40`}>
      <iframe
        title='SAAS Google Map'
        src={`${src}`}
        className={`map__${extraClass}`}
        allowFullScreen></iframe>
    </div>
  );
};

export default GoogleMap;
