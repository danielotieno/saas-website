import React from 'react';

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title='SAAS Google Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.3254138011253!2d-6.238924384297505!3d53.355330881739526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670ef5ced3db03%3A0x2833d255ddb0b632!2s24%20Fairfield%20Ave%2C%20East%20Wall%2C%20Dublin%2C%20D03%20TE27%2C%20Ireland!5e0!3m2!1sen!2ske!4v1625476716453!5m2!1sen!2ske'
        className={`map__${extraClass}`}
        allowFullScreen></iframe>
    </div>
  );
};

export default GoogleMap;
