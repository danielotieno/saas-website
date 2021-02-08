import React from 'react';

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title='saas google map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8645736565445!2d39.68733151435208!3d-4.048039046013806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184013cf5f7664a7%3A0x14b74ef130c74a6!2sSAAS!5e0!3m2!1sen!2ske!4v1612805963879!5m2!1sen!2ske'
        className={`map__${extraClass}`}
        allowFullScreen></iframe>
    </div>
  );
};

export default GoogleMap;
